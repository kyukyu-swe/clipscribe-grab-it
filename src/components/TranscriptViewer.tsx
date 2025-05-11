
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

interface TranscriptViewerProps {
  transcript: string;
  videoId: string | null;
}

const TranscriptViewer = ({ transcript, videoId }: TranscriptViewerProps) => {
  const handleDownload = () => {
    if (!transcript) return;
    
    // Create a blob from the transcript text
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `youtube-transcript-${videoId || 'download'}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-6">
      <CardHeader className="flex flex-row items-center justify-between bg-gray-50">
        <CardTitle className="text-lg">Transcript</CardTitle>
        <Button 
          onClick={handleDownload}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md text-sm overflow-auto max-h-[500px]">
          {transcript || 'No transcript available'}
        </pre>
      </CardContent>
    </Card>
  );
};

export default TranscriptViewer;
