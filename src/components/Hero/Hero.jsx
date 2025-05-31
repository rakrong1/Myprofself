import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero" 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-background"></div>

      {/* Video background element */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Add additional source formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My Development Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building Mobile-First, responsive web applications with modern technologies and best practices.
            Access my complete collection of projects, case studies, and technical documentation in Full Stack Development
          </motion.p>
          
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#publications" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Technical Skills
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;