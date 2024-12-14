document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Target the hero-video element
  const video = document.querySelector("[hero-video]");

  // Ensure the video element exists
  if (!video) {
    console.error("Element with [hero-video] attribute not found!");
    return; // Exit if the target element is not found
  }

  // Set transformOrigin to the bottom
  gsap.set(video, { transformOrigin: "center bottom" });

  // Create the scroll animation
  gsap.to(video, {
    scale: 1.5, // Final scale
    scrollTrigger: {
      trigger: "[gsap-track]", // The element that triggers the scroll
      start: "top mid", // When the top of gsap-track hits the middle of the viewport
      end: "bottom top", // When the bottom of gsap-track leaves the top of the viewport
      scrub: true, // Smooth scrubbing effect
      markers: true, // Visualize the scroll trigger bounds
    },
  });
});
