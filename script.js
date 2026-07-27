// ===========================
// SUNAINA ENTERPRISES
// script.js
// ===========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Sticky Header
window.addEventListener("scroll",function(){

    const header=document.querySelector(".header");

    if(window.scrollY>80){

        header.style.background="#062b69";
        header.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";

    }else{

        header.style.background="#0b3d91";
        header.style.boxShadow="none";

    }

});

// Reveal Animation
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

observer.observe(el);

});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
right:20px;
bottom:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0b3d91;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Product Button Alert
document.querySelectorAll(".product-card .btn").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Thank you for your interest.\nPlease contact Sunaina Enterprises for more details.");

});

});

// Current Year in Footer
const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
