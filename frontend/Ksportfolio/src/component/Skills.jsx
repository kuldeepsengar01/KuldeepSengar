import React from "react";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Braces,
  GitBranch,
  Layers,
  Terminal,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      description: "Creating responsive and modern user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Bootstrap",
        "GSAP",
      ],
    },

    {
      title: "Backend Development",
      icon: <Server size={24} />,
      description: "Building APIs and server-side applications.",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "JWT",
        "Cookie Parser",
        "Multer",
        "Express Validator",
        "Nodemailer",
      ],
    },

    {
      title: "Database",
      icon: <Database size={24} />,
      description: "Working with SQL and NoSQL databases.",
      skills: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Database Design",
        "CRUD Operations",
      ],
    },

    {
      title: "Programming",
      icon: <Braces size={24} />,
      description: "Programming languages and problem solving.",
      skills: [
        "Java",
        "C",
        "JavaScript",
        "PHP",
        "DSA",
        "OOP",
        "Problem Solving",
      ],
    },

    {
      title: "Cloud & Storage",
      icon: <Cloud size={24} />,
      description:
        "Working with cloud-based media storage, delivery and optimization.",
      skills: [
        "ImageKit",
        "Cloudinary",
        "Cloud Storage",
        "Image Upload",
        "Media Optimization",
        "CDN",
      ],
    },

    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      description: "Tools I use for development and deployment.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Render",
      ],
    },

    {
      title: "Other Skills",
      icon: <Layers size={24} />,
      description: "Additional technologies and concepts.",
      skills: [
        "Responsive Design",
        "Authentication",
        "Authorization",
        "API Integration",
        "File Upload",
        "Cloud Storage",
        "Environment Variables",
        "Deployment",
      ],
    },
  ];

  const techStack = [
    "HTML5",
    "CSS3",
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Bootstrap",
    "GSAP",
    "Node.js",
    "Express",
    "REST API",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Java",
    "C",
    "PHP",
    "ImageKit",
    "Cloudinary",
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Render",
  ];

  return (
    <main
      id="skills"
      className="min-h-screen bg-black px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12"
    >
      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* ================================
          MAIN CONTAINER
      ================================= */}

      <section className="mx-auto max-w-7xl">

        {/* ================================
            HEADER
        ================================= */}

        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            <Terminal size={17} />
            My Skills
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
              work with.
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            I have learned and worked with different technologies while
            building web applications, APIs and full-stack projects. I
            continuously learn new technologies and improve my development
            skills.
          </p>
        </div>

        {/* ================================
            SKILL CATEGORIES
        ================================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-purple-500/[0.04] hover:shadow-2xl hover:shadow-purple-900/10"
            >
              {/* ICON */}

              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition duration-300 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                  {category.icon}
                </div>

                <span className="text-xs font-bold text-gray-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TITLE */}

              <h2 className="mt-6 text-xl font-bold text-white">
                {category.title}
              </h2>

              {/* DESCRIPTION */}

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* SKILLS */}

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================================
            CURRENTLY LEARNING
        ================================= */}

        <section className="relative mt-20 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.08] to-transparent p-7 sm:p-10">

          {/* Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                Currently Learning
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Java + DSA
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                Currently focusing on Java, Data Structures and Algorithms,
                problem solving and improving my programming fundamentals for
                software development and placements.
              </p>
            </div>

            {/* ICON */}

            <div className="flex shrink-0 items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 shadow-lg shadow-purple-900/20">
                <GitBranch
                  size={38}
                  className="text-purple-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            TECH STACK
        ================================= */}

        <section className="mt-20">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">
            My Stack
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Full Stack Development
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            Technologies and tools I use to design, develop, test and deploy
            modern applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white hover:shadow-lg hover:shadow-purple-900/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 transition group-hover:scale-125" />

                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ================================
            LEARNING MESSAGE
        ================================= */}

        <section className="mt-20 border-t border-white/5 pt-10">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <p className="text-sm font-medium text-gray-500">
              Always learning. Always building. Always improving.
            </p>
          </div>
        </section>

      </section>
    </main>
  );
};

export default Skills;