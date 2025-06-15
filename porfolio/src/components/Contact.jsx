import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p>
        <MdEmail style={{ marginRight: '8px' }} />
        Email: <a href="mailto:prasad8790237@gmail.com">koppireddydurgaprasad@gmail.com</a>
      </p>
      <p>
        <FaLinkedin style={{ marginRight: '8px' }} />
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/durga-prasad-778516275/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/durga-prasad-778516275
        </a>
      </p>
      <p>
        <FaGithub style={{ marginRight: '8px' }} />
        GitHub:{' '}
        <a
          href="https://github.com/DurgaPrasad-54"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/DurgaPrasad-54
        </a>
      </p>
    </motion.section>
  );
};

export default Contact;
