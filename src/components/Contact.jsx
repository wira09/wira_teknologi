import React from "react";
import useAOS from "../hooks/useAOS";

const Contact = () => {
  useAOS();
  return (
    <div id="contact">
      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-16 bg-white px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Siap untuk Memulai Proyek Anda?
          </h2>
          <p 
            className="text-xl text-gray-600 mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>

          <div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Konsultasi Gratis
            </h3>
            <p 
              className="text-gray-700 mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Silakan hubungi kami melalui WhatsApp untuk informasi
              lebih lanjut tentang layanan kami.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                className="flex items-center justify-center gap-3 rounded-lg bg-green-600 px-6 py-4 text-lg font-semibold text-white hover:bg-green-700 transition-colors duration-300"
                href="https://wa.me/6285179947809"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.101" />
                </svg>
                <span>Hubungi via WhatsApp</span>
              </a>
              {/* <a
                className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors duration-300"
                href="mailto:info@wirateknologi.com"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>Kirim Email</span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
