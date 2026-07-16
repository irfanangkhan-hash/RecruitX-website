/*=========================================
HR Recruitment Website
Main JavaScript
=========================================*/

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Sticky Header
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 60){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Counter Animation

const counters=document.querySelectorAll(".stat-box h2");

const speed=200;

counters.forEach(counter=>{

const animate=()=>{

const value=+counter.innerText.replace(/\D/g,'');

const data=+counter.getAttribute("data-count")||value;

const time=data/speed;

if(value<data){

counter.innerText=Math.ceil(value+time)+"+";

requestAnimationFrame(animate);

}else{

counter.innerText=data+"+";

}

}

animate();

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});
