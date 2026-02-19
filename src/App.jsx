import Navbar from "./components/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Github from "./components/Github";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Timeline />
        <Github />
        <Connect />
      </main>

      <Footer />
    </>
  );
}

export default App;
