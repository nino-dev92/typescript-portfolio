// src/pages/Home.tsx
import { motion, type Variants } from "framer-motion";

// Work images
import bankingImage from "../assets/works/banking-app.png";
import retailProImage from "../assets/works/retail-pro-app.png";
import jobPostingImage from "../assets/works/job-posting-app.png";
import ngoImage from "../assets/works/ngo-website.png";
import chatAppImage from "../assets/works/chat-app.png";
import adolImage from "../assets/works/adol-paul-college.png";

// Skill icons
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
import ciCdIcon from "../assets/skills/github-actions.svg";
import tailwindIcon from "../assets/skills/tailwind.png";
import expressIcon from "../assets/skills/express-wordmark.svg";
import apiIcon from "../assets/skills/backend.png";

// -----------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------

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
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: dockerIcon },
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "GitHub Actions", icon: githubActionsIcon },
      { name: "CI/CD", icon: ciCdIcon },
    ],
  },
];

const works = [
  {
    name: "Retail Pro",
    url: "https://dancing-sunflower-a89cfe.netlify.app/",
    completed: 70,
    description:
      "A retail management application focused on inventory, sales, and operational workflows.",
    image: retailProImage,
  },
  {
    name: "Banking Application",
    url: "https://cool-queijadas-f87675.netlify.app/",
    completed: 70,
    description:
      "A consumer banking interface for managing accounts, balances, and transactions.",
    image: bankingImage,
  },
  {
    name: "Job Platform",
    url: "https://rainbow-fudge-2bfdbc.netlify.app/",
    completed: 75,
    description:
      "A job marketplace connecting candidates with employers and opportunities.",
    image: jobPostingImage,
  },
  {
    name: "NGO Website",
    url: "https://brilliant-brioche-3c9eb4.netlify.app/",
    completed: 90,
    description:
      "A nonprofit website designed around awareness, communication, and donations.",
    image: ngoImage,
  },
  {
    name: "Chat Application",
    url: "https://nino-chat-app.netlify.app/",
    completed: 60,
    description:
      "A real-time messaging application with a focused and minimal interface.",
    image: chatAppImage,
  },
  {
    name: "Adol Paul College",
    url: "https://adolpaulschool.netlify.app/",
    completed: 50,
    description:
      "A responsive school website focused on presenting information clearly to visitors.",
    image: adolImage,
  },
];

// -----------------------------------------------------------------------------
// ANIMATION VARIANTS
// -----------------------------------------------------------------------------

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

// -----------------------------------------------------------------------------
// COMPONENT
// -----------------------------------------------------------------------------

