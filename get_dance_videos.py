from update_video_urls import get_video_details

# List of video IDs
video_ids = [
    'Avr4Dz0tKYE',
    'QmyjivY8HRk',
    'IyfkFWyx3t0',
    '02H502iplUU'
]

# Get details for each video
videos = []
for video_id in video_ids:
    details = get_video_details(video_id)
    if details:
        videos.append(details)
        print(f"Found video: {details['title']}")
    else:
        print(f"Could not get details for video {video_id}")

print("\nVideo list for constants.ts:")
print("videos: [")
for video in videos:
    print(f"  {{ title: '{video['title']}', url: '{video['url']}', language: 'ru' }},")
print("]") 