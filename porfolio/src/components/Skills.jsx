import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "MySQL"],
    "Programming Languages": ["Python", "Java", "JavaScript"],
    "Technologies": ["Machine Learning", "REST API", "JWT/Auth"],
    "Tools": ["Git", "GitHub", "Visual Studio Code"],
    "Soft Skills": ["Leadership", "Teamwork", "Communication", "Creativity", "Problem Solving"]
  };

  return (
    <motion.section
      id="skills"
      className="section skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
