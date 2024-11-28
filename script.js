
// Wait for DOMContentLoaded to run all animations
document.addEventListener('DOMContentLoaded', () => {
    // Main header animation
    gsap.from('.mainHead', {
      opacity: 0,
      delay: 2.4,
      y: -20,
      duration: 1,
      ease: "power2.out"
    });
  
    // Heading text animation
    gsap.from('.headingText', {
      opacity: 0,
      delay: 1.2,
      x: 100,
      duration: 1.5,
      ease: "power2.out"
    });
  
    // Paragraph animation
    gsap.from('.paragraphTop', {
      opacity: 0,
      delay: 1.4,
      x: -100,
      duration: 1.4,
      ease: "power2.out"
    });
  
    // Hero image animation
    gsap.from('.heroImage', {
      opacity: 0,
      delay: 1.8,
      y: 100,
      duration: 2,
      ease: "power2.out"
    });
  });
  
  // Text work animation on scroll
  gsap.fromTo(".textWork", 
    { opacity: 0, y: 90 }, 
    { 
      opacity: 1, y: 0, 
      duration: 1.5, 
      scrollTrigger: {
        trigger: ".background",
        start: "bottom bottom",
        toggleActions: "play none none none",
      }
    }
  );
  
  // General-purpose animation for scrolling elements
  const animations = [
    { selector: ".leftText", x: -120 },
    { selector: ".teaImg", x: 120 },
    { selector: ".rightText", x: 120 },
    { selector: ".accountImg", x: -120 },
    { selector: ".workThird", x: -120 },
    { selector: ".influencerImg", x: 120 },
  ];
  
  // Apply ScrollTrigger animations for each element
  animations.forEach(({ selector, x }) => {
    ScrollTrigger.create({
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.fromTo(selector, 
          { opacity: 0, x: x }, 
          { opacity: 1, x: 0, duration: 1.3 }
        );
      },
      once: true, // Ensures the animation only plays once
    });
  });
  



const nav = document.querySelector(".mainHead");
window.addEventListener( 'scroll', function(){
    if(this.scrollY > 200){
        mainHead.classList.add('slidedown');
    }
})


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLeft = document.querySelector('.navLeft');
  
  console.log(menuToggle); 
  console.log(navLeft); 

  menuToggle.addEventListener('click', () => {
      navLeft.classList.toggle('active');
      menuToggle.classList.toggle('open');
      console.log('Menu toggled!'); 
  });
});
