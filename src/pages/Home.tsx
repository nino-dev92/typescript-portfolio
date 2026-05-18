// src/pages/Home.tsx
import { motion } from "framer-motion";
import "./Home.css";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT JS",
  "TYPESCRIPT",
  "NODE JS",
  "NEXT JS",
  "PHP",
  "SQL",
  "MONGO DB",
  "GIT",
  "PYTHON",
];

const works = [
  {
    name: "Banking App",
    url: "https://cool-queijadas-f87675.netlify.app/",
  },
  {
    name: "Job Posting App",
    url: "https://rainbow-fudge-2bfdbc.netlify.app/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="home">
      {/* INTRO */}
      <motion.section
        className="intro"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I'm Richard
          <br />
          <span className="highlight">Full Stack Developer</span>
        </h1>

        <p>
          I'm based in Lagos, Nigeria. I build modern, fast, and user-friendly
          web applications with clean and scalable code.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        className="skills-section"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="skill-card"
              variants={item}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WORKS */}
      <motion.section
        className="works-section"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="works-title">My Works</h2>

        <div className="works-grid">
          {works.map((work) => (
            <motion.div
              key={work.name}
              className="work-card"
              variants={item}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="work-card-content">
                <h3>{work.name}</h3>
                <p>Check out this project</p>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-button"
                >
                  Visit Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
