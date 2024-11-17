
// Smooth Scrolling for Sidebar Links
document.querySelectorAll(".sidebar nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
  
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
  
  // Highlight Active Section in Sidebar
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




