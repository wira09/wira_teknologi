import useAOS from "../hooks/useAOS";

const About = () => {
  useAOS();
  return (
    <div id="about">
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold mb-4">
              Mengapa Memilih Wira Teknologi?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mx-auto rounded"></div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Terpercaya & Profesional
              </h3>
              <p className="text-blue-200">
                Tim ahli dengan pengalaman bertahun-tahun di bidang teknologi
                informasi.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Pengerjaan Cepat</h3>
              <p className="text-blue-200">
                Pengerjaan cepat dan sesuai deadline tanpa mengurangi kualitas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Garansi Kepuasan</h3>
              <p className="text-blue-200">
                Garansi revisi dan layanan purna jual untuk memastikan kepuasan
                pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
