import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 id="aboutme">About Me</h2>
      <p>
        I am Koppireddy Durga Prasad, a passionate full-stack developer and B.Tech student specializing in Artificial Intelligence and Data Science. With hands-on experience in Python, Machine Learning, and the MERN stack, I build intelligent and efficient web applications.
      </p>
      <p>
        I have developed a real-time Air Quality Prediction web app using Flask and Scikit-learn, demonstrating my ability to integrate machine learning models into interactive interfaces. I thrive in team environments, continuously expand my skills, and enjoy solving complex problems through technology.
      </p>
      <p>
        My tech stack includes Python, JavaScript, HTML, CSS, MongoDB, Flask, and the complete MERN stack. I am also proficient with Git, GitHub, and Visual Studio Code, and I have a strong foundation in both frontend and backend development.
      </p>
    </motion.section>
  );
};

export default About;
