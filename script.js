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
