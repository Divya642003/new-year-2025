document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("tsparticles", {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "shape": {
          "type": ["circle", "image"],
          "image": {
            "src": "./images/CharmSnowflake.png",
            "width": 100,
            "height": 100
          }
        },
        "size": {
          "value": 20,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 5,
            "sync": false
          }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable:true,
            speed:1,
            opacity_min:0.5,
            sync:false
          }
        },
        color: {
          value: "rgba(255,215,0,0.5)"
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        },
        shadow: {
            enable: true,
            color: "#rgba(255,215,0,0.5)",
            blur: 10
          },
        "line_linked": {
          "enable": false
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
        },
        "modes": {
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
  });