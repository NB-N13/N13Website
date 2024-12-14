document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Target the hero-video element
    const video = document.querySelector("[hero-video]");

    // Create the scroll animation
    gsap.to(video, {
      scale: 0.5, // Final scale (e.g., shrink to half size)
      duration: 1, // Optional (scroll duration determines the effect)
      scrollTrigger: {
        trigger: "[gsap-track]", // The element that triggers the scroll
        start: "top top", // When the top of gsap-track hits the top of the viewport
        end: "bottom top", // When the bottom of gsap-track leaves the viewport
        scrub: true,
        markers: true,// Smooth scrubbing effect
      },
    });
  });

