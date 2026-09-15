import React from "react";
import { Link } from "react-router-dom";
import KuldeepAI from "./KuldeepAI";

const Homepage = () => {
  const skills = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },

    // CLOUD
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="relative min-h-screen px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >

        {/* Background Glow */}

        <div className="pointer-events-none absolute left-[-150px] top-[15%] h-[350px] w-[350px] rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-700/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div>

            {/* Available */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-sm text-purple-300">
                Available for opportunities
              </span>

            </div>

            {/* Role */}

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
              Full Stack Developer
            </p>

            {/* Heading */}

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">

              Hi, I'm

              <br />

              <span className="gradient-text">
                Kuldeep
              </span>

              <br />

              <span className="text-gray-600">
                Sengar.
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I'm a BCA student and aspiring Full Stack Developer
              passionate about creating modern, scalable and
              user-friendly web applications.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I enjoy working with React, JavaScript, Node.js,
              Express, MongoDB, Java, Cloudinary, ImageKit and
              other modern technologies to turn ideas into
              real-world applications.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="rounded-xl bg-white px-6 py-3.5 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:text-white hover:shadow-xl hover:shadow-purple-500/20"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10"
              >
                Contact Me
              </Link>

            </div>

            {/* Quick Info */}

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="glass-card p-4">

                <p className="text-2xl font-black text-white">
                  BCA
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Student
                </p>

              </div>

              <div className="glass-card p-4">

                <p className="text-2xl font-black text-white">
                  Full
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Stack Developer
                </p>

              </div>

              <div className="glass-card p-4">

                <p className="text-2xl font-black text-white">
                  Java
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  + DSA Learning
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Glow */}

              <div className="absolute -inset-5 rounded-[2.5rem] bg-purple-600/20 blur-3xl" />

              {/* Gradient Border */}

              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50 blur-md" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">

                <img
                  src="https://ik.imagekit.io/kuldeepsengar01/kuldeepimage.jpg.jpeg"
                  alt="Kuldeep Sengar"
                  className="profile-image h-[420px] w-[300px] object-cover object-top sm:h-[500px] sm:w-[360px]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Image Text */}

                <div className="absolute bottom-0 left-0 p-6">

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400">
                    Developer
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Kuldeep Sengar
                  </h2>

                </div>

              </div>

              {/* Floating Card */}

              <div className="float-animation absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-zinc-950/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-10">

                <p className="text-xs text-gray-500">
                  Currently learning
                </p>

                <p className="mt-1 font-bold text-white">
                  Java + DSA
                </p>

              </div>

              {/* Focus Card */}

              <div className="absolute -right-4 top-10 rounded-2xl border border-purple-500/20 bg-zinc-950/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-10">

                <p className="text-xs text-gray-500">
                  Focus
                </p>

                <p className="mt-1 font-bold text-purple-400">
                  Web Development
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950/70 py-8">

        {/* Heading */}

        <div className="mb-6 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">
            Technologies I Work With
          </p>

        </div>

        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-950 to-transparent sm:w-32" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-950 to-transparent sm:w-32" />

        {/* Scrolling Container */}

        <div className="skills-marquee">

          {/* First Set */}

          <div className="skills-track">

            {skills.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="skill-item"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10">

                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-full w-full object-contain"
                  />

                </div>

                <span className="whitespace-nowrap text-sm font-semibold text-gray-500">
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

          {/* Duplicate Set */}

          <div className="skills-track" aria-hidden="true">

            {skills.map((skill, index) => (
              <div
                key={`second-${index}`}
                className="skill-item"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3">

                  <img
                    src={skill.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />

                </div>

                <span className="whitespace-nowrap text-sm font-semibold text-gray-500">
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT PREVIEW
      ====================================================== */}

      <section
        id="about"
        className="border-t border-white/5 bg-zinc-950/50 px-6 py-24 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            About Me
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

            Building the web with{" "}

            <span className="text-gray-600">
              curiosity,
            </span>{" "}

            <span className="text-purple-500">
              creativity
            </span>{" "}

            and clean code.

          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              I'm passionate about software development and
              continuously learning new technologies. I enjoy
              creating websites and applications that are not only
              functional but also visually attractive and easy to use.
            </p>

            <p className="text-base leading-8 text-gray-500 sm:text-lg">
              My current focus is improving my Full Stack
              Development skills while strengthening Java,
              Data Structures and Algorithms. My goal is to
              become a strong software developer and build
              meaningful products.
            </p>

          </div>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
          >
            More About Me →
          </Link>

        </div>

      </section>

      {/* =====================================================
          PROJECT PREVIEW
      ====================================================== */}

      <section
        id="projects"
        className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16"
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">

            Things I've{" "}

            <span className="text-purple-500">
              built.
            </span>

          </h2>

          <p className="mt-5 max-w-2xl text-gray-500">
            Explore my projects, experiments and applications
            built using modern web technologies.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:text-white"
          >
            Explore Projects →
          </Link>

        </div>

      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section
        id="contact"
        className="border-t border-white/5 bg-zinc-950 px-6 py-28 text-center sm:px-10"
      >

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
          Get In Touch
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-6xl">

          Let's build something{" "}

          <span className="text-purple-500">
            amazing.
          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Have a project idea or want to work together?
          Feel free to reach out.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:text-white"
        >
          Contact Me →
        </Link>

      </section>
      <KuldeepAI />
    </main>
  );
};

export default Homepage;
