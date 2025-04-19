window.addEventListener('load', () => {
  gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0 });
  gsap.from(".hero-content p", { duration: 1.2, y: 50, opacity: 0, delay: 0.3 });
  gsap.from(".section", {
    scrollTrigger: ".section",
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3
  });
});
