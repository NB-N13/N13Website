document.addEventListener('DOMContentLoaded', () => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Initialize ScrollSmoother
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // The outer container
    content: "#smooth-content", // The inner scrollable container
    smooth: 1.5, // Adjust smoothness (higher = smoother)
    effects: true, // Enable effects like parallax
  });

  // Target the hero-video element
  const video = document.querySelector("[hero-video]");

  // Ensure the video element exists
  if (!video) {
    console.error("Element with [hero-video] attribute not found!");
    return;
  }

  // Set transformOrigin to the bottom
  gsap.set(video, { transformOrigin: "center bottom" });

  // Create the scroll animation
  gsap.to(video, {
    scale: 1.2,
    ease: "power2.out", // Add easing
    scrollTrigger: {
      trigger: "[gsap-track]",
      start: "top mid",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
  });
});
