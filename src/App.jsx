import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt,
  FaCode, FaBriefcase, FaGraduationCap, FaCertificate, FaDownload,
  FaExternalLinkAlt, FaTimes, FaChevronRight, FaLaptopCode, FaServer,
  FaBrain, FaTools, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiPostman, 
  SiFigma, SiFlask, SiJupyter } from 'react-icons/si';

import Profile from './assets/profile.jpg';
import Dev from './assets/Dev.png';
import MedChat from './assets/MedChat.png';
import Resume from './assets/DP_RESUME.pdf';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      // Use setTimeout to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const personalInfo = {
    name: "Durga Prasad Koppireddy",
    title: "Full-Stack Developer & AI Enthusiast",
    tagline: "Building scalable web applications and data-driven solutions",
    phone: "+91-8790237365",
    email: "prasad8790237@gmail.com",
    github: "https://github.com/DurgaPrasad-54",
    linkedin: "https://linkedin.com/in/durga-prasad-koppireddy-778516275",
    location: "Hyderabad, India",
    profileImage: Profile
  };

  const skills = {
    frontend: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Responsive Design", icon: <FaLaptopCode />, level: 92 }
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Express.js", icon: <SiExpress />, level: 88 },
      { name: "Flask", icon: <SiFlask />, level: 80 },
      { name: "RESTful APIs", icon: <FaServer />, level: 90 }
    ],
    languages: [
      { name: "Python", icon: <FaPython />, level: 92 },
      { name: "JavaScript", icon: <FaJs />, level: 88 },
      { name: "Java", icon: <FaCode />, level: 75 }
    ],
    databases: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "MySQL", icon: <SiMysql />, level: 82 }
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 90 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
      { name: "Figma", icon: <SiFigma />, level: 70 }
    ],
    ai: [
      { name: "Machine Learning", icon: <FaBrain />, level: 80 },
      { name: "Data Processing", icon: <FaDatabase />, level: 85 }
    ]
  };

  const experience = [
    {
      title: "Senior Developer Intern",
      company: "RCTS – IIIT Hyderabad",
      period: "Aug 2025 – Apr 2026",
      location: "Hyderabad, India",
      responsibilities: [
        "Built student dashboard for DevStack hackathon management platform using React.js and Node.js, serving 200+ participants with role-based access control",
        "Designed and implemented RESTful APIs for team registration, submission tracking, mentor assignment, and real-time event updates using Express.js and MongoDB",
        "Participated in code reviews, Agile sprints, and technical discussions",
        "Documented implemented features and technical workflows"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"]
    },
    {
      title: "Developer Intern",
      company: "Piramal Swasthya",
      period: "Jan 2026 – Mar 2026",
      location: "Remote",
      responsibilities: [
        "Automated API documentation pipeline by building GitHub workflows, reducing manual documentation time by 60%",
        "Developed database health monitoring APIs for MySQL and Redis, ensuring 99.5% database uptime",
        "Implemented Git hooks for commit quality enforcement, improving code consistency and reducing merge conflicts by 40%",
        "Contributed to healthcare-focused backend services with REST API development, authentication integration, and database optimization"
      ],
      technologies: ["Java", "MySQL", "Redis", "GitHub Actions", "REST APIs", "Git", "Spring Boot"]
    }
  ];

  const projects = [
    {
      title: "DevStack Hackathon Platform",
      description: "A full-stack hackathon management system enabling seamless event organization, team management, and real-time updates for 200+ participants.",
      features: [
        "Role-based dashboards for Admin, Mentor, and Student",
        "Real-time team registration and submission tracking",
        "RESTful API architecture with MongoDB integration",
        "Responsive React.js frontend with modern UI/UX"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      github: "https://github.com/DurgaPrasad-54/Dev-Stack.git",
      image: Dev
    },
    {
      title: "MedChat – AI Medical Assistant",
      description: "An intelligent medical chatbot leveraging Groq LLM API and transformer-based embeddings to provide accurate, context-aware medical information.",
      features: [
        "RAG-style pipeline for medical question answering",
        "JWT-based authentication and input validation",
        "Persistent chat history with conversational context",
        "Real-time medical content retrieval and response generation"
      ],
      technologies: ["React.js", "Flask", "Groq API", "Transformers", "JWT", "MongoDB"],
      github: "https://github.com/DurgaPrasad-54/MedicalChatbot",
      image: MedChat
    }
  ];

  const education = {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "KIET, Korangi",
    period: "2022 – 2026",
    gpa: "8.13",
    status: "Graduated with Distinction"
  };

  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "Infosys Springboard",
      year: "2025"
    },
    {
      title: "Introduction to Python",
      issuer: "Edyst",
      year: "2022"
    },
    {
      title: "Foundations of Modern Machine Learning",
      issuer: "IIIT Hyderabad",
      year: "2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              right: mousePosition.x - 192,
              bottom: mousePosition.y - 192,
            }}
          />
        </div>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Durga Prasad
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                  <span className="block w-6 h-0.5 bg-current"></span>
                </div>}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div className="px-4 py-4 space-y-3">
                  {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection(item);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center break-words leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <button
                onClick={() => window.open(Resume, '_blank')}
                className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <FaChevronRight />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  I'm an AI & Data Science graduate with a strong passion for building impactful technology solutions. 
                  My expertise spans across full-stack web development, machine learning, and creating data-driven applications 
                  that solve real-world problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  With hands-on experience in developing scalable web applications using the MERN stack, I've contributed to 
                  projects serving hundreds of users. I specialize in building RESTful APIs, integrating modern technologies, 
                  and implementing efficient database solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  Currently working as a Senior Developer Intern at IIIT Hyderabad's RCTS, I've gained valuable experience 
                  in agile development, code reviews, and collaborative team environments. I'm passionate about continuous 
                  learning and staying updated with the latest technologies in web development and AI.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I thrive in fast-paced environments where I can leverage my problem-solving skills and technical expertise 
                  to create innovative solutions. My goal is to contribute to projects that make a meaningful impact while 
                  continuously expanding my skill set.
                </p>
              </div>


            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FaLaptopCode className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend Development</h3>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-blue-600 dark:text-blue-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Skills */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FaServer className="text-2xl text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Backend Development</h3>
                </div>
                <div className="space-y-4">
                  {skills.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-green-600 dark:text-green-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Programming Languages */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FaCode className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Programming Languages</h3>
                </div>
                <div className="space-y-4">
                  {skills.languages.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-purple-600 dark:text-purple-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <FaDatabase className="text-2xl text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Databases</h3>
                </div>
                <div className="space-y-4">
                  {skills.databases.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-orange-600 dark:text-orange-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <FaTools className="text-2xl text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tools & Technologies</h3>
                </div>
                <div className="space-y-4">
                  {skills.tools.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-cyan-600 dark:text-cyan-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AI & Machine Learning */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                    <FaBrain className="text-2xl text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
                </div>
                <div className="space-y-4">
                  {skills.ai.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-pink-600 dark:text-pink-400">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 relative"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute top-8 left-0 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group"
                >
                  {/* Project Image/Banner */}
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaGithub />
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FaGraduationCap className="text-3xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{education.degree}</h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{education.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{education.period}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">CGPA: {education.gpa}</span>
                      </div>
                      <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">{education.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FaCertificate className="text-3xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">{cert.issuer}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{cert.year}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
              <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Feel free to reach out!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <div className="p-3 bg-green-600 rounded-lg">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                >
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{personalInfo.location}</p>
                  </div>
                </motion.div>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                >
                  <div className="p-3 bg-indigo-600 rounded-lg">
                    <FaLinkedin className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                    <p className="font-semibold text-gray-900 dark:text-white">Connect with me</p>
                  </div>
                </motion.a>
              </div>

              <div className="flex justify-center gap-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub size={32} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaLinkedin size={32} />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaEnvelope size={32} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 {personalInfo.name}. Built with React, Tailwind CSS & Framer Motion.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Designed & Developed with ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;