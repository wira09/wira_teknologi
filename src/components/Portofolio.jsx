import React from "react";
import useAOS from "../hooks/useAOS";

const Portofolio = () => {
  useAOS();
  return (
    <div
      id="portofolio"
      className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8"
    >
      <div 
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 
          className="text-3xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Portofolio
        </h2>
        <div 
          className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></div>
      </div>

      {/* Grid responsif */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Card Profile */}
        <div 
          className="text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <a
            href="#"
            className="group relative block bg-black rounded-xl overflow-hidden shadow-lg"
          >
            <img
              alt="Foto Profil"
              src="./foto.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-6 sm:p-8 lg:p-10">
              <p 
                className="text-sm font-medium tracking-widest text-yellow-400 uppercase"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Junior Software Engineer
              </p>

              <p 
                className="text-2xl font-bold text-white sm:text-3xl"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Zaelani Wira
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div 
                  className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    Saya adalah seorang mahasiswa D3 di ASM Ariyanti dengan
                    passion kuat dalam pengembangan teknologi, khususnya di
                    bidang web dan mobile development. Memiliki kemampuan
                    sebagai Full-Stack Developer dan Mobile Developer, saya
                    terbiasa mengelola proses pengembangan aplikasi dari sisi
                    front-end, back-end, hingga mobile dengan pendekatan yang
                    terstruktur dan berkualitas.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Card Sosial Media */}
        <div 
          className="w-full max-w-2xl mx-auto space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3 
            className="text-2xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Sosial Media
          </h3>

          <div className="space-y-5">
            {/* Portfolio */}
            <SocialCard
              href="https://portofolio-wira.vercel.app/"
              title="Portfolio"
              desc="Lihat Website Portofolio saya"
              gradient="from-blue-500 to-indigo-600"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              }
              aosDelay="400"
            />

            {/* LinkedIn */}
            <SocialCard
              href="https://www.linkedin.com/in/mohamad-zaelani-wira-kusuma-4859b3262/"
              title="LinkedIn"
              desc="Hubungi saya"
              gradient="from-blue-700 to-indigo-800"
              icon={
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              }
              aosDelay="500"
            />

            {/* GitHub */}
            <SocialCard
              href="https://github.com/wira09"
              title="GitHub"
              desc="Lihat project saya"
              gradient="from-gray-800 to-gray-600"
              icon={
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.59.11.8-.25.8-.56v-2c-3.26.71-3.95-1.58-3.95-1.58-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.81 2.79 1.29 3.47.99.11-.77.41-1.29.74-1.58-2.6-.3-5.35-1.3-5.35-5.79 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.51.12-3.15 0 0 .99-.32 3.25 1.21A11.2 11.2 0 0112 6.8c1 0 2.01.13 2.95.37 2.26-1.53 3.25-1.21 3.25-1.21.65 1.64.24 2.85.12 3.15.76.82 1.22 1.87 1.22 3.15 0 4.51-2.76 5.49-5.39 5.78.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.81.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                />
              }
              aosDelay="600"
            />

            {/* Instagram */}
            <SocialCard
              href="https://www.instagram.com/zaelaniwira/"
              title="Instagram"
              desc="Ikuti aktivitas saya"
              gradient="from-pink-500 to-yellow-500"
              icon={
                <path
                  fill="currentColor"
                  d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
                />
              }
              aosDelay="700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ href, title, desc, gradient, icon, aosDelay }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block group w-full"
    data-aos="fade-up"
    data-aos-delay={aosDelay || "100"}
    data-aos-duration="1000"
  >
    <div className="bg-indigo-800/80 hover:bg-indigo-700/90 rounded-xl p-5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg border border-indigo-600">
      <div className="flex items-center">
        <div className={`bg-gradient-to-r ${gradient} rounded-lg p-3 mr-5`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {icon}
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-white text-lg">{title}</h4>
          <p className="text-sm text-indigo-200">{desc}</p>
        </div>
      </div>
    </div>
  </a>
);

export default Portofolio;
