/* ============================
   Sunaina Enterprises
   Premium Script - Part 1
============================ */

// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loadingOverlay");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Mobile Menu
const menuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

// Sticky Header
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

    if(mobileNav){
      mobileNav.classList.remove("active");
    }
  });
});

// Dark Mode
const darkBtn = document.getElementById("darkToggle");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

darkBtn.innerHTML="☀️";

localStorage.setItem("theme","dark");

}else{

darkBtn.innerHTML="🌙";

localStorage.setItem("theme","light");

}

});

}

// Saved Theme

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

if(darkBtn){

darkBtn.innerHTML="☀️";

}

}
