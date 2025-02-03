"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const StarParticles = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000020", // Deep dark blue to simulate night sky
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "light", // Subtle glow effect on hover
          },
        },
      },
      particles: {
        color: {
          value: ["#FFFFFF", "#F0F0FF", "#E0E0FF"], // Various shades of white/light blue for stars
        },
        shape: {
          type: "star", // Use star shape instead of circles
          options: {
            star: {
              sides: 5, // Classic 5-pointed star
            },
          },
        },
        opacity: {
          value: { min: 0.3, max: 1 }, // Varying star brightness
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2 }, // Varying star sizes
        },
        move: {
          enable: true,
          speed: 3, // Adjust speed of star movement
          direction: "top-right", // Consistent movement direction
          straight: true, // Movement in a straight line
          outModes: {
            default: "reset", // Particles disappear when they go out of bounds
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
        },
        number: {
          value: 300, // Number of stars
          density: {
            enable: true,
            value_area: 800,
          },
        },
        // Optional: Add a subtle twinkling effect
        twinkle: {
          lines: {
            enable: true,
            color: "#FFFFFF",
            opacity: 0.1,
          },
          particles: {
            enable: true,
            color: "#FFFFFF",
            opacity: 0.5,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it stays in the background
      }}
    />
  );
};

export default StarParticles;
