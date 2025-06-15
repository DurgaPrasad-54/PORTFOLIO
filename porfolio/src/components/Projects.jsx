import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: 'NOTE APP',
      image: '/NOTEAPP.png',
      description:
        'A full-stack application that allows users to register, log in, and manage personal notes securely. Built with authentication and CRUD functionalities.',
      tech: 'Node.js, Express.js, MongoDB, React.js',
      link: 'https://noteapp-five-plum.vercel.app/',
    },
    {
      title: 'Air Quality Prediction',
      image: '/AQI.png',
      description:
        'A Flask-based machine learning web app that predicts Air Quality Index (AQI) using real-time environmental data.',
      tech: 'Python, Flask, Scikit-learn, HTML, CSS, JS',
      link: 'https://aqi-app-255e.onrender.com/',
    },
    
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 id="project">Projects</h2>
      <div className="projects-row">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">Click to view webpage</div>
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
