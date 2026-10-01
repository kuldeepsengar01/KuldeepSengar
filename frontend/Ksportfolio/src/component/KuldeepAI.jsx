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
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "MySQL"],
      programming: ["Java", "JavaScript"],
      tools: ["Git", "GitHub", "Postman", "Axios"],
    },

    learning: [
      "Java",
      "DSA",
      "Spring Boot",
      "MySQL",
    ],

    // ===================================================
    // PROJECTS
    // ===================================================

    projects: {
      // =================================================
      // KS CHATS
      // =================================================
      "KS CHATS": {
        keywords: [
          "ks chats",
          "ks chat",
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
        projectType: "Full Stack Real-Time Chat Application",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "bcryptjs",
          "ImageKit",
          "Brevo SMTP",
        ],
        features: [
          "User Registration",
          "User Login",
          "Authentication",
          "OTP Verification",
          "User Profiles",
          "Profile Pictures",
          "Messaging",
          "Online Status",
          "Last Seen",
          "Profile Management",
        ],
        frontend: [
          "React",
          "JavaScript",
          "Tailwind CSS",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
        ],
        authentication: [
          "User registration",
          "Password hashing",
          "Authentication",
          "OTP verification",
        ],
        database: {
          name: "MongoDB",
          odm: "Mongoose",
          collections: ["Users", "Messages"],
        },
        purpose:
          "The project demonstrates full-stack application development, authentication, database integration and communication features.",
      },

      // =================================================
      // STARPEEK
      // =================================================
      StarPeek: {
        keywords: [
          "starpeek",
          "food",
          "food partner",
          "restaurant",
          "discovery",
          "food discovery",
        ],
        description:
          "StarPeek is a web application focused on food partners and food discovery.",
        projectType: "Full Stack Food Discovery Application",
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT",
        ],
        features: [
          "Food Partner Profiles",
          "Authentication",
          "Food Discovery",
          "User Management",
          "API Integration",
        ],
        frontend: [
          "React",
          "JavaScript",
          "Tailwind CSS",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
        authentication: [
          "JWT Authentication",
          "Cookie Based Authentication",
        ],
        database: {
          name: "MongoDB",
          odm: "Mongoose",
        },
        purpose:
          "The project focuses on connecting users with food partners and exploring food-related information.",
      },

      // =================================================
      // BLOG MANAGEMENT SYSTEM
      // =================================================
      "K.S Blogs": {
        keywords: [
          "ks blogs",
          "k s blogs",
          "blog",
          "blogs",
          "article",
          "articles",
          "post",
          "posts",
          "writing",
          "blog management",
          "blog management system",
          "blog application",
          "blog app",
          "blog project",
          "crud blog",
          "blog crud",
        ],
        description:
          "K.S Blogs is a full-stack Blog Management System where users can register, login, create blogs, view blogs, update their own blogs and delete their blogs. The application includes authentication, protected user operations, REST API integration and a responsive modern interface.",
        projectType: "Full Stack Blog Management System",
        technologies: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT",
          "bcryptjs",
          "Cookie Parser",
          "Axios",
          "Lucide React",
        ],
        features: [
          "User Registration",
          "User Login",
          "User Logout",
          "JWT Authentication",
          "HTTP-only Cookie Authentication",
          "Password Hashing with bcryptjs",
          "Create Blog",
          "Read All Blogs",
          "View User Blogs",
          "Update Blog",
          "Delete Blog",
          "Protected User Operations",
          "Author Information",
          "MongoDB Database Integration",
          "REST API Integration",
          "Responsive UI",
        ],
        frontend: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Axios",
          "Lucide React",
        ],
        backend: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT",
          "bcryptjs",
          "Cookie Parser",
        ],
        authentication: [
          "User registration",
          "User login",
          "JWT token generation",
          "HTTP-only authentication cookie",
          "Password hashing using bcryptjs",
          "Protected API operations",
          "User logout",
        ],
        database: {
          name: "MongoDB",
          odm: "Mongoose",
          collections: [
            "Users",
            "Blogs",
          ],
        },
        api: {
          baseURL: "http://localhost:3000/api",
          endpoints: [
            "POST /register",
            "POST /login",
            "POST /logout",
            "GET /profile",
            "PUT /profile/update",
            "DELETE /profile/delete",
            "POST /blog/create",
            "GET /blog/all",
            "GET /blog/user/:id",
            "PUT /blog/update/:id",
            "DELETE /blog/delete/:id",
          ],
        },
        purpose:
          "The project demonstrates full-stack development, user authentication, REST API development, MongoDB database management, CRUD operations and responsive frontend development.",
      },

      // =================================================
      // WEATHER APP
      // =================================================
      "KS Weather App": {
        keywords: [
          "ks weather",
          "weather",
          "temperature",
          "forecast",
          "climate",
          "rain",
          "weather app",
        ],
        description:
          "KS Weather App is a weather application that displays current weather and forecast information.",
        projectType: "Weather Application",
        technologies: [
          "React",
          "JavaScript",
          "Open-Meteo API",
        ],
        features: [
          "Current Weather",
          "Hourly Forecast",
          "Daily Forecast",
          "Location Based Weather",
          "City Search",
          "Responsive Interface",
        ],
        frontend: [
          "React",
          "JavaScript",
          "CSS",
        ],
        backend: [
          "Open-Meteo API",
        ],
        purpose:
          "The project demonstrates API integration and dynamic weather data rendering.",
      },

      // =================================================
      // POPULATION EXPLORER
      // =================================================
      "Population Explorer": {
        keywords: [
          "population",
          "country",
          "countries",
          "world population",
          "population explorer",
        ],
        description:
          "Population Explorer is a web application for exploring population information of different countries.",
        projectType: "Country and Population Explorer",
        technologies: [
          "React",
          "JavaScript",
          "World Bank API",
          "REST Countries API",
        ],
        features: [
          "Country Search",
          "Population Information",
          "Country Details",
          "REST Countries API Integration",
          "World Bank API Integration",
          "Responsive UI",
        ],
        frontend: [
          "React",
          "JavaScript",
        ],
        backend: [
          "World Bank API",
          "REST Countries API",
        ],
        purpose:
          "The project demonstrates working with multiple public APIs and displaying country-related information dynamically.",
      },
    },

    internship: "Kuldeep successfully completed an internship at Codomax.",
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
    const projectNames = Object.keys(kuldeep.projects);

    for (const projectName of projectNames) {
      if (q.includes(projectName.toLowerCase())) {
        return projectName;
      }
    }

    for (const [projectName, project] of Object.entries(kuldeep.projects)) {
      if (hasAny(q, project.keywords)) {
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

    if (hasAny(q, ["certificate", "certificates", "certification", "certifications"])) {
      return "certificates";
    }

    if (
      hasAny(q, [
        "project details",
        "project detail",
        "detailed project",
        "detailed information",
        "explain project",
        "explain the project",
        "complete project",
        "full project details",
        "all project details",
        "all details",
        "everything about",
        "complete details",
      ])
    ) {
      return "projectDetails";
    }

    if (
      hasAny(q, [
        "authentication",
        "auth",
        "login system",
        "login functionality",
        "signup",
        "register",
        "registration",
        "jwt",
        "cookie",
        "password hashing",
        "bcrypt",
      ])
    ) {
      return "authentication";
    }

    if (hasAny(q, ["api", "apis", "api endpoint", "api endpoints", "endpoint", "endpoints", "rest api"])) {
      return "api";
    }

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
        "tech stack",
      ])
    ) {
      return "technology";
    }

    if (hasAny(q, ["skill", "skills", "know", "knows", "can he", "what can", "expertise", "ability", "abilities", "technical skills"])) {
      return "skills";
    }

    if (hasAny(q, ["project", "projects", "application", "applications", "app", "apps", "built", "made", "created", "developed", "work"])) {
      return "projects";
    }

    if (hasAny(q, ["database", "db", "data base", "mongodb", "mysql", "mongoose"])) {
      return "database";
    }

    if (hasAny(q, ["education", "study", "studying", "college", "degree", "bca", "qualification"])) {
      return "education";
    }

    if (hasAny(q, ["learning", "learn", "currently learning", "studying now", "working on", "currently studying"])) {
      return "learning";
    }

    if (hasAny(q, ["internship", "intern", "codomax", "training", "experience"])) {
      return "internship";
    }

    if (hasAny(q, ["github", "github profile", "repository", "repo", "source code"])) {
      return "github";
    }

    if (hasAny(q, ["who is kuldeep", "who is he", "tell me about kuldeep", "about kuldeep", "introduce kuldeep", "introduce him", "about him"])) {
      return "about";
    }

    return "unknown";
  };

  // =====================================================
  // ANSWER GENERATORS
  // =====================================================

  const aboutAnswer = () => {
    return `Kuldeep Sengar is a Full Stack Web Developer currently pursuing BCA at Aligarh College of Engineering & Technology.\n\nHe works with technologies like React, JavaScript, Node.js, Express.js, MongoDB, MySQL and Java.\n\nHe has worked on multiple full-stack projects including KS CHATS, K.S Blogs, StarPeek, KS Weather App and Population Explorer.`;
  };

  const skillsAnswer = () => {
    return `Kuldeep's skills include:\n\nFrontend:\n• HTML\n• CSS\n• JavaScript\n• React\n• Tailwind CSS\n\nBackend:\n• Node.js\n• Express.js\n\nDatabase:\n• MongoDB\n• MySQL\n\nProgramming:\n• Java\n• JavaScript\n\nTools:\n• Git\n• GitHub\n• Postman\n• Axios`;
  };

  const technologyAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];
      return `${projectName} was built using:\n\n${project.technologies.map((tech) => `• ${tech}`).join("\n")}`;
    }
    return `Kuldeep works with technologies such as:\n\n• HTML\n• CSS\n• JavaScript\n• React\n• Tailwind CSS\n• Node.js\n• Express.js\n• MongoDB\n• MySQL\n• Java`;
  };

  const projectsAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];
      let answer = `${projectName}\n\n${project.description}`;
      if (project.projectType) answer += `\n\nProject Type:\n• ${project.projectType}`;
      if (project.technologies) answer += `\n\nTechnologies:\n${project.technologies.map((t) => `• ${t}`).join("\n")}`;
      if (project.features) answer += `\n\nFeatures:\n${project.features.map((f) => `• ${f}`).join("\n")}`;
      return answer;
    }
    return `Kuldeep has worked on projects including:\n\n• KS CHATS\n• K.S Blogs\n• StarPeek\n• KS Weather App\n• Population Explorer\n\nYou can ask me about any specific project to get more details.`;
  };

  const detailedProjectAnswer = (projectName) => {
    if (!projectName) {
      return `Please mention a project name.\n\nFor example:\n\n• Tell me detailed information about K.S Blogs\n• Explain KS CHATS\n• Give me details about StarPeek\n• Explain the Weather App`;
    }
    const project = kuldeep.projects[projectName];
    let answer = `${projectName}\n\n${project.description}`;
    if (project.projectType) answer += `\n\nProject Type:\n• ${project.projectType}`;
    if (project.technologies) answer += `\n\nTechnologies:\n${project.technologies.map((t) => `• ${t}`).join("\n")}`;
    if (project.features) answer += `\n\nFeatures:\n${project.features.map((f) => `• ${f}`).join("\n")}`;
    if (project.frontend) answer += `\n\nFrontend:\n${project.frontend.map((f) => `• ${f}`).join("\n")}`;
    if (project.backend) answer += `\n\nBackend:\n${project.backend.map((b) => `• ${b}`).join("\n")}`;
    if (project.authentication) answer += `\n\nAuthentication:\n${project.authentication.map((a) => `• ${a}`).join("\n")}`;
    if (project.database) {
      answer += `\n\nDatabase:\n• ${project.database.name}\n• ODM: ${project.database.odm}`;
      if (project.database.collections) {
        answer += `\n\nCollections:\n${project.database.collections.map((c) => `• ${c}`).join("\n")}`;
      }
    }
    if (project.api) {
      answer += `\n\nAPI Base URL:\n${project.api.baseURL}\n\nAPI Endpoints:\n${project.api.endpoints.map((e) => `• ${e}`).join("\n")}`;
    }
    if (project.purpose) answer += `\n\nPurpose:\n${project.purpose}`;
    return answer;
  };

  const databaseAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];
      if (project.database) {
        let answer = `${projectName} uses:\n\n• Database: ${project.database.name}\n• ODM: ${project.database.odm}`;
        if (project.database.collections) {
          answer += `\n\nCollections:\n${project.database.collections.map((c) => `• ${c}`).join("\n")}`;
        }
        return answer;
      }
      return `I don't have a database specified for ${projectName}.`;
    }
    return `Kuldeep works with:\n\n• MongoDB\n• MySQL\n• Mongoose`;
  };

  const authenticationAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];
      if (project.authentication) {
        return `${projectName} authentication includes:\n\n${project.authentication.map((a) => `• ${a}`).join("\n")}`;
      }
      return `I don't have detailed authentication information for ${projectName}.`;
    }
    return `Kuldeep has worked with authentication technologies including:\n\n• JWT\n• HTTP-only Cookies\n• bcryptjs\n• Password Hashing\n• Protected Routes\n• User Login\n• User Registration`;
  };

  const apiAnswer = (projectName) => {
    if (projectName) {
      const project = kuldeep.projects[projectName];
      if (project.api) {
        return `${projectName} API:\n\nBase URL:\n${project.api.baseURL}\n\nEndpoints:\n${project.api.endpoints.map((e) => `• ${e}`).join("\n")}`;
      }
      return `${projectName} uses API integration, but detailed endpoints are not currently stored in my knowledge base.`;
    }
    return `Kuldeep has experience working with REST APIs using:\n\n• Node.js\n• Express.js\n• Axios\n• MongoDB\n• Mongoose\n\nHe has also integrated external APIs such as weather, World Bank and REST Countries APIs.`;
  };

  const learningAnswer = () => `Currently Kuldeep is learning:\n\n• Java\n• DSA\n• Spring Boot\n• MySQL`;
  const educationAnswer = () => `Kuldeep is currently pursuing BCA at Aligarh College of Engineering & Technology.`;
  const internshipAnswer = () => `Kuldeep successfully completed an internship at Codomax.\n\nDuring the internship, he worked on web development projects involving frontend, backend, authentication and CRUD functionality.`;
  const githubAnswer = () => `You can find Kuldeep's GitHub profile here:\n\n${kuldeep.github}`;
  const htmlCertificateAnswer = () => `Kuldeep completed an HTML course from Codeliber.\n\nCertificate Details:\n\n• Course: HTML\n• Platform: Codeliber\n• Completed: September 19, 2026\n\nCertificate:\nhttps://codeliber.com/certificates/mu7ru5j0km3oc`;
  const certificateAnswer = () => `Kuldeep has certificates including:\n\n• Codomax Internship Certificate\n• JavaScript Certificate\n• HTML Certificate — Codeliber\n\nHTML Certificate:\nhttps://codeliber.com/certificates/mu7ru5j0km3oc`;

  // =====================================================
  // MAIN AI ENGINE
  // =====================================================

  const getAnswer = (question) => {
    const intent = detectIntent(question);
    const project = detectProject(question);

    switch (intent) {
      case "about": return aboutAnswer();
      case "skills": return skillsAnswer();
      case "technology": return technologyAnswer(project);
      case "projectDetails": return detailedProjectAnswer(project);
      case "projects": return projectsAnswer(project);
      case "database": return databaseAnswer(project);
      case "authentication": return authenticationAnswer(project);
      case "api": return apiAnswer(project);
      case "learning": return learningAnswer();
      case "education": return educationAnswer();
      case "internship": return internshipAnswer();
      case "github": return githubAnswer();
      case "htmlCertificate": return htmlCertificateAnswer();
      case "certificates": return certificateAnswer();
      default: break;
    }

    if (project) return projectsAnswer(project);

    const q = normalize(question);

    if (hasAny(q, ["hi", "hello", "hey", "hii", "helo", "namaste"])) {
      return "Hello 👋 I'm KuldeepAI. What would you like to know about Kuldeep?";
    }

    if (hasAny(q, ["thank you", "thanks", "thank", "thx"])) {
      return "You're welcome 😊 Feel free to ask me anything about Kuldeep.";
    }

    return `I'm KuldeepAI 🤖\n\nI can tell you about:\n\n• Kuldeep's skills\n• Technologies\n• Projects\n• Project technologies\n• Project details\n• Frontend & Backend\n• Authentication\n• APIs\n• Databases\n• Education\n• Current learning\n• Internship\n• Certificates\n• HTML Certificate\n• GitHub\n\nTry asking something like:\n\n"What technologies were used in the Blog Management System?"`;
  };

  // =====================================================
  // CHAT ACTIONS
  // =====================================================

  const sendMessage = () => {
    if (!input.trim() || typing) return;
    const question = input.trim();

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: question },
    ]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = getAnswer(question);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "ai", text: answer },
      ]);
      setTyping(false);
    }, 600);
  };

  const askSuggestion = (question) => {
    if (typing) return;
    setInput("");
    setTyping(true);

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: question },
    ]);

    setTimeout(() => {
      const answer = getAnswer(question);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "ai", text: answer },
      ]);
      setTyping(false);
    }, 600);
  };

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

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
  // UI RENDER
  // =====================================================

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open KuldeepAI"
          className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:scale-110 transition duration-300"
        >
          <Bot size={30} />
          <span className="absolute -top-1 -right-1">
            <Sparkles size={18} className="text-yellow-300 animate-pulse" />
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-[999] w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 p-4 border-b border-purple-500/20 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-400/30 flex items-center justify-center">
                <Bot size={22} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">KuldeepAI</h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={() => setOpen(false)}
                title="Close"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-1">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-br-none"
                      : "bg-slate-800 text-slate-100 border border-purple-500/10 rounded-bl-none"
                  }`}
                >
                  {renderMessage(msg.text)}
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-slate-800 text-slate-400 p-3 rounded-2xl text-xs rounded-bl-none flex items-center gap-1.5 border border-purple-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="px-3 py-2 bg-slate-900 border-t border-purple-500/10 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => askSuggestion("Tell me about Kuldeep")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900/40 text-[11px] text-purple-300 rounded-full border border-purple-500/20 whitespace-nowrap transition"
            >
              👤 About
            </button>
            <button
              onClick={() => askSuggestion("What are Kuldeep's skills?")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900/40 text-[11px] text-purple-300 rounded-full border border-purple-500/20 whitespace-nowrap transition"
            >
              💻 Skills
            </button>
            <button
              onClick={() => askSuggestion("Show projects")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900/40 text-[11px] text-purple-300 rounded-full border border-purple-500/20 whitespace-nowrap transition"
            >
              🚀 Projects
            </button>
            <button
              onClick={() => askSuggestion("HTML Certificate")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900/40 text-[11px] text-purple-300 rounded-full border border-purple-500/20 whitespace-nowrap transition"
            >
              📜 Certificate
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-900 border-t border-purple-500/20 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything about Kuldeep..."
              className="flex-1 bg-slate-950 border border-purple-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
            />
            <button
              onClick={sendMessage}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:scale-105 active:scale-95 transition shadow-md"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default KuldeepAI;
