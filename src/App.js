import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testmonial from "./components/Testmonial";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Skills />
      <Testmonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
