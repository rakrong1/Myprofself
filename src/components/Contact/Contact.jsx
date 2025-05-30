import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt);
library.add(faWhatsapp);
library.add(faPhone);
library.add(fas, fab);
library.add(far);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sr7lf1h",
        "template_dza98wt",
        form.current,
        "oqzQT3Yk0bgFrGy1h"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      className="contact"
      id="contact"
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
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-subtitle"
          >
            To discuss collaboration opportunities, consulting, or full-stack
            development projects, please don’t hesitate to get in touch.
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info glass-card"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Get In Touch</h3>

            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "location-dot"]} />
              <div>
                <h4>Location</h4>
                <p>
                  Accra
                  <br />
                  Greater Accra Region
                  <br />
                  Ghana
                </p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
              <div>
                <h4>Email</h4>
                <p>akrong.rich@hotmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={["fas", "phone"]} />
              <div>
                <h4>Phone</h4>
                <p>+233 558 850 660</p>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href="mailto:akrong.rich@hotmail.com"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </motion.a>
              <motion.a
                href="tel:+233558850660"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={["fas", "phone"]} />
              </motion.a>
              <motion.a
                href="https://wa.me/233558850660"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
              </motion.a>
              <motion.a
                href="https://www.google.com/maps/place/Accra,+Ghana"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form glass-card"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <FontAwesomeIcon icon={["fas", "user"]} className="input-icon" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                className="input-icon"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <FontAwesomeIcon icon={["fas", "tag"]} className="input-icon" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="form-group">
              <FontAwesomeIcon
                icon={["fas", "comment-dots"]}
                className="input-icon"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
