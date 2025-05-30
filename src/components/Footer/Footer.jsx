import { motion } from "framer-motion";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

library.add(far);

const Footer = () => {
  const footerLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Academic Profile" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: ["fab", "google"], label: "Google Scholar" },
    { icon: ["fab", "linkedin"], label: "LinkedIn" },
    { icon: ["fab", "x-twitter"], label: "X" },
    { icon: ["fab", "github"], label: "GitHub" },
  ];

  const contactInfo = [
  { icon: ["fas", "location-dot"], 
    text: "Accra, Ghana" },
  { icon: ["fas", "envelope"], 
    text: "richakrong@hotmail.com" },
  { icon: ["fas", "phone"], 
    text: "+233 558850660" },
];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>About This Portal</h3>
            <p>
              This portal showcases my dedication to contribute to full stack web development, covering both frontend and backend technologies.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Contact Info</h3>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={info.icon} />
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Richard Akrong. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
