// src/pages/Home.tsx
import { motion } from "framer-motion";
import "./Home.css";
import bankingImage from "../assets/works/banking-app.png";
import jobPostingImage from "../assets/works/job-posting-app.png";
import ngoImage from "../assets/works/ngo-website.png";
import chatAppImage from "../assets/works/chat-app.png";
import adolImage from "../assets/works/adol-paul-college.png";
import htmlIcon from "../assets/skills/html5.png";
import cssIcon from "../assets/skills/css3.png";
import jsIcon from "../assets/skills/javascript.png";
import reactIcon from "../assets/skills/react.png";
import tsIcon from "../assets/skills/typescript.png";
import nodeIcon from "../assets/skills/nodejs.png";
import nextIcon from "../assets/skills/nextjs.png";
import phpIcon from "../assets/skills/php.png";
import sqlIcon from "../assets/skills/sql.png";
import mongoIcon from "../assets/skills/mongodb.png";
import gitIcon from "../assets/skills/git.png";
import githubIcon from "../assets/skills/github.png";
import pythonIcon from "../assets/skills/python.png";
import dockerIcon from "../assets/skills/docker.png";
import kubernetesIcon from "../assets/skills/kubernetes.png";
import githubActionsIcon from "../assets/skills/github.png";
import terraformIcon from "../assets/skills/terraform.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import expressIcon from "../assets/skills/express-wordmark.svg";
import apiIcon from "../assets/skills/backend.png";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "REST APIs", icon: apiIcon },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: mongoIcon },
      { name: "SQL", icon: sqlIcon },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { NAME: "Python", icon: pythonIcon },
    ],
  },
  {
    title: "DevOps & Cloud (Learning)",
    items: [
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "GitHub Actions", icon: githubActionsIcon },
      { name: "IaC", icon: terraformIcon },
    ],
  },
];

const works = [
  {
    name: "Banking App",
    url: "https://cool-queijadas-f87675.netlify.app/",
    completed: "70%",
    image: bankingImage,
  },
  {
    name: "Job Search and Posting App",
    url: "https://rainbow-fudge-2bfdbc.netlify.app/",
    completed: "75%",
    image: jobPostingImage,
  },
  {
    name: "NGO Website",
    url: "https://brilliant-brioche-3c9eb4.netlify.app/",
    completed: "90%",
    image: ngoImage,
  },
  {
    name: "Chat App",
    url: "https://nino-chat-app.netlify.app/",
    completed: "60%",
    image: chatAppImage,
  },
  {
    name: "Adol Paul College Frontend",
    url: "https://adolpaulschool.netlify.app/",
    completed: "50%",
    image: adolImage,
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
    <>
      <title>Richard Nneji</title>
      <link rel="icon" type="image/png" href="/logo.png"></link>

      {/**Main Content */}
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

          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3 style={{ textAlign: "center" }}>{group.title}</h3>
                <div className="skills-grid">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-card"
                      variants={item}
                      whileHover={{ scale: 1.1 }}
                      title={skill.name}
                    >
                      <div className="skill-image" aria-label={skill.name}>
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/**About my craft */}
          <motion.div
            className="craft-div"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3>About My Craft</h3>
            <div className="skills-summary">
              <p>
                I'm a Full-Stack Developer passionate about building scalable,
                secure, and user-focused web applications. My core stack
                includes React, TypeScript, JavaScript, Node.js, Express.js, and
                MongoDB, enabling me to develop responsive frontends, secure
                REST APIs, and efficient backend systems. I'm also expanding my
                skills in Docker, Kubernetes, CI/CD pipelines, and
                Infrastructure as Code (IaC) to strengthen my understanding of
                modern cloud-native development and deployment practices. I
                enjoy solving real-world problems through clean, maintainable
                code and continuously improving my skills with every project. My
                goal is to build reliable software that delivers meaningful
                value while growing as an engineer. This version is shorter,
                easier to scan, and works well for a portfolio homepage while
                still highlighting both your core development skills and your
                growing DevOps knowledge.
              </p>
            </div>
          </motion.div>
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
                style={{ backgroundImage: `url(${work.image})` }}
              >
                <div className="work-card-content">
                  <h3>{work.name}</h3>
                  <p>Check out this project</p>
                  <p>Completed: {work.completed}</p>
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
    </>
  );
};

export default Home;
