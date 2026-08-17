import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "KS AI",
      type: "FULL STACK",
      description:
        "AI-powered web application built with React, Node.js, Express and AI technologies. Includes user authentication and AI-powered conversations.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Express",
        "MongoDB",
        "Gemini AI",
        "Python"
      ],
      github: "https://github.com/kuldeepsengar01/Jarvis-Assistance-",
      live: "https://jarvis-assistance.onrender.com",
    },

    {
      title: "Chat Application",
      type: "FULL STACK",
      description:
        "Real-time style chat application with a modern responsive interface, authentication and backend API integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/kuldeepsengar01/ChatAi",
      live: "https://chat-ai-nine-flax.vercel.app/",
    },

    {
      title: "Music Player",
      type: "REACT",
      description:
        "A modern responsive music player with a clean interface and smooth user experience for playing and managing music.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML5",
      ],
      github: "https://github.com/kuldeepsengar01/KS-short-music",
      live: "https://ks-short-music.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-black px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
          Projects
        </p>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Things I've{" "}
          <span className="text-purple-500">
            Built.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-500">
          Some of the projects I've worked on while learning,
          experimenting and building real-world applications
          using modern web technologies.
        </p>

        {/* Projects */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20"
            >

              {/* Project Type */}

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-bold tracking-wider text-purple-400">
                  {project.type}
                </span>

                <FaExternalLinkAlt
                  size={14}
                  className="text-gray-600 transition group-hover:text-purple-400"
                />

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-black">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400 transition hover:border-purple-500/30 hover:text-purple-300"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* Links */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                >
                  <FaGithub />
                  Source Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-purple-500 hover:text-white"
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </a>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;