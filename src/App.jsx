// import navbar
import Navbar from "./header/Navbar";
// menu navbar
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Price from "./components/Price";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Price />
      <Portofolio />
      <Contact />
    </>
  );
}
