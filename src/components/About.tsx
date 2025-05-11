
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-accent/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Background</h3>
              <p className="text-muted-foreground">
                I recently graduated with a Bachelor's degree in Data Science from University of Technology. 
                My academic journey has equipped me with strong foundations in statistics, machine learning, 
                and data analysis. During my studies, I completed several internships that allowed me to 
                apply theoretical knowledge to real-world problems.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">BSc in Data Science</p>
                  <p className="text-muted-foreground">University of Technology (2020-2024)</p>
                  <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
                </div>
                <div>
                  <p className="font-medium">Data Science Specialization</p>
                  <p className="text-muted-foreground">Coursera - Johns Hopkins University (2023)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
