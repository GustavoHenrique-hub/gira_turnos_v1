import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesModelOne = () => {
  const particlesInit = async (main) => {
    // Carrega todas as features necessárias do tsparticles
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000", // Cor do fundo
          },
        },
        particles: {
          number: {
            value: 80, // Quantidade de partículas
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // Cor das partículas
          },
          shape: {
            type: "circle", // Formato das partículas
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true, // Linhas entre partículas
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2, // Velocidade das partículas
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repele partículas ao passar o mouse
            },
            onClick: {
              enable: true,
              mode: "push", // Adiciona partículas ao clicar
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesModelOne;
