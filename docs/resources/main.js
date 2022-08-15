"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c;
window.addEventListener('load', async function () {
    const cu = await tsParticles.load("tsparticles", {
        autoPlay: true,
        background: {
            color: { value: "#222" }
        },
        fullScreen: { enable: true, zIndex: -1 },
        detectRetina: true,
        fpsLimit: 144,
        particles: {
            color: {
                value: "#f73",
                animation: {
                    l: {
                        enable: true,
                        speed: 10,
                        sync: false
                    }
                }
            },
            move: {
                angle: { offset: 0, value: 30 },
                direction: "top",
                enable: true,
                size: true,
                speed: 1,
            },
            number: {
                density: { enable: true, area: 800, factor: 1600 },
                value: 400
            },
            opacity: {
                random: { enable: true, minimumValue: 0.2 },
                value: { min: 0.2, max: 0.6 },
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                    minimumValue: 0.2
                }
            },
            shape: { type: "circle" },
            size: {
                random: { enable: true, minimumValue: 2 },
                value: { min: 2, max: 8 },
                animation: {
                    enable: true,
                    speed: 5,
                    sync: false,
                    minimumValue: 2
                }
            }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        zLayers: 1
    });
    if (!cu)
        return;
    c = cu;
});
