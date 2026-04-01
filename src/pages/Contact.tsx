import { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Me</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your Message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send Message</button>
          </form>

          {/* SOCIAL ICONS */}
          <div className="socials">
            <a href="https://www.facebook.com/share/159twUee3u/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="facebook"
              />
            </a>

            <a href="https://www.instagram.com/italiannino_92?igsh=d2Y3azYzNzMyanJy&utm_source=qr" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="instagram"
              />
            </a>

            <a href="http://www.linkedin.com/in/richard-nneji-30" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="linkedin"
              />
            </a>

            <a href="mailto:nnejirichard@yahoo.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
              />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
            alt="developer workspace"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;