const Home = () => {
  return (
    <>
      {/* SEO */}
      <title>Richard Nneji | Full Stack Developer</title>

      <meta
        name="description"
        content="Richard Nneji is a Full Stack Developer in Lagos, Nigeria, building modern, scalable web applications with React, TypeScript, and Node.js."
      />

      <link rel="icon" type="image/png" href="/logo.png" />

      {/* ------------------------------------------------------------------ */}
      {/* WHATSAPP FLOATING BUTTON */}
      {/* ------------------------------------------------------------------ */}

      <a
        href="https://wa.me/2349058344496/?text=Hello%20Richard,%20I%27d%20like%20to%20talk%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Richard on WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          shadow-lg
          shadow-black/20
          transition-transform
          duration-200
          hover:scale-105
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#25D366]
          max-[500px]:bottom-4
          max-[500px]:right-4
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt=""
          className="h-7 w-7 object-contain"
        />
      </a>

      {/* ------------------------------------------------------------------ */}
      {/* MAIN */}
      {/* ------------------------------------------------------------------ */}

      <main className="min-h-screen bg-[#080b10] text-slate-100">
        {/* ================================================================ */}
        {/* HERO */}
        {/* ================================================================ */}

        <section className="relative overflow-hidden border-b border-white/6">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-125
              w-125
              -translate-x-1/2
              rounded-full
              bg-blue-500/8
              blur-3xl
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-275
              px-6
              py-28
              sm:px-8
              sm:py-36
              lg:px-10
            "
          >
            <motion.div
              className="max-w-195"
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              {/* Small heading */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  Full Stack Developer
                </span>
              </div>

              {/* Main heading */}
              <h1
                className="
                  max-w-190
                  text-4xl
                  font-semibold
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Building software that solves{" "}
                <span className="text-blue-400">real problems.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-165
                  text-base
                  leading-7
                  text-slate-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                I&apos;m Richard Nneji, a Full Stack Developer based in Lagos,
                Nigeria. I build reliable web applications with a focus on clean
                architecture, thoughtful interfaces, and maintainable code.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#works"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-blue-500
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-blue-400
                  "
                >
                  View selected work
                </a>

                <a
                  href="https://wa.me/2349058344496/?text=Hello%20Richard,%20I%27d%20like%20to%20talk%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-white/10
                    bg-white/2
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-300
                    transition-colors
                    duration-200
                    hover:border-white/20
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  Let&apos;s talk
                </a>
              </div>

              {/* Social links */}
              <div className="mt-9 flex items-center gap-5 text-sm text-slate-500">
                <a
                  href="https://github.com/nino-dev92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-200"
                >
                  GitHub
                </a>

                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <a
                  href="https://linkedin.com/in/richard-nneji-304b4233a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-200"
                >
                  LinkedIn
                </a>

                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <span>Lagos, Nigeria</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SKILLS */}
        {/* ================================================================ */}

        <section className="border-b border-white/6">
          <motion.div
            className="
              mx-auto
              max-w-275
              px-6
              py-24
              sm:px-8
              lg:px-10
            "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {/* Section heading */}
            <motion.div variants={item} className="max-w-165">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                "
              >
                Technical skills
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Tools I use to build.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                A practical stack covering frontend development, backend
                systems, databases, and the tooling required to ship reliable
                applications.
              </p>
            </motion.div>

            {/* Skill groups */}
            <div className="mt-14 divide-y divide-white/6 border-y border-white/6">
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={item}
                  className="
                    grid
                    grid-cols-1
                    gap-6
                    py-8
                    md:grid-cols-[180px_1fr]
                    md:gap-10
                  "
                >
                  {/* Group title */}
                  <h3
                    className="
                      pt-1
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-slate-500
                    "
                  >
                    {group.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="
                          flex
                          items-center
                          gap-2.5
                          rounded-md
                          border
                          border-white/8
                          bg-white/2
                          px-3
                          py-2
                          transition-colors
                          hover:border-white/15
                          hover:bg-white/5
                        "
                      >
                        <span
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded
                            bg-white/95
                          "
                        >
                          <img
                            src={skill.icon}
                            alt=""
                            loading="lazy"
                            className="h-5 w-5 object-contain"
                          />
                        </span>

                        <span className="text-sm text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ============================================================ */}
            {/* ABOUT */}
            {/* ============================================================ */}

            <motion.div
              variants={item}
              className="
                mt-24
                grid
                gap-10
                lg:grid-cols-[220px_1fr]
              "
            >
              {/* Label */}
              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-blue-400
                  "
                >
                  About my craft
                </p>
              </div>

              {/* Content */}
              <div className="max-w-190">
                <p className="text-lg leading-8 text-slate-300">
                  I&apos;m a Full-Stack Developer passionate about building
                  scalable, secure, and user-focused web applications. My core
                  stack includes React, TypeScript, JavaScript, Node.js,
                  Express.js, and MongoDB.
                </p>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  I&apos;m also expanding my experience with Docker, Kubernetes,
                  CI/CD pipelines, and Infrastructure as Code to deepen my
                  understanding of modern cloud-native development. I enjoy
                  solving real-world problems through clean, maintainable
                  software and continuously improving my engineering practices.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================================================================ */}
        {/* WORK */}
        {/* ================================================================ */}

        <section id="works">
          <motion.div
            className="
      mx-auto
      max-w-275
      px-5
      py-20
      sm:px-8
      sm:py-24
      lg:px-10
    "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {/* Section heading */}
            <motion.div
              variants={item}
              className="mx-auto max-w-165 text-center"
            >
              <p
                className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
          text-blue-400
        "
              >
                Selected work
              </p>

              <h2
                className="
          mt-3
          text-3xl
          font-semibold
          tracking-tight
          text-white
          sm:text-4xl
        "
              >
                Things I&apos;ve built.
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                A selection of applications and interfaces I&apos;ve worked on
                across different problem domains.
              </p>
            </motion.div>

            {/* Projects */}
            <div
              className="
        mx-auto
        mt-12
        grid
        w-full
        max-w-230
        grid-cols-1
        justify-items-center
        gap-5
        sm:mt-14
        sm:grid-cols-2
        sm:gap-6
        lg:grid-cols-3
        lg:gap-6
      "
            >
              {works.map((work) => (
                <motion.article
                  key={work.name}
                  variants={item}
                  className="
            group
            flex
            w-full
            max-w-[340px]
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-white/8
            bg-[#0d1117]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/15
            hover:shadow-xl
            hover:shadow-black/30
            sm:max-w-[330px]
            lg:max-w-[340px]
          "
                >
                  {/* ---------------------------------------------------------- */}
                  {/* PROJECT IMAGE */}
                  {/* ---------------------------------------------------------- */}

                  <div
                    className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
              bg-slate-900
            "
                  >
                    <img
                      src={work.image}
                      alt={`Preview of ${work.name}`}
                      loading="lazy"
                      className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-[1.04]
              "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                pointer-events-none
                absolute
                inset-0
                bg-linear-to-t
                from-[#0d1117]/80
                via-transparent
                to-transparent
              "
                    />

                    {/* Completion badge */}
                    <span
                      className="
                absolute
                right-3
                top-3
                rounded-full
                border
                border-white/10
                bg-[#080b10]/80
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-slate-300
                backdrop-blur-md
              "
                    >
                      {work.completed}% complete
                    </span>
                  </div>

                  {/* ---------------------------------------------------------- */}
                  {/* PROJECT INFORMATION */}
                  {/* ---------------------------------------------------------- */}

                  <div
                    className="
              flex
              min-h-[210px]
              flex-1
              flex-col
              p-4
              sm:p-5
            "
                  >
                    {/* Project name */}
                    <h3
                      className="
                text-base
                font-semibold
                leading-6
                text-white
                sm:text-lg
              "
                    >
                      {work.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                mt-2.5
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
                sm:leading-6
              "
                    >
                      {work.description}
                    </p>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Progress */}
                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-slate-600">
                          Progress
                        </span>

                        <span className="text-[10px] font-medium text-slate-500">
                          {work.completed}%
                        </span>
                      </div>

                      <div className="h-1 overflow-hidden rounded-full bg-white/6">
                        <div
                          className="
                    h-full
                    rounded-full
                    bg-blue-500
                    transition-all
                    duration-700
                  "
                          style={{
                            width: `${work.completed}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* View project */}
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                mt-5
                inline-flex
                w-fit
                items-center
                gap-2
                text-xs
                font-medium
                text-blue-400
                transition-colors
                hover:text-blue-300
                sm:text-sm
              "
                    >
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                        className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ================================================================ */}
        {/* CONTACT CTA */}
        {/* ================================================================ */}

        <section className="border-t border-white/6">
          <div
            className="
              mx-auto
              max-w-275
              px-6
              py-24
              text-center
              sm:px-8
              lg:px-10
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-blue-400
                "
              >
                Have a project in mind?
              </p>

              <h2
                className="
                  mx-auto
                  mt-4
                  max-w-170
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Let&apos;s build something useful.
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-130
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                If you have an idea, product, or problem you&apos;d like to
                discuss, I&apos;d be happy to hear about it.
              </p>

              <a
                href="https://wa.me/2349058344496/?text=Hello%20Richard,%20I%27d%20like%20to%20talk%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-slate-900
                  transition-colors
                  hover:bg-slate-200
                "
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
