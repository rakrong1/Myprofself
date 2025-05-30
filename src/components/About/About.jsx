import { motion } from 'framer-motion';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const academicInfo = [
    {
      icon: 'fas fa-graduation-cap',
      text: 'BSc Computer Science, Kwame Nkrumah University of Science and Technology, 2019.'
    },
    {
      icon: 'fas fa-university',
      text: 'Current Position: Software Engineer-Lead, Baraka Policy Institute.'
    },
    {
      icon: 'fas fa-flask',
      text: 'Research Interests: Advanced AI Integration, Machine Learning, Advanced Security, Highly-Secured Payment Systems Integration, and Data Privacy.'
    },
    {
      icon: 'fas fa-book',
      text: 'Completed Projects: Delivered 10+ full-scale projects, including dynamic web applications, RESTful APIs, and data-driven platforms, with a strong focus on performance, scalability, and clean architecture.'
    }
  ];

  return (
    <motion.section 
      className="about" 
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-img"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper glass-card">
              <img 
                src="/images/About.png" 
                alt="Richard Akrong" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text glass-card"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Who Am I?</h3>
            <p>Innovative and execution-driven Full Stack Developer with 5+ years of experience building high-performance, mobile-first, scalable web applications using React, JavaScript/TypeScript (SWC), and modern backend technologies. Proven ability to architect and deliver robust end-to-end solutions across the entire development lifecycle — from concept and UX to deployment and maintenance.</p>
            <p>Skilled in developing responsive frontends with React, optimizing performance with SWC, and designing secure, RESTful APIs using Node.js, Express, and TypeScript. Strong command of MongoDB, PostgreSQL, and SQL optimization, with deep experience in schema design, data integrity, and query tuning. Adept at using Git, CI/CD pipelines, and Docker to ensure clean deployments and collaborative development.</p>
            <p>Known for combining technical precision with product thinking, consistently delivering elegant, maintainable code aligned with user needs and business goals. Passionate about clean architecture, developer experience, and continuous learning in fast-paced, agile environments.</p>
            
            <div className="academic-info">
              {academicInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;