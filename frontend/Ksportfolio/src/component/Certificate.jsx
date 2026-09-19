import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const Certificates = [
  {
    title: "Codomax Internship Certificate",
    issuer: "Codomax",
    date: "2026",
    image:
      "https://ik.imagekit.io/kuldeepsengar01/Kuldeep_Sengar_Internship_Certificate%20(1)_page-0001.jpg",
  },
  {
    title: "JavaScript Certificate",
    issuer: "Codeliber",
    date: "2026",
    image:
      "https://ik.imagekit.io/kuldeepsengar01/codeliber-js-KULDEEP_SENGAR_.png",
  },
  {
    title: "HTML Certificate",
    issuer: "Codeliber",
    date: "2026",
    image:
      "https://ik.imagekit.io/kuldeepsengar01/codeliber-html-KULDEEP_SENGAR_.png",
  },
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-screen bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-purple-500">
            My Achievements
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Certificates
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Certificates and achievements I have earned during my
            learning and development journey.
          </p>
        </div>

        {/* ================= CERTIFICATE CARDS ================= */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Certificates.map((certificate, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-purple-900/40
                         bg-zinc-950 transition-all duration-300
                         hover:-translate-y-2 hover:border-purple-500
                         hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Certificate Image */}

              <div className="h-52 overflow-hidden bg-zinc-900">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-purple-400">
                  {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {certificate.date}
                </p>

                {/* View Certificate Button */}

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg
                             bg-purple-600 px-5 py-2.5 font-medium
                             transition-all duration-300
                             hover:bg-purple-700
                             hover:shadow-lg hover:shadow-purple-500/20"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= POPUP / MODAL ================= */}

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center
                     bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Popup Box */}

          <div
            className="relative max-h-[95vh] w-full max-w-5xl overflow-auto
                       rounded-2xl border border-purple-500/30
                       bg-zinc-950 p-3 shadow-2xl shadow-purple-900/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10
                         items-center justify-center rounded-full
                         border border-white/10 bg-black/70 text-white
                         transition duration-300
                         hover:border-purple-500 hover:bg-purple-600"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>

            {/* Certificate Image */}

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="mx-auto max-h-[85vh] w-auto max-w-full rounded-xl
                         object-contain"
            />

            {/* Certificate Information */}

            <div className="px-3 pb-3 pt-4 text-center">
              <h3 className="text-lg font-semibold text-white">
                {selectedCertificate.title}
              </h3>

              <p className="mt-1 text-sm text-purple-400">
                {selectedCertificate.issuer} • {selectedCertificate.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
