import os
import json
import re
import time
from typing import Dict, List, Optional
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv
import argparse

# Load environment variables
load_dotenv()

# YouTube API setup
YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')
MAX_RETRIES = 3
RETRY_DELAY = 5  # seconds
API_QUOTA_ERROR_CODES = [403, 429]

def create_youtube_client():
    return build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)

def get_video_details(video_id: str, retry_count: int = 0) -> Optional[Dict]:
    """
    Get video details from YouTube API with retry mechanism
    """
    try:
        youtube = create_youtube_client()
        request = youtube.videos().list(
            part="snippet",
            id=video_id
        )
        response = request.execute()

        if response['items']:
            video = response['items'][0]['snippet']
            return {
                'title': video['title'],
                'url': f'https://www.youtube.com/watch?v={video_id}'
            }
        
        print(f"No video found for ID '{video_id}'")
        return None

    except HttpError as e:
        if e.resp.status in API_QUOTA_ERROR_CODES:
            print(f"API quota exceeded or rate limit hit. Error: {str(e)}")
            if retry_count < MAX_RETRIES:
                wait_time = RETRY_DELAY * (retry_count + 1)
                print(f"Waiting {wait_time} seconds before retry {retry_count + 1}/{MAX_RETRIES}")
                time.sleep(wait_time)
                return get_video_details(video_id, retry_count + 1)
            else:
                print("Max retries reached. Stopping process.")
                return None
        else:
            print(f"HTTP error occurred: {str(e)}")
            return None
    except Exception as e:
        print(f"Error getting video details for '{video_id}': {str(e)}")
        return None

def search_video(title: str, language: str, retry_count: int = 0) -> Optional[str]:
    """
    Search for a video on YouTube with retry mechanism
    """
    # Add language specific keywords to improve search
    lang_keywords = {
        'ru': 'мультфильм',
        'en': 'cartoon'
    }
    
    search_query = f"{title} {lang_keywords.get(language, '')}"
    
    try:
        youtube = create_youtube_client()
        request = youtube.search().list(
            part="id,snippet",
            q=search_query,
            type="video",
            maxResults=1,
            relevanceLanguage=language
        )
        response = request.execute()

        if response['items']:
            video_id = response['items'][0]['id']['videoId']
            print(f"Found video for '{title}': https://www.youtube.com/watch?v={video_id}")
            return f'https://www.youtube.com/watch?v={video_id}'
        
        print(f"No video found for '{title}'")
        return None

    except HttpError as e:
        if e.resp.status in API_QUOTA_ERROR_CODES:
            print(f"API quota exceeded or rate limit hit. Error: {str(e)}")
            if retry_count < MAX_RETRIES:
                wait_time = RETRY_DELAY * (retry_count + 1)
                print(f"Waiting {wait_time} seconds before retry {retry_count + 1}/{MAX_RETRIES}")
                time.sleep(wait_time)
                return search_video(title, language, retry_count + 1)
            else:
                print("Max retries reached. Stopping process.")
                return None
        else:
            print(f"HTTP error occurred: {str(e)}")
            return None
    except Exception as e:
        print(f"Error searching for video '{title}': {str(e)}")
        return None

def update_constants_file(start_index: int = 1, end_index: int = None):
    """
    Read the constants.ts file, update video URLs, and write back
    Args:
        start_index: The 1-based index to start processing from
        end_index: The 1-based index to end processing at (inclusive)
    """
    try:
        # Read the current constants.ts file
        with open('src/app/modules/Game/constants.ts', 'r', encoding='utf-8') as f:
            content = f.read()

        # Find all video objects in the content
        video_pattern = r'{[\s\n]*title: [\'"](.+?)[\'"],[\s\n]*url: [\'"](.+?)[\'"],[\s\n]*language: [\'"](.+?)[\'"][\s\n]*}'
        videos = list(re.finditer(video_pattern, content))
        total_videos = len(videos)
        
        # Validate and adjust indices
        start_index = max(1, min(start_index, total_videos))
        if end_index is None:
            end_index = total_videos
        else:
            end_index = max(start_index, min(end_index, total_videos))
        
        print(f"Found {total_videos} videos total")
        print(f"Processing videos from {start_index} to {end_index}")

        # Keep track of processed videos to avoid duplicate API calls
        processed_videos: Dict[str, str] = {}
        
        # Process each video in the specified range
        for i in range(start_index - 1, end_index):
            match = videos[i]
            title = match.group(1)
            old_url = match.group(2)
            language = match.group(3)

            print(f"\nProcessing video {i + 1}/{total_videos}")
            print(f"Title: {title}")
            print(f"Language: {language}")
            
            # Skip if we've already processed this title
            if title in processed_videos:
                print(f"Using cached URL for '{title}'")
                new_url = processed_videos[title]
            else:
                print(f"Searching for '{title}'")
                new_url = search_video(title, language)
                if new_url:
                    processed_videos[title] = new_url
                else:
                    print(f"Keeping old URL for '{title}'")
                    new_url = old_url  # Keep old URL if search fails

            # Replace the old URL with the new one in the content
            if new_url and new_url != old_url:
                print(f"Updating URL: {old_url} -> {new_url}")
                content = content.replace(old_url, new_url)

            # Save progress after each video
            with open('src/app/modules/Game/constants.ts', 'w', encoding='utf-8') as f:
                f.write(content)
            print("Progress saved.")

    except Exception as e:
        print(f"Error updating constants file: {str(e)}")
        return

def main():
    if not YOUTUBE_API_KEY:
        print("Error: YOUTUBE_API_KEY not found in environment variables")
        print("Please create a .env file with your YouTube API key:")
        print("YOUTUBE_API_KEY=your_api_key_here")
        return

    # Get start and end indices from command line arguments
    parser = argparse.ArgumentParser(description='Update YouTube video URLs in constants.ts')
    parser.add_argument('--start', type=int, default=1, help='Start processing from this video index (1-based)')
    parser.add_argument('--end', type=int, help='End processing at this video index (1-based, inclusive)')
    args = parser.parse_args()

    print("Starting video URL update process...")
    update_constants_file(args.start, args.end)

if __name__ == "__main__":
    main() 