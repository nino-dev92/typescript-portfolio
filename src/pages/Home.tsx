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
        className="skills-section"
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
              whileHover={{ scale: 1.1 }}
            >
              <a target="_blank" href={work.url}>
                {work.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
