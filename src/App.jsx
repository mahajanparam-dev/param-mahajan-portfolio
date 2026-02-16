import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./components/Projects"));

export default function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Stats />
      <Timeline />

      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading Projects...</div>}>
        <Projects />
      </Suspense>

      <Footer />
    </>
  );
}
