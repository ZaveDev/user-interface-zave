gsap.from("#top-welcome", {duration: 2, opacity: 0, ease: "back", y: 150});
gsap.from("#landing-img", {duration: 2, opacity: 0, ease: "back", x: -150});
gsap.from("#product-description-title", {duration: 2, opacity: 0, ease: "back", x: -150});
gsap.from("#product-description-content", {duration: 2, opacity: 0, ease: "back", x: 150});
gsap.from(".cards", {duration: 2, opacity: 0, ease: "back", y: 150, stagger: 0.25, delay: 1});
gsap.from(".nav-button", {duration: 2, opacity: -1, stagger: 0.25});

gsap.from("#team-title", {duration: 2, opacity: 0, ease: "back", x: -150});
gsap.from("#mission-title", {duration: 2, opacity: 0, ease: "back", x: 150});
