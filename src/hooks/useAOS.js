import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = {}) => {
  const defaultOptions = {
    once: true,
    duration: 1000,
    offset: 100,
    ...options
  };

  useEffect(() => {
    AOS.init(defaultOptions);

    return () => {
      AOS.refresh();
    };
  }, [JSON.stringify(defaultOptions)]);

  // Fungsi untuk merefresh AOS saat konten berubah
  const refreshAOS = () => {
    AOS.refresh();
  };

  return { refreshAOS };
};

export default useAOS;