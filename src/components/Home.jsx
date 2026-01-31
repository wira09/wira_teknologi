import { useState, useEffect } from "react";
import useAOS from "../hooks/useAOS";

const TextType = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = "|",
  loop = true,
  as: Component = "h2",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentTextArray = Array.isArray(text) ? text : [text];
    const currentString = currentTextArray[textIndex];

    let timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex(0);
        const nextIndex = (textIndex + 1) % currentTextArray.length;
        setTextIndex(nextIndex);
      }
    } else {
      if (currentIndex < currentString.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    text,
    textIndex,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
  ]);

  return (
    <Component>
      {currentText}
      {showCursor && (
        <span className="ml-1 inline-block animate-pulse">
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

const Home = () => {
  const [showServices, setShowServices] = useState(false);
  useAOS();

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Bangun Website, Belajar Coding, <br />dan Konsultasi IT
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Semua Bisa di Wira Teknologi
          </h2>

          <div
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto h-12 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <TextType
              as="h2"
              text={[
                "Joki Tugas & Proyek Programming",
                "Konsultasi Pengembangan Software",
                "Pelatihan & Training IT",
                "Pembuatan Website & Aplikasi",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
            />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a
              className="group flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1"
              href="#services"
            >
              <span className="font-medium">Lihat Layanan Kami</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
            <a
              className="group flex items-center justify-center gap-3 rounded-lg border-2 border-indigo-600 px-8 py-4 text-lg font-semibold text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
              href="#contact"
            >
              <span className="font-medium">Konsultasi Gratis</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
