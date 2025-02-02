gsap.to(".service_card", {
    xPercent: -100 * (document.querySelectorAll(".service_card").length - 1), // Moves all cards to the left
    ease: "none",
    scrollTrigger: {
      trigger: ".service_slider",
      start: "top 0%",
      end: "+=100%", 
      scrub: 2,
      pin: true,
      anticipatePin: 1,
    },
  });