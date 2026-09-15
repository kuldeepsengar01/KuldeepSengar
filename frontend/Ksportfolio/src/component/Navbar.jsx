import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Certificate", path: "/certificate" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:px-5">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          {/* Profile */}

          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-purple-500/60 bg-purple-500/10 shadow-lg shadow-purple-500/20 transition duration-300 group-hover:border-purple-400 group-hover:shadow-purple-500/40 sm:h-11 sm:w-11">

            <img
              src="https://ik.imagekit.io/kuldeepsengar01/kuldeepimage.jpg.jpeg"
              alt="Kuldeep Sengar"
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
            />

            {/* Online */}

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-green-500" />

          </div>

          {/* Name */}

          <div className="leading-none">

            <p className="text-sm font-black tracking-tight text-white sm:text-lg">
              KULDEEP{" "}
              <span className="text-purple-500">
                SENGAR
              </span>
            </p>

            <p className="mt-1 text-[8px] font-medium tracking-[0.3em] text-gray-500">
              DEVELOPER
            </p>

          </div>

        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-6 md:flex lg:gap-8">

          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition duration-300 ${
                  active
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-purple-400"
                }`}
              >
                {item.name}

                {/* Active Line */}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

        </div>

        {/* ================= DESKTOP CTA ================= */}

        <Link
          to="/contact"
          className="group hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 md:flex"
        >
          Let's Talk

          <ArrowUpRight
            size={16}
            className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mx-1 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 sm:mx-2 md:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >

        <div className="p-3">

          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block rounded-xl px-4 py-4 text-base font-medium transition duration-300 ${
                  active
                    ? "bg-purple-500/10 text-purple-400"
                    : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile CTA */}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-black transition duration-300 hover:bg-purple-500 hover:text-white"
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
