
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
      const sectionTop = section.offsetTop - 0; 
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
      else {
        section.classList.remove("active-section"); 
    }
    });
  
    sidebarLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSectionId) {
        link.classList.add("active");
      }
    });
  });
  

  document.querySelector(".next-project").addEventListener("click", () => {
    alert("Next project coming soon!");
  });
  
  const style = document.createElement("style");
  style.textContent = `
    .sidebar nav ul li a.active {
      color: #ff6f61;
      font-weight: 500;
    }
  `;
  document.head.appendChild(style);