gsap.from('.mainHead',{
    opacity:0,
    delay:2.2,
    y: -20,
    duration: 1,
    ease: "power2.out"
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.headingText', {
        opacity: 0,
        delay: 1.2,
        x: 100,
        duration: 1.5,
        ease: "power2.out"
    });
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.paragraphTop', {
        opacity: 0,
        delay: 1.4,
        x: -100,
        duration: 1.5,
        ease: "power2.out"
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
  
  console.log(menuToggle); // Should log the menu toggle element
  console.log(navLeft); // Should log the navLeft element

  menuToggle.addEventListener('click', () => {
      navLeft.classList.toggle('active');
      menuToggle.classList.toggle('open');
      console.log('Menu toggled!'); // To check if the event fires
  });
});
