import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiC,
} from "react-icons/si";

const About = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "C",
      icon: <SiC />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-zinc-950 px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-150px] h-80 w-80 rounded-full bg-blue-700/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            About Me
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="text-purple-500">
              digital experiences.
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-400 sm:text-lg">
            I'm Kuldeep Sengar, a BCA student and aspiring Full
            Stack Developer. I enjoy building modern web
            applications and learning how different technologies
            work together.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-500">
            My current focus is improving my development skills,
            learning Java and DSA, and building real-world
            projects using modern web technologies.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-3xl font-black text-white">
              BCA
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Student
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-3xl font-black text-purple-400">
              Full
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Stack Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-3xl font-black text-white">
              10+
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-3xl font-black text-purple-400">
              ∞
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Learning
            </p>
          </div>

        </div>

        {/* Technology Cards */}

        <div className="mt-20">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
            Technologies I Work With
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">

            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="group rounded-2xl border border-white/10 bg-black p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/5"
              >

                <div className="flex justify-center text-4xl text-gray-500 transition duration-300 group-hover:scale-110 group-hover:text-purple-400">
                  {technology.icon}
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-400 transition group-hover:text-white">
                  {technology.name}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* GitHub CTA */}

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-black p-7 sm:flex-row sm:items-center">

          <div>

            <p className="text-xl font-bold">
              Want to see my code?
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Check out my projects and repositories on GitHub.
            </p>

          </div>

          <a
            href="https://github.com/kuldeepsengar01"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-black transition hover:-translate-y-1 hover:bg-purple-500 hover:text-white"
          >
            <FaGithub size={19} />
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;