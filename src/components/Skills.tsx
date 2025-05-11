
import React from 'react';

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Java"]
    },
    {
      title: "Data Science & ML",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "Keras"]
    },
    {
      title: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Tableau", "PowerBI", "D3.js"]
    },
    {
      title: "Big Data",
      skills: ["Hadoop", "Spark", "Kafka", "AWS", "Google Cloud"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Problem-Solving", "Critical Thinking", "Teamwork", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {skillCategories.slice(0, 3).map((category) => (
              <SkillCategory 
                key={category.title} 
                title={category.title} 
                skills={category.skills}
              />
            ))}
          </div>
          <div>
            {skillCategories.slice(3).map((category) => (
              <SkillCategory 
                key={category.title} 
                title={category.title} 
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
