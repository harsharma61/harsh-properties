// ================================
// HARSH PROPERTIES SCRIPT - PART 1
// ================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Navbar Shadow
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 5px 20px rgba(255,215,0,.35)";
    }else{
        navbar.style.boxShadow = "none";
    }

});

// Scroll Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".section,.card").forEach(el=>{

    observer.observe(el);

});

// Contact Form Alert
const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(){

alert("✅ Thank you! Your enquiry has been sent successfully.");

});

}

// ================================
// HARSH PROPERTIES SCRIPT - PART 2
// ================================

function searchProperty(){

    const location = document.getElementById("location").value.trim();
    const budget = document.getElementById("budget").value;
    const result = document.getElementById("result");

    if(location==="" || budget==="Select Budget"){

        alert("Please select Location and Budget");

        return;
    }

    result.innerHTML=`

<div style="
max-width:650px;
margin:25px auto;
background:#fff;
border-radius:15px;
overflow:hidden;
box-shadow:0 10px 25px rgba(0,0,0,.25);">

<img
src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=
