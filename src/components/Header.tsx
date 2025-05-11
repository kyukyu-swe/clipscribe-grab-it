
import React from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 bg-youtube-dark text-youtube-light">
      <div className="container flex items-center justify-center md:justify-start gap-3">
        <FileText className="h-6 w-6 text-youtube-red" />
        <h1 className="text-xl md:text-2xl font-bold">ClipScribe</h1>
        <span className="hidden md:inline-block text-youtube-gray text-sm ml-2">YouTube Transcript Downloader</span>
      </div>
    </header>
  );
};

export default Header;
