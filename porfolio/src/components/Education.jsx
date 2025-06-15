import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in CSE (AI & DS)',
      institution: 'KIET College, Korangi',
      period: '2022 – 2026',
      cgpa: '8.09',
    },
    {
      degree: 'Intermediate',
      institution: 'G.B.R Junior College, Anaparthi',
      period: '2020 – 2022',
      cgpa: '8.85',
    },
    {
      degree: 'SSC',
      institution: 'Z.P. High School, Dwarapudi',
      period: '2019 – 2020',
      cgpa: '8.7',
    },
  ];

  return (
    <motion.section
      id="education"
      className="section education"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map(({ degree, institution, period, cgpa }, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{degree}</h3>
            <p className="institution">{institution}</p>
            <p className="period">{period}</p>
            <p className="cgpa">CGPA: {cgpa}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
