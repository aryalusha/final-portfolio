const nav = document.querySelector(".mainHead");
window.addEventListener( 'scroll', function(){
    if(this.scrollY > 200){
        mainHead.classList.add('slidedown');
    }
})


document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll(".sidebar nav ul li a");
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        sidebarLinks.forEach(link => link.classList.remove("active"));
        sidebarLinks[index].classList.add("active");
      }
    });
  });