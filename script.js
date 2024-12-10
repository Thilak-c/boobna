document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("boobna");
  
    // Add sparkles dynamically
    setInterval(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(sparkle);
  
      setTimeout(() => sparkle.remove(), 5000);
    }, 300);
  });
  
  // Add sparkle animation
  const style = document.createElement("style");
  style.textContent = `
    .sparkle {
      position: fixed;
      top: 0;
      width: 10px;
      height: 10px;
      background: radial-gradient(circle, #fff, transparent);
      opacity: 0.8;
      border-radius: 50%;
      box-shadow: 0 0 10px #fff;
      animation: fall 20s ease-in-out forwards;
    }
  
    @keyframes fall {
      0% {
        transform: translateY(0);
        opacity: 0.8;
      }
      50% {
        transform: translateY(100vh); /* Fall to half the display */
        opacity: 0.5; /* Reduce visibility slightly */
      }
      100% {
        transform: translateY(50vh); /* Stay at half the display */
        opacity: 0; /* Fully disappear */
      }
    }
  `;
  document.head.appendChild(style);
  document.addEventListener("DOMContentLoaded", () => {
    const photoGallery = document.querySelector(".photo-gallery");
  
    const showGallery = () => {
      photoGallery.classList.remove("hidden");
      photoGallery.classList.add("visible");
    };
  
    // Show photos on click
    showGallery()
  
    // Show photos on scroll
    document.addEventListener("scroll", showGallery);
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animate only once
      offset: 200, // Offset in pixels before the animation starts
    });
  
    const photoGallery = document.querySelector(".photo-gallery");
  
    const showGallery = () => {
      photoGallery.classList.remove("hidden");
      photoGallery.classList.add("visible");
    };
  
    // Show gallery on scroll
    document.addEventListener("scroll", showGallery);
  });
  
  