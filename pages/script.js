

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLeft = document.querySelector("#navLeft");

  if (menuToggle && navLeft) {
      menuToggle.addEventListener("click", function () {
          menuToggle.classList.toggle("open");
          navLeft.classList.toggle("active");
      });

      navLeft.addEventListener("click", function (event) {
          if (event.target.tagName === "A") {
              console.log("Closing menu...");
              menuToggle.classList.remove("open");
              navLeft.classList.remove("active");
          }
      });
  } else {
      console.error("Menu toggle or navLeft element is missing in the DOM.");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.pathname.includes('index.html')) {
    const animateFromBottom = (selector) => {
      gsap.fromTo(
        selector, 
        {
          opacity: 0,    
          y: 100,     
        },
        {
          opacity: 1,
          y: 0,       
          duration: 1.8,   
          ease: 'power3.out',
          delay: 0.3,  
          scrollTrigger: {
            trigger: selector, 
            start: 'top 80%',   
            toggleActions: 'play none none none', 
          },
        }
      );
    };

    animateFromBottom('.headingSec');
    animateFromBottom('.header');
  }
});

const animateFromSide = (selector, fromX, toX) => {
  gsap.fromTo(
    selector,  // Target element
    {
      opacity: 0,   // Start from invisible
      x: fromX,     // Start from off-screen (left or right)
    },
    {
      opacity: 1,   // Fade in to full opacity
      x: toX,       // End at original position (center)
      duration: 1.5,   // Duration of animation (smooth)
      ease: 'power3.out', // Smooth easing
      delay: 0.4,    // Small delay for smoother staggered effect
      scrollTrigger: {
        trigger: selector, // Trigger the animation when the element comes into view
        start: 'top 80%',   // Start when the top of the element is 80% from the top of the viewport
        toggleActions: 'play none none none', // Play animation when triggered
      },
    }
  );
};

// Animate .leftContainer from left
animateFromSide('.leftContainer', 120, 0);

// Animate .aboutMe from right
animateFromSide('.aboutMe', -120, 0);




// Smooth Scrolling for Sidebar Links
document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
  
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("#ContentProjects section");
    const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");

  
    let currentSectionId = "";

  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50; 
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
        section.querySelector("h3").classList.add("highlight-heading");
        section.classList.add("active-section");
      }
      else {
        section.classList.remove("active-section"); 
        section.querySelector("h3").classList.remove("highlight-heading");
    }
    });
  
    sidebarLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSectionId) {
        link.classList.add("active");
      }
    });
  });


  const nextProjectButton = document.querySelector(".next-project");
if (nextProjectButton) {
  nextProjectButton.addEventListener("click", () => {
    alert("Next project coming soon!");
  });
}
  


// for projects

function setupTabs () {
   document.querySelectorAll(".tabBtn").forEach(button => {
      button.addEventListener("click", () =>{
        const tabBar =button.parentElement;
        const tabContainer = button.closest(".tabBox1");
        const tabNumber = button.dataset.forTab;
        const tabToActivate = tabContainer.querySelector(`.work[data-tab="${tabNumber}"]`);

        tabBar.querySelectorAll(".tabBtn").forEach(button =>{
          button.classList.remove("tabBtn--active");
        });

        tabContainer.querySelectorAll(".work").forEach(tab =>{
          tab.classList.remove("work--active");
        });

        button.classList.add("tabBtn--active");
        tabToActivate.classList.add("work--active");
        
      });
   });
}

document.addEventListener("DOMContentLoaded", () =>{
    setupTabs();
});







