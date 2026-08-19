// src/pages/Home.tsx
import { motion } from "framer-motion";
import bankingImage from "../assets/works/banking-app.png";
import retailProImage from "../assets/works/retail-pro-app.png";
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
      { name: "Python", icon: pythonIcon },
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
    name: "Retail Pro App",
    url: "https://dancing-sunflower-a89cfe.netlify.app/",
    completed: 70,
    description:
      "A retail management interface for inventory and sales tracking.",
    image: retailProImage,
  },
  {
    name: "Banking App",
    url: "https://cool-queijadas-f87675.netlify.app/",
    completed: 70,
    description: "A consumer banking UI with account and transaction views.",
    image: bankingImage,
  },
  {
    name: "Job Search and Posting App",
    url: "https://rainbow-fudge-2bfdbc.netlify.app/",
    completed: 75,
    description: "A platform for job seekers and employers to connect.",
    image: jobPostingImage,
  },
  {
    name: "NGO Website",
    url: "https://brilliant-brioche-3c9eb4.netlify.app/",
    completed: 90,
    description: "A donation and awareness site built for a non-profit.",
    image: ngoImage,
  },
  {
    name: "Chat App",
    url: "https://nino-chat-app.netlify.app/",
    completed: 60,
    description: "A real-time messaging app with a clean, minimal UI.",
    image: chatAppImage,
  },
  {
    name: "Adol Paul College Frontend",
    url: "https://adolpaulschool.netlify.app/",
    completed: 50,
    description: "A frontend rebuild for a school's public-facing website.",
    image: adolImage,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Shared heading style used by "My Skills", "My Works", and the
// "About My Craft" heading — mirrors the old shared CSS selector.
const sectionHeading = "text-[2.2rem] mb-0 text-[#38bdf8] text-center";

const Home = () => {
  return (
    <>
      <title>Richard Nneji | Full Stack Developer</title>
      <meta
        name="description"
        content="Richard Nneji is a Full Stack Developer in Lagos, Nigeria, building modern, scalable web applications with React, TypeScript, and Node.js."
      />
      <link rel="icon" type="image/png" href="/logo.png" />

      <main className="min-h-screen bg-linear-to from-[#020617] to-[#0f172a] text-white px-5 py-10">
        {/* INTRO */}
        <motion.section
          className="text-center max-w-700 mx-auto mb-25"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[2.8rem] leading-[1.3]">
            Hi, I&apos;m Richard
            <br />
            <span className="text-[#38bdf8]">Full Stack Developer</span>
          </h1>

          <p className="mt-5 text-[1.1rem] text-[#94a3b8]">
            I&apos;m based in Lagos, Nigeria. I build modern, fast, and
            user-friendly web applications with clean and scalable code.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mt-8 max-[500px]:flex-col max-[500px]:items-stretch">
            <a
              href="#works"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-[0.95rem] no-underline transition-all duration-300 cursor-pointer bg-linear-to-tr from-[#38bdf8] to-[#8b5cf6] text-white border-2 border-transparent shadow-[0_8px_20px_rgba(56,189,248,0.3)] hover:-translate-y-3 hover:shadow-[0_12px_30px_rgba(56,189,248,0.5)]"
            >
              View My Work
            </a>
          </div>

          <div
            className="flex gap-6 justify-center flex-wrap mt-7"
            aria-label="Social links"
          >
            <a
              href="https://github.com/nino-dev92"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#94a3b8] no-underline text-[0.9rem] font-medium transition-colors duration-200 hover:text-[#38bdf8]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/richard-nneji-304b4233a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#94a3b8] no-underline text-[0.9rem] font-medium transition-colors duration-200 hover:text-[#38bdf8]"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          className="mb-27.5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-155 mx-auto mb-14 text-center">
            <h2 className={sectionHeading}>My Skills</h2>
            <p className="mt-3.5 text-[#94a3b8] text-base leading-[1.6]">
              Languages, frameworks, and tools I use to design, build, and ship
              full-stack applications end to end.
            </p>
          </div>

          <div className="flex flex-col max-w-280 mx-auto px-5">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                className="grid grid-cols-[200px_1fr] gap-6 py-8 border-b border-[#94a3b8]/12 last:border-b-0 max-[700px]:grid-cols-1 max-[700px]:gap-3"
                variants={item}
              >
                <h3 className="text-xs font-bold text-[#64748b] m-0 text-left uppercase tracking-[1.4px] pt-1.5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="inline-flex items-center justify-center p-2.5 rounded-[14px] bg-white/2 border border-[#94a3b8]/18 cursor-pointer transition-all duration-200 hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/8 hover:-translate-y-3"
                      variants={item}
                      title={skill.name}
                      aria-label={skill.name}
                    >
                      <span className="w-14 h-14 flex items-center justify-center rounded-[10px] overflow-hidden bg-white/90 shrink-0">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          loading="lazy"
                          className="w-full h-full object-contain block p-1.5 box-border"
                        />
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* About my craft */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-[2.2rem] text-[#38bdf8] text-center mb-8">
              About My Craft
            </h3>
            <div className="max-w-205 mx-auto px-7 py-6 rounded-[18px] bg-linear-to-tr from-[#38bdf8]/12 to-[#8b5cf6]/12 backdrop-blur- shadow-[0_12px_30px_rgba(2,6,23,0.25)]">
              <p className="m-0 text-base leading-[1.8] text-[#dbeafe]">
                I&apos;m a Full-Stack Developer passionate about building
                scalable, secure, and user-focused web applications. My core
                stack includes React, TypeScript, JavaScript, Node.js,
                Express.js, and MongoDB, enabling me to develop responsive
                frontends, secure REST APIs, and efficient backend systems.
                I&apos;m also expanding my skills in Docker, Kubernetes, CI/CD
                pipelines, and Infrastructure as Code (IaC) to strengthen my
                understanding of modern cloud-native development and deployment
                practices. I enjoy solving real-world problems through clean,
                maintainable code and continuously improving my skills with
                every project. My goal is to build reliable software that
                delivers meaningful value while growing as an engineer.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* WORKS */}
        <motion.section
          id="works"
          className="mt-25 mb-25"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className={`${sectionHeading} mb-8`}>My Works</h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7.5 max-w-250 mx-auto px-5 max-[500px]:grid-cols-1">
            {works.map((work) => (
              <motion.article
                key={work.name}
                className="p-0 rounded-2xl bg-[#020617]/80 border-[1.5px] border-[#38bdf8]/30 backdrop-blur-[20px] overflow-hidden flex flex-col transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#38bdf8]/80 hover:shadow-[0_20px_50px_rgba(56,189,248,0.3),0_0_40px_rgba(139,92,246,0.2)]"
                variants={item}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="relative h-45 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-linear-gradient(180deg,rgba(2,6,23,0)_40%,rgba(2,6,23,0.9)_100%)]"
                  style={{ backgroundImage: `url(${work.image})` }}
                  role="img"
                  aria-label={`Preview of ${work.name}`}
                />

                <div className="relative z-10 text-left px-6.5 pt-5.5 pb-7 w-full box-border flex flex-col items-start gap-3 flex-1">
                  <div className="flex items-center justify-between gap-3 w-full">
                    <h3 className="text-[1.3rem] font-semibold text-[#e2e8f0] m-0 tracking-[0.3px]">
                      {work.name}
                    </h3>
                    <span
                      className="shrink-0 text-xs font-bold text-[#38bdf8] bg-[#38bdf8]/12 border border-[#38bdf8]/30 px-2.5 py-1 rounded-full"
                      aria-label={`${work.completed}% complete`}
                    >
                      {work.completed}%
                    </span>
                  </div>

                  <p className="text-[0.9rem] text-[#94a3b8] m-0 leading-normal">
                    {work.description}
                  </p>

                  <div className="w-full h-1.5 rounded-full bg-[#94a3b8]/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-tr from-[#38bdf8] to-[#8b5cf6]"
                      style={{ width: `${work.completed}%` }}
                    />
                  </div>

                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 mt-1 bg-linear-to-tr from-[#38bdf8] to-[#8b5cf6] text-white no-underline rounded-lg font-semibold text-[0.95rem] border-2 border-transparent cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(56,189,248,0.3)] hover:-translate-y-3 hover:shadow-[0_12px_30px_rgba(56,189,248,0.5)] hover:tracking-[0.5px] active:-translate-y-1"
                  >
                    Visit Project
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
