
/**
 * Extracts the video ID from a YouTube URL
 */
export const extractVideoId = (url: string): string | null => {
  // Handle standard YouTube URLs: https://www.youtube.com/watch?v=VIDEO_ID
  let match = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (match) return match[1];

  // Handle shortened youtu.be URLs: https://youtu.be/VIDEO_ID
  match = url.match(/youtu\.be\/([^?]+)/);
  if (match) return match[1];

  // Handle embed URLs: https://www.youtube.com/embed/VIDEO_ID
  match = url.match(/youtube\.com\/embed\/([^?]+)/);
  if (match) return match[1];

  return null;
};

/**
 * Fetches transcript data for a YouTube video
 * Note: In a real application, this would call a backend service
 */
export const fetchTranscript = async (videoId: string): Promise<string> => {
  // Simulate API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // This is only a simulation - in real app we would need a backend service
      // that uses YouTube's API or web scraping to get actual transcripts
      if (!videoId) {
        reject(new Error("Invalid video ID"));
        return;
      }
      
      // Simulated transcript response
      const mockTranscripts = {
        "dQw4w9WgXcQ": `0:00 We're no strangers to love
0:04 You know the rules and so do I
0:08 A full commitment's what I'm thinking of
0:12 You wouldn't get this from any other guy
0:16 I just wanna tell you how I'm feeling
0:20 Gotta make you understand
0:24 Never gonna give you up
0:26 Never gonna let you down
0:28 Never gonna run around and desert you
0:32 Never gonna make you cry
0:34 Never gonna say goodbye
0:36 Never gonna tell a lie and hurt you`,
        "default": `0:00 This is a simulated transcript
0:03 In a real application, this would be fetched from YouTube's API
0:08 Or through a backend service that can extract the transcript data
0:14 The transcript would contain timestamps and text like this
0:20 Thank you for using ClipScribe!`
      };
      
      resolve(mockTranscripts[videoId] || mockTranscripts.default);
    }, 1500); // Simulate network delay
  });
};
