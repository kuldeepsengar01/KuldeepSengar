import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  X,
  Send,
  User,
  Sparkles,
  Trash2,
  ExternalLink,
} from "lucide-react";

const KuldeepAI = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi 👋 I'm KuldeepAI. Ask me anything about Kuldeep, his skills, projects, education, certificates or experience.",
    },
  ]);

  const bottomRef = useRef(null);

  // =====================================================
  // KULDEEP KNOWLEDGE BASE
  // =====================================================

  const kuldeep = {
    name: "Kuldeep Sengar",

    role: "Full Stack Web Developer",

    education:
      "Kuldeep is currently pursuing BCA at Aligarh College of Engineering & Technology.",

    skills: {
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],

      backend: ["Node.js", "Express"],

      database: ["MongoDB", "MySQL"],

      programming: ["Java", "JavaScript"],

      tools: ["Git", "GitHub", "Postman"],
    },

    learning: ["Java", "DSA", "Spring Boot", "MySQL"],

    projects: {
      "KS CHATS": {
        keywords: [
          "chat",
          "chatting",
          "message",
          "messages",
          "messaging",
          "conversation",
          "communication",
          "social",
        ],

        description:
          "KS CHATS is a full-stack chat application with authentication, profile management and messaging features.",

        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ],

        features: [
          "Authentication",
          "User profiles",
          "Messaging",
          "Profile management",
        ],
      },

      StarPeek: {
        keywords: [
          "starpeek",
          "food",
          "food partner",
          "restaurant",
          "discovery",
        ],

        description:
          "StarPeek is a web application focused on food partners and food discovery.",

        technologies: ["React", "Node.js", "MongoDB"],
      },

      "K.S Blogs": {
        keywords: [
          "blog",
          "blogs",
          "article",
          "articles",
          "post",
          "posts",
          "writing",
        ],

        description:
          "K.S Blogs is a blog management application with authentication and CRUD functionality.",

        technologies: ["React", "Express", "MongoDB"],

        features: [
          "Authentication",
          "Create blogs",
          "Read blogs",
          "Update blogs",
          "Delete blogs",
        ],
      },

      "KS Weather App": {
        keywords: [
          "weather",
          "temperature",
          "forecast",
          "climate",
          "rain",
        ],

        description:
          "KS Weather App is a weather application that displays current weather and forecast information.",

        technologies: ["React", "Weather API"],
      },

      "Population Explorer": {
        keywords: [
          "population",
          "country",
          "countries",
          "world population",
        ],

        description:
          "Population Explorer is a web application for exploring population information of different countries.",

        technologies: [
          "React",
          "World Bank API",
          "REST Countries API",
        ],
      },
    },

    internship:
      "Kuldeep successfully completed an internship at Codomax.",

    github: "https://github.com/kuldeepsengar01",

    certificates: [
      {
        name: "Codomax Internship Certificate",
        type: "Internship",
      },

      {
        name: "JavaScript Certificate",
        type: "JavaScript",
      },

      {
        name: "HTML Certificate",
        type: "HTML",
        platform: "Codeliber",
        completedOn: "September 19, 2026",
        link: "https://codeliber.com/certificates/mu7ru5j0km3oc",
      },
    ],
  };

  // =====================================================
  // NORMALIZE QUESTION
  // =====================================================

  const normalize = (text) => {
    return text
      .toLowerCase()
      .replace(/[?!.,'"]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  // =====================================================
  // WORD MATCHING
  // =====================================================

  const hasAny = (text, words) => {
    return words.some((word) => text.includes(word));
  };

  // =====================================================
  // DETECT PROJECT
  // =====================================================

  const detectProject = (question) => {
    const q = normalize(question);

    for (const [projectName, project] of Object.entries(
      kuldeep.projects
    )) {
      if (hasAny(q, project.keywords)) {
        return projectName;
      }

      if (q.includes(projectName.toLowerCase())) {
        return projectName;
      }
    }

    return null;
  };

  // =====================================================
  // DETECT INTENT
  // =====================================================

  const detectIntent = (question) => {
    const q = normalize(question);

    // HTML CERTIFICATE
    if (
      hasAny(q, [
        "html certificate",
        "certificate html",
        "html certification",
        "html course certificate",
        "certificate of html",
        "html codeliber",
      ])
    ) {
      return "htmlCertificate";
    }

    // CERTIFICATES
    if (
      hasAny(q, [
        "certificate",
        "certificates",
        "certification",
        "certifications",
      ])
    ) {
      return "certificates";
    }

    // TECHNOLOGY
    if (
      hasAny(q, [
        "technology",
        "technologies",
        "tech",
        "stack",
        "used",
        "use",
        "built with",
        "made with",
        "developed with",
        "created with",
        "which language",
        "what language",
        "tools used",
      ])
    ) {
      return "technology";
    }

    // SKILLS
    if (
      hasAny(q, [
        "skill",
        "skills",
        "know",
        "knows",
        "can he",
        "what can",
        "expertise",
        "ability",
        "abilities",
        "technical skills",
      ])
    ) {
      return "skills";
    }

    // PROJECT
    if (
      hasAny(q, [
        "project",
        "projects",
        "application",
        "applications",
        "app",
        "apps",
        "built",
        "made",
        "created",
        "developed",
        "work",
      ])
    ) {
      return "projects";
    }

    // DATABASE
    if (
      hasAny(q, [
        "database",
        "db",
        "data base",
        "mongodb",
        "mysql",
      ])
    ) {
      return "database";
    }

    // EDUCATION
    if (
      hasAny(q, [
        "education",
        "study",
        "studying",
        "college",
        "degree",
        "bca",
        "qualification",
      ])
    ) {
      return "education";
    }

    // LEARNING
    if (
      hasAny(q, [
        "learning",
        "learn",
        "currently learning",
        "studying now",
        "working on",
        "currently studying",
      ])
    ) {
      return "learning";
    }

    // INTERNSHIP
    if (
      hasAny(q, [
        "internship",
        "intern",
        "codomax",
        "training",
        "experience",
      ])
    ) {
      return "internship";
    }

    // GITHUB
    if (
      hasAny(q, [
        "github",
        "github profile",
        "repository",
        "repo",
        "source code",
      ])
    ) {
      return "github";
    }

    // ABOUT
    if (
      hasAny(q, [
        "who is kuldeep",
        "who is he",
        "tell me about kuldeep",
        "about kuldeep",
        "introduce kuldeep",
        "introduce him",
        "about him",
      ])
    ) {
      return "about";
    }

    return "unknown";
  };

  // =====================================================
  // ABOUT ANSWER
  // =====================================================

  const aboutAnswer = () => {
    return `Kuldeep Sengar is a Full Stack Web Developer currently pursuing BCA at Aligarh College of Engineering & Technology.

He works with technologies like React, JavaScript, Node.js, Express, MongoDB, MySQL and Java.`;
  };

  // =====================================================
  // SKILLS ANSWER
  // =====================================================

  const skillsAnswer = () => {
    return `Kuldeep's skills include:

Frontend:
• HTML
• CSS
• JavaScript
• React
• Tailwind CSS

Backend:
• Node.js
• Express

Database:
• MongoDB
• MySQL

Programming:
• Java
• JavaScript

Tools:
• Git
• GitHub
• Postman`;
  };

  // =====================================================
  // TECHNOLOGY ANSWER
  // =====================================================

  const technologyAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];

      return `${projectName} was built using:

${project.technologies
  .map((tech) => `• ${tech}`)
  .join("\n")}`;
    }

    return `Kuldeep works with technologies such as:

• HTML
• CSS
• JavaScript
• React
• Tailwind CSS
• Node.js
• Express
• MongoDB
• MySQL
• Java`;
  };

  // =====================================================
  // PROJECT ANSWER
  // =====================================================

  const projectsAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];

      let answer = `${projectName}

${project.description}`;

      if (project.technologies) {
        answer += `

Technologies:
${project.technologies
  .map((tech) => `• ${tech}`)
  .join("\n")}`;
      }

      if (project.features) {
        answer += `

Features:
${project.features
  .map((feature) => `• ${feature}`)
  .join("\n")}`;
      }

      return answer;
    }

    return `Kuldeep has worked on projects including:

• KS CHATS
• StarPeek
• K.S Blogs
• KS Weather App
• Population Explorer`;
  };

  // =====================================================
  // DATABASE ANSWER
  // =====================================================

  const databaseAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];

      const databases = project.technologies.filter(
        (tech) =>
          tech.toLowerCase().includes("mongo") ||
          tech.toLowerCase().includes("mysql")
      );

      if (databases.length > 0) {
        return `${projectName} uses:

${databases.map((db) => `• ${db}`).join("\n")}`;
      }

      return `I don't have a database specified for ${projectName}.`;
    }

    return `Kuldeep knows:

• MongoDB
• MySQL`;
  };

  // =====================================================
  // LEARNING ANSWER
  // =====================================================

  const learningAnswer = () => {
    return `Currently Kuldeep is learning:

• Java
• DSA
• Spring Boot
• MySQL`;
  };

  // =====================================================
  // EDUCATION ANSWER
  // =====================================================

  const educationAnswer = () => {
    return `Kuldeep is currently pursuing BCA at Aligarh College of Engineering & Technology.`;
  };

  // =====================================================
  // INTERNSHIP ANSWER
  // =====================================================

  const internshipAnswer = () => {
    return `Kuldeep successfully completed an internship at Codomax.`;
  };

  // =====================================================
  // GITHUB ANSWER
  // =====================================================

  const githubAnswer = () => {
    return `You can find Kuldeep's GitHub profile here:

${kuldeep.github}`;
  };

  // =====================================================
  // HTML CERTIFICATE ANSWER
  // =====================================================

  const htmlCertificateAnswer = () => {
    return `Kuldeep completed an HTML course from Codeliber.

Certificate Details:

• Course: HTML
• Platform: Codeliber
• Completed: September 19, 2026

Certificate:
https://codeliber.com/certificates/mu7ru5j0km3oc`;
  };

  // =====================================================
  // ALL CERTIFICATES ANSWER
  // =====================================================

  const certificateAnswer = () => {
    return `Kuldeep has certificates including:

• Codomax Internship Certificate
• JavaScript Certificate
• HTML Certificate — Codeliber

HTML Certificate:
https://codeliber.com/certificates/mu7ru5j0km3oc`;
  };

  // =====================================================
  // MAIN AI ENGINE
  // =====================================================

  const getAnswer = (question) => {
    const intent = detectIntent(question);
    const project = detectProject(question);

    switch (intent) {
      case "about":
        return aboutAnswer();

      case "skills":
        return skillsAnswer();

      case "technology":
        return technologyAnswer(project);

      case "projects":
        return projectsAnswer(project);

      case "database":
        return databaseAnswer(project);

      case "learning":
        return learningAnswer();

      case "education":
        return educationAnswer();

      case "internship":
        return internshipAnswer();

      case "github":
        return githubAnswer();

      case "htmlCertificate":
        return htmlCertificateAnswer();

      case "certificates":
        return certificateAnswer();

      default:
        break;
    }

    // PROJECT ONLY QUESTIONS

    if (project) {
      return projectsAnswer(project);
    }

    const q = normalize(question);

    // GREETINGS

    if (
      hasAny(q, [
        "hi",
        "hello",
        "hey",
        "hii",
        "helo",
        "namaste",
      ])
    ) {
      return "Hello 👋 I'm KuldeepAI. What would you like to know about Kuldeep?";
    }

    // THANK YOU

    if (
      hasAny(q, [
        "thank you",
        "thanks",
        "thank",
        "thx",
      ])
    ) {
      return "You're welcome 😊 Feel free to ask me anything about Kuldeep.";
    }

    // UNKNOWN

    return `I'm KuldeepAI 🤖

I can tell you about:

• Kuldeep's skills
• Technologies
• Projects
• Project technologies
• Databases
• Education
• Current learning
• Internship
• Certificates
• HTML Certificate
• GitHub

Try asking something like:

"What technologies were used in the chat application?"

or

"Show me Kuldeep's HTML certificate."`;
  };

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const sendMessage = () => {
    if (!input.trim() || typing) return;

    const question = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: question,
      },
    ]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = getAnswer(question);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: answer,
        },
      ]);

      setTyping(false);
    }, 600);
  };

  // =====================================================
  // SUGGESTION
  // =====================================================

  const askSuggestion = (question) => {
    if (typing) return;

    setInput("");
    setTyping(true);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: question,
      },
    ]);

    setTimeout(() => {
      const answer = getAnswer(question);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: answer,
        },
      ]);

      setTyping(false);
    }, 600);
  };

  // =====================================================
  // CLEAR CHAT
  // =====================================================

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "Chat cleared 👋 What would you like to know about Kuldeep?",
      },
    ]);

    setInput("");
    setTyping(false);
  };

  // =====================================================
  // AUTO SCROLL
  // =====================================================

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  // =====================================================
  // RENDER MESSAGE WITH CLICKABLE LINKS
  // =====================================================

  const renderMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 underline underline-offset-2"
          >
            View Certificate
            <ExternalLink size={12} />
          </a>
        );
      }

      return part;
    });
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <>
      {/* FLOATING BUTTON */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open KuldeepAI"
          className="
            fixed bottom-6 right-6 z-[999]
            w-16 h-16
            rounded-full
            bg-gradient-to-br from-purple-600 to-fuchsia-600
            text-white
            flex items-center justify-center
            shadow-[0_0_35px_rgba(168,85,247,0.45)]
            hover:scale-110
            transition duration-300
          "
        >
          <Bot size={30} />

          <span className="absolute -top-1 -right-1">
            <Sparkles size={18} />
          </span>
        </button>
      )}

      {/* CHAT WINDOW */}

      {open && (
        <div
          className="
            fixed bottom-6 right-6 z-[999]
            w-[390px]
            max-w-[calc(100vw-24px)]
            h-[600px]
            max-h-[calc(100vh-30px)]
            bg-[#07070b]
            border border-purple-500/30
            rounded-2xl
            shadow-[0_0_60px_rgba(168,85,247,0.2)]
            overflow-hidden
            flex flex-col
          "
        >
          {/* HEADER */}

          <div
            className="
              p-4
              border-b border-white/10
              bg-gradient-to-r
              from-purple-950/70
              to-fuchsia-950/40
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-11 h-11
                  rounded-full
                  bg-gradient-to-br
                  from-purple-600 to-fuchsia-600
                  flex items-center justify-center
                  text-white
                "
              >
                <Bot size={23} />
              </div>

              <div>
                <h2 className="text-white font-semibold">
                  KuldeepAI
                </h2>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />

                  <span className="text-xs text-gray-400">
                    Portfolio Assistant
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <button
                onClick={clearChat}
                aria-label="Clear chat"
                className="
                  p-2 rounded-lg
                  text-gray-400
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <Trash2 size={17} />
              </button>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close KuldeepAI"
                className="
                  p-2 rounded-lg
                  text-gray-400
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[88%] ${
                    message.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  <div
                    className="
                      shrink-0
                      w-8 h-8
                      rounded-full
                      flex items-center justify-center
                      bg-purple-500/15
                      text-purple-400
                    "
                  >
                    {message.sender === "ai" ? (
                      <Bot size={16} />
                    ) : (
                      <User size={16} />
                    )}
                  </div>

                  <div
                    className={`
                      px-4 py-3
                      rounded-2xl
                      text-sm
                      leading-relaxed
                      whitespace-pre-wrap
                      break-words
                      ${
                        message.sender === "ai"
                          ? "bg-white/[0.05] border border-white/10 text-gray-200 rounded-tl-sm"
                          : "bg-purple-600 text-white rounded-tr-sm"
                      }
                    `}
                  >
                    {renderMessage(message.text)}
                  </div>
                </div>
              </div>
            ))}

            {/* TYPING */}

            {typing && (
              <div className="flex items-center gap-2">
                <div
                  className="
                    w-8 h-8 rounded-full
                    bg-purple-500/15
                    text-purple-400
                    flex items-center justify-center
                  "
                >
                  <Bot size={16} />
                </div>

                <div
                  className="
                    px-4 py-3
                    bg-white/[0.05]
                    border border-white/10
                    rounded-2xl
                  "
                >
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />

                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]" />

                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* SUGGESTIONS */}

            {messages.length === 1 && !typing && (
              <div>
                <p className="text-xs text-gray-500 mb-2">
                  Try asking:
                </p>

                <div className="space-y-2">
                  {[
                    "What skills does Kuldeep have?",
                    "What technology was used in the chat application?",
                    "Tell me about Kuldeep's projects",
                    "What is Kuldeep currently learning?",
                    "Show me Kuldeep's HTML certificate",
                  ].map((question) => (
                    <button
                      key={question}
                      onClick={() => askSuggestion(question)}
                      className="
                        w-full
                        text-left
                        px-3 py-2.5
                        rounded-xl
                        bg-white/[0.03]
                        border border-white/10
                        text-gray-400
                        text-xs
                        hover:text-purple-300
                        hover:border-purple-500/40
                        transition
                      "
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* INPUT */}

          <div className="p-3 border-t border-white/10">
            <div
              className="
                flex items-center gap-2
                bg-white/[0.04]
                border border-white/10
                rounded-xl
                p-1.5
                focus-within:border-purple-500/50
                transition
              "
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about Kuldeep..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-white
                  text-sm
                  px-2
                  placeholder:text-gray-600
                  min-w-0
                "
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="
                  shrink-0
                  w-9 h-9
                  rounded-lg
                  bg-purple-600
                  text-white
                  flex items-center justify-center
                  hover:bg-purple-500
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  transition
                "
              >
                <Send size={17} />
              </button>
            </div>

            <p className="text-[10px] text-gray-600 text-center mt-2">
              KuldeepAI • Portfolio Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default KuldeepAI;
