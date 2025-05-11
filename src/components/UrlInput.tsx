
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInput = ({ onSubmit, isLoading }: UrlInputProps) => {
  const [url, setUrl] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a YouTube URL',
        variant: 'destructive',
      });
      return;
    }
    
    // Basic validation for YouTube URLs
    if (!url.includes('youtube.com/watch?v=') && !url.includes('youtu.be/')) {
      toast({
        title: 'Invalid URL',
        description: 'Please enter a valid YouTube video URL',
        variant: 'destructive',
      });
      return;
    }
    
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          type="url"
          placeholder="Paste YouTube video URL (e.g., https://www.youtube.com/watch?v=...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-youtube-red hover:bg-red-700 text-white"
        >
          {isLoading ? 'Loading...' : 'Get Transcript'}
        </Button>
      </div>
    </form>
  );
};

export default UrlInput;
