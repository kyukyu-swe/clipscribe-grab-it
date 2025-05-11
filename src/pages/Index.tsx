
import React, { useState } from 'react';
import Header from '@/components/Header';
import UrlInput from '@/components/UrlInput';
import TranscriptViewer from '@/components/TranscriptViewer';
import InstructionCard from '@/components/InstructionCard';
import { extractVideoId, fetchTranscript } from '@/utils/youtubeUtils';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  
  const handleUrlSubmit = async (url: string) => {
    try {
      setIsLoading(true);
      
      // Extract video ID from the URL
      const videoId = extractVideoId(url);
      if (!videoId) {
        toast({
          title: 'Error',
          description: 'Could not extract video ID from the URL',
          variant: 'destructive',
        });
        return;
      }
      
      setCurrentVideoId(videoId);
      
      // Fetch transcript data
      const transcriptText = await fetchTranscript(videoId);
      setTranscript(transcriptText);
      
      toast({
        title: 'Success',
        description: 'Transcript loaded successfully',
      });
    } catch (error) {
      console.error('Error fetching transcript:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to fetch transcript',
        variant: 'destructive',
      });
      setTranscript('');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="container py-8 flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Download YouTube Video Transcripts
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Easily access, view, and download transcripts from any YouTube video. Just paste the video URL and click to get started.
        </p>
        
        <UrlInput onSubmit={handleUrlSubmit} isLoading={isLoading} />
        
        {isLoading && (
          <div className="w-full max-w-3xl mx-auto mt-8 flex justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-48"></div>
            </div>
          </div>
        )}
        
        {!isLoading && transcript && (
          <TranscriptViewer transcript={transcript} videoId={currentVideoId} />
        )}
        
        {!transcript && !isLoading && <InstructionCard />}
      </main>
      
      <footer className="py-4 border-t bg-youtube-dark text-youtube-light text-center text-sm">
        <div className="container">
          <p>ClipScribe - YouTube Transcript Downloader</p>
          <p className="text-youtube-gray text-xs mt-1">
            Not affiliated with YouTube. For educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
