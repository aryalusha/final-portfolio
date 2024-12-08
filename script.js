
document.addEventListener("DOMContentLoaded", () => {
  const ease = "power4.inOut";

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) =>{
      event.preventDefault();
      const href = link.getAttribute("href");

    if (href && (href.includes('behance.net') || href.includes('dribbble.com'))) {
      event.preventDefault();
      animateTransition().then(() => {
        const newTab = window.open(href, '_blank');
        if (newTab) {
          newTab.focus();
          localStorage.setItem('newTabOpened', 'true');
          window.location.reload();
        }
      });
    } else {
      if (href && !href.startsWith("#") && href !== window.location.pathname) {
        event.preventDefault();
        animateTransition().then(() => {
          window.location.href = href; 
        });
      }
    }
  });
});
  
  revealTransition().then(() => {
    gsap.set(".block",  {visibility: "hidden"});
  });

  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", {scaleY: 1});
      gsap.to(".block", {
        scaleY: 0,
        duration: 1, 
        stagger: {
          each: 0.1,
          from: "start", 
          grid: "auto", 
          axis: "x",
        },
        ease: ease,
        onComplete: resolve,
      });
    });
  }

  function animateTransition(){
    return new Promise((resolve) => {
      gsap.set(".block", {visibility: "visible", scaleY: 0});
      gsap.to(".block", {
        scaleY: 1, 
        duration: 1, 
        stagger: {
          each: 0.1, 
          from: "start", 
          grid: [2, 5], 
          axis: "x", 
        },

        ease: ease, 
        onComplete: resolve,
      });
    });
  }
});




document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const animations = [
    { 
      selector: '.mainHead', 
      from: { opacity: 0, y: -20 }, 
      to: { delay: 2, duration: 1 } 
    },
    { 
      selector: '.headingText', 
      from: { opacity: 0, x: 100 }, 
      to: { delay: 1.2, duration: 1.5 } 
    },
    { 
      selector: '.paragraphTop', 
      from: { opacity: 0, x: -100 }, 
      to: { delay: 1.4, duration: 1.4 } 
    },
    { 
      selector: '.heroImage', 
      from: { opacity: 0, y: 100 }, 
      to: { delay: 1.8, duration: 2 } 
    },
    { 
      selector: '.textWork', 
      from: { opacity: 0, y: 90 }, 
      to: { 
        duration: 1.5, 
        scrollTrigger: {
          trigger: '.background',
          start: 'bottom bottom',
          toggleActions: 'play none none none'
        }
      } 
    }
  ];
  

  const defaultToProps = { ease: "power2.out", opacity: 1, x: 0, y: 0 };

  animations.forEach(({ selector, from, to }) => {
    const finalTo = { ...defaultToProps, ...to };
    if (finalTo.scrollTrigger) {
      gsap.fromTo(selector, from, finalTo); 
    } else {
      gsap.fromTo(selector, from, { ...from, ...finalTo }); 
    }
  });
});


 const animations = [
    { selector: ".leftText", x: -120 },
    { selector: ".teaImg", x: 120 },
    { selector: ".rightText", x: 120 },
    { selector: ".accountImg", x: -120 },
    { selector: ".workThird", x: -120 },
    { selector: ".influencerImg", x: 120 },
];
  
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
      once: true, 
    });
});


const animation = [
  { selector: '.about-left', x: '-100' }, 
  { selector: '.aboutDescription', x: '100' },  
  { selector: '.aboutMe', x: '0', y: '0' }
];

animation.forEach(({ selector, x, y = '0' }) => {
  ScrollTrigger.create({
    trigger: selector,
    start: "top 90%", 
    onEnter: () => {
      gsap.fromTo(
        selector,
        { opacity: 0, x: x, y: y },
        { opacity: 1, x: 0, y: 0, duration: 1.6 }
      );
    },
    once: true, 
  });
});


if (window.innerWidth > 768) { 
  gsap.fromTo(
    '.subContainer',
    { opacity: 0, y: 100 },  
    { 
      opacity: 1, y: 0,   
      duration: 1.5, 
      ease: "power2.out", 
      scrollTrigger: {
        trigger: '.whyContainer', 
        start: 'top 80%',       
        toggleActions: 'play none none none' 
      }
    }
  );
} else {
  gsap.set('.subContainer', { opacity: 1, y: 0 });
}


if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  const isMobile = window.innerWidth < 1200;

  if (!isMobile) { 
    gsap.fromTo(
      ['.container1', '.softwareContainer', '.img2', '.img3', '.img4', '.img5', '.img6', '.img7'],
      {
        scale: 0.8,
        opacity: 0, 
        visibility: 'hidden',  
        transformOrigin: 'center center',
      },
      {
        scale: 1, 
        opacity: 1, 
        visibility: 'visible',  
        duration: 1.4, 
        ease: 'power3.out', 
        stagger: (index) => {
          return index * 0.24;  
        },
        scrollTrigger: {
          trigger: '.container1',
          start: 'top 80%', 
          toggleActions: 'play none none none',
        },
      }
    );
  } else {
    console.log('Animations skipped on smaller devices with screen width < 1200px.');
  }
}


if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  gsap.fromTo(
    '.join',
    {
      opacity: 0, 
      y: 100, 
    },
    {
      opacity: 1,
      y: 0, 
      duration: isMobile ? 2 : 1, 
      ease: 'power2.out', 
      scrollTrigger: {
        trigger: '.join', 
        start: 'top 80%',
        toggleActions: 'play none none none', 
      },
    }
  );
} else {
  console.error('GSAP or ScrollTrigger is not loaded.');
}



document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.mainHead'); 
  const menuToggle = document.querySelector('.menu-toggle'); 
  const navLeft = document.querySelector('.navLeft'); 

  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
          nav.classList.add('slidedown');
      } else {
          nav.classList.remove('slidedown');
      }
  });

  if (menuToggle && navLeft) { 
      menuToggle.addEventListener('click', () => {
          navLeft.classList.toggle('active'); 
          menuToggle.classList.toggle('open'); 
          console.log('Menu toggled!');
      });
  } else {
      console.error('menuToggle or navLeft elements are missing.');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const cvButton = document.getElementById("cvDownload_nav");

  if (cvButton) {
    cvButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const pdfURL = "assets/Usha_cv.pdf";

      try {
        window.open(pdfURL, "_blank");
        await downloadPDF(pdfURL);
      } catch (error) {}
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
  const cvButton = document.getElementById("cvDownload_join");

  if (cvButton) {
    cvButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const pdfURL = "assets/Usha_cv.pdf";

      try {
        window.open(pdfURL, "_blank");
        await downloadPDF(pdfURL);
      } catch (error) {}
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














