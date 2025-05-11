
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{company} | {period}</p>
            
            <ul className="list-disc list-inside space-y-1 my-3 text-muted-foreground">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "TechCorp Inc.",
      period: "May 2023 - Aug 2023",
      description: [
        "Analyzed customer data to identify patterns and trends using Python and SQL",
        "Built and deployed machine learning models to predict customer churn with 85% accuracy",
        "Created interactive dashboards using Tableau to visualize findings for stakeholders"
      ],
      technologies: ["Python", "SQL", "Scikit-Learn", "Tableau", "Git"]
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      period: "Sep 2022 - Apr 2023",
      description: [
        "Assisted in research on computer vision algorithms for medical image analysis",
        "Implemented deep learning models using PyTorch for image segmentation",
        "Co-authored a research paper presented at a national conference"
      ],
      technologies: ["PyTorch", "TensorFlow", "Python", "MATLAB", "Git"]
    },
    {
      title: "Data Analysis Intern",
      company: "HealthTech Solutions",
      period: "Jun 2022 - Aug 2022",
      description: [
        "Analyzed patient data to identify trends in treatment outcomes",
        "Developed ETL pipelines to clean and process data from multiple sources",
        "Created statistical reports for medical staff to improve treatment protocols"
      ],
      technologies: ["R", "SQL", "Power BI", "Excel", "SPSS"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-accent/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
