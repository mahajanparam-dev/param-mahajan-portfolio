import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#38bdf8" },
          links: { enable: true, distance: 130, color: "#38bdf8", opacity: 0.3, width: 1 },
          move: { enable: true, speed: 0.5 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
        detectRetina: true,
      }}
    />
  );
}
