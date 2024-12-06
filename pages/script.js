
// document.addEventListener("DOMContentLoaded", () => {
//   const ease = "power4.inOut";

//   document.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", (event) => {
//       const href = link.getAttribute("href");
      
//       if (href && !href.startsWith("#") && href !== window.location.pathname) {
//         event.preventDefault();
        
//         animateTransition().then(() => {
//           window.location.href = href;  
//         });
//       }
//     });
//   });

//   revealTransition().then(() => {
//     gsap.set(".block", { visibility: "hidden" });
//   });

//   function revealTransition() {
//     return new Promise((resolve) => {
//       gsap.set(".block", { scaleY: 1 });
//       gsap.to(".block", {
//         scaleY: 0,
//         duration: 1,
//         stagger: {
//           each: 0.1,
//           from: "start",
//           grid: [2, 5],
//           axis: "x",
//         },
//         ease: ease,
//         onComplete: resolve,
//       });
//     });
//   }

//   function animateTransition() {
//     return new Promise((resolve) => {
//       gsap.set(".block", { visibility: "visible", scaleY: 0 });
//       gsap.to(".block", {
//         scaleY: 1,
//         duration: 1,
//         stagger: {
//           each: 0.1,
//           from: "start",
//           grid: [2, 5],
//           axis: "x",
//         },
//         ease: ease,
//         onComplete: resolve,
//       });
//     });
//   }
// });


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
    selector,  
    {
      opacity: 0,   
      x: fromX,   
    },
    {
      opacity: 1,  
      x: toX,       
      duration: 1.5,   
      ease: 'power3.out', 
      delay: 0.4,    
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',  
        toggleActions: 'play none none none', 
      },
    }
  );
};

animateFromSide('.leftContainer', 120, 0);

animateFromSide('.aboutMe', -120, 0);




document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("#contentProjects section");
  const sidebarLinks = document.querySelectorAll("#sidebar nav ul li a");
  const nextProjectButton = document.querySelector(".next-project");
  let currentActiveSection = null; 


  function activateSection(section) {
    sections.forEach(sec => {
      sec.classList.remove("active-section");
      sec.querySelector("h3")?.classList.remove("highlight-heading");
    });

    section.classList.add("active-section");
    section.querySelector("h3")?.classList.add("highlight-heading");
    updateSidebar(section.id);
    currentActiveSection = section;
  }

  function updateSidebar(activeSectionId) {
    sidebarLinks.forEach(link => {
      if (link.getAttribute("href").substring(1) === activeSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
      activateSection(section);
    });


    section.addEventListener("mouseleave", () => {
      if (currentActiveSection === section) {
        console.log("Mouse left, but keeping the current active section.");
      }
    });
  });

  if (nextProjectButton) {
    nextProjectButton.addEventListener("click", () => {
      window.location.href = "../pages/accountingSingle.html";
    });
  }
});



























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







