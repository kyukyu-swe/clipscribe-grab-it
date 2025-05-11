
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="container">
        <div className="mb-8 relative mx-auto size-40 overflow-hidden rounded-full border-4 border-primary/20">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Alex Chen
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Data Scientist & ML Engineer
        </p>
        
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          Fresh graduate with passion for machine learning, data analysis, and solving complex problems using AI. 
          Looking to leverage my skills in a challenging role.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:alex.chen@example.com">
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
