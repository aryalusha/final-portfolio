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
              menuToggle.classList.remove("open");
              navLeft.classList.remove("active");
          }
      });
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

    section.addEventListener("mouseleave", () => {});
  });

  if (nextProjectButton) {
    nextProjectButton.addEventListener("click", () => {
      window.location.href = "../pages/accountingSingle.html";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const cvButton = document.getElementById("cvDownload_nav");
  const loader = document.getElementById("loader");

  if (cvButton) {
    cvButton.addEventListener("click", async (event) => {
      event.preventDefault();

      loader.style.display = "flex"; 

      const pdfURL = "assets/Usha_cv.pdf";

      try {
        window.open(pdfURL, "_blank");
        await downloadPDF(pdfURL);
      } catch (error) {
      } finally {
        loader.style.display = "none"; 
      }
    });
  }
});

async function downloadPDF(url) {
  return new Promise((resolve, reject) => {
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = "Usha_cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const textGradient = document.querySelector(".textGradient");

  gsap.fromTo(
    textGradient,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      onStart: () => {
        hideLoader();
      },
    }
  );
});

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
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


function showLoader() {
  document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitBtn");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const errorMessage = document.getElementById("error-message");
  const loader = document.getElementById("loaderBtn");
  const successPopup = document.getElementById("successPopup");

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showLoader() {
    loader.style.display = "block";
    submitButton.classList.add("loading"); 
  }

  function hideLoader() {
    loader.style.display = "none";
    submitButton.classList.remove("loading");
  }

  function showSuccessPopup() {
    successPopup.style.display = "flex";
    setTimeout(() => {
      successPopup.style.opacity = "0";
      setTimeout(() => {
        successPopup.style.display = "none";
        successPopup.style.opacity = "1";
      }, 400);
    }, 2000);
  }

  submitButton.addEventListener("click", async function () {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (!nameValue) {
      errorMessage.innerText = "Full Name is required*";
      return;
    }

    if (!emailValue) {
      errorMessage.innerText = "Email is required*";
      return;
    }

    if (!isValidEmail(emailValue)) {
      errorMessage.innerText = "Invalid email address*";
      return;
    }

    if (!messageValue) {
      errorMessage.innerText = "Message cannot be empty.";
      return;
    }

    errorMessage.innerText = "";
    showLoader();

    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: nameValue,
          email: emailValue,
          message: messageValue,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        showSuccessPopup();
        fullName.value = "";
        email.value = "";
        message.value = "";
      } else {
        alert(result.message || "Failed to send email.");
      }
    } catch (error) {
      alert("There was an error sending the email.");
    } finally {
      hideLoader();
    }
  });
});
