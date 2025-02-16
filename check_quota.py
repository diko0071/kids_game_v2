from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# YouTube API setup
YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')

def check_quota():
    try:
        # Create YouTube API client
        youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)
        
        # Make a simple API request
        request = youtube.videos().list(
            part="snippet",
            id="dQw4w9WgXcQ"  # Just a random video ID
        )
        response = request.execute()
        
        print("API request successful!")
        print("Quota is available")
        return True
        
    except HttpError as e:
        if "quota" in str(e).lower():
            print("Quota exceeded error:")
            print(str(e))
        else:
            print("Other API error:")
            print(str(e))
        return False
        
    except Exception as e:
        print("Unexpected error:")
        print(str(e))
        return False

if __name__ == "__main__":
    print("Checking YouTube API quota status...")
    check_quota() 