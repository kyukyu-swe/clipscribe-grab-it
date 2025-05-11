
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InstructionCard = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-10">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-lg">How to use ClipScribe</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ol className="list-decimal pl-5 space-y-2">
          <li>Copy a YouTube video URL from your browser</li>
          <li>Paste the URL into the input field above</li>
          <li>Click "Get Transcript" to fetch the video's transcript</li>
          <li>Once loaded, you can read the transcript directly or download it as a text file</li>
        </ol>
        <div className="mt-4 bg-yellow-50 p-3 rounded-md border border-yellow-200 text-sm">
          <p className="font-medium text-yellow-800">Note:</p>
          <p className="text-yellow-700">
            This is a demo application. In a production environment, this would connect to YouTube's API
            or a backend service to fetch actual transcripts. The current version uses simulated data.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructionCard;
