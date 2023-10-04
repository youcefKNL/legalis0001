import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const options = {
  name: "Absorbers",
  particles: {
    number: {
      value: 150,
    },
    collisions: {
      enable: true,
    },
    color: {
      value: "#aa8950",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
    },
    size: {
      value: {
        min: 1,
        max: 4,
      },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "down",
      straight: true,
      warp: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
    },
  },
  absorbers: {
    draggable: true,
    size: {
      value: {
        min: 20,
        max: 200,
      },
      limit: 200,
    },
    position: {
      x: 20,
      y: 80,
    },
    color: "#aa8950",
  },
  background: {
    color: "",
  },
  detectRetina: true,
};

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesContainer;
