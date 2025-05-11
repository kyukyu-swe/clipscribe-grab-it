
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

const ProjectCard = ({ title, description, image, tags, githubUrl, demoUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          {demoUrl && (
            <Button size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn for a telecom company using historical customer data.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Stock Price Forecasting",
      description: "Time series analysis project to predict stock prices using LSTM neural networks and technical indicators.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["TensorFlow", "Python", "Pandas", "Matplotlib", "Yahoo Finance API"],
      githubUrl: "https://github.com"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Web application that analyzes sentiment from social media posts about specific products or brands.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["NLTK", "Python", "Flask", "React", "D3.js"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Medical Image Classification",
      description: "Deep learning model to classify medical images for disease detection using convolutional neural networks.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["PyTorch", "TensorFlow", "CNN", "Transfer Learning"],
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
