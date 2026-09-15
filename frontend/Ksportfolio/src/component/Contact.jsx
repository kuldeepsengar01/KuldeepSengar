import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ==============================
  // SOCIAL LINKS
  // ==============================

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/kuldeepsengar01",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/kuldeep-sengar-a11246370/?locale=s",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/kuldeep_sengar_01",
    },
  ];

  // ==============================
  // HANDLE INPUT
  // ==============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // SEND MESSAGE
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    console.log(import.meta.env.VITE_FORMSPREE_URL);
    
    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_URL,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.target),
        }
      );
      console.log(import.meta.env.VITE_FORMSPREE_URL);

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! 🚀",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        e.target.reset();
      } else {
        setStatus({
          type: "error",
          message:
            data?.errors?.[0]?.message ||
            "Unable to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Formspree Error:", error);

      setStatus({
        type: "error",
        message: "Unable to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden border-t border-white/5 bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-purple-700/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-blue-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-500">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-purple-500">
              amazing.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-500 sm:text-lg">
            Have a project idea, collaboration opportunity or
            just want to say hello? Feel free to get in touch.
          </p>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="rounded-3xl border border-white/10 bg-black p-7 shadow-2xl sm:p-9">

            <h3 className="text-2xl font-black">
              Get in touch
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              I'm always open to discussing new projects,
              creative ideas and opportunities.
            </p>

            {/* EMAIL */}

            <a
              href="mailto:kuldeepsengar8218@gmail.com"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold text-gray-200">
                  kuldeepsengar8218@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}

            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Location
                </p>

                <p className="mt-1 font-semibold text-gray-200">
                  Aligarh, Uttar Pradesh, India
                </p>
              </div>

            </div>

            {/* SOCIAL */}

            <div className="mt-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}

          <div className="rounded-3xl border border-white/10 bg-black p-7 shadow-2xl sm:p-9">

            <h3 className="text-2xl font-black">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Your message will be sent directly to my email.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none placeholder:text-gray-700 transition focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* STATUS */}

              {status.message && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:text-white hover:shadow-xl hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

            </form>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <footer className="mt-20 border-t border-white/5 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div>
              <p className="font-black">
                KULDEEP{" "}
                <span className="text-purple-500">
                  SENGAR
                </span>
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Full Stack Developer
              </p>
            </div>

            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Kuldeep Sengar.
              All rights reserved.
            </p>

          </div>

        </footer>

      </div>
    </section>
  );
};

export default Contact;
