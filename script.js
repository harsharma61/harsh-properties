// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Navbar Shadow
window.addEventListener("scroll",function(){
    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){
        navbar.style.boxShadow="0 5px 20px rgba(255,215,0,.4)";
    }else{
        navbar.style.boxShadow="0 2px 10px rgba(255,215,0,.2)";
    }
});

// WhatsApp Form
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function () {
        alert("Your enquiry has been sent successfully.");
    });
}

// Fade Animation
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll(".card,.section").forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".6s";
observer.observe(el);
});
function searchProperty() {
    let location = document.getElementById("location").value;
    let budget = document.getElementById("budget").value;
    let result = document.getElementById("result");

    if (location === "" || budget === "Select Budget") {
        alert("Please select Location and Budget");
        return;
    }

    result.innerHTML = `
        <div style="background:#fff;padding:15px;border-radius:10px;margin-top:20px;box-shadow:0 0 10px rgba(0,0,0,.2)">
            <h3>${location}</h3>
            <p><b>Budget:</b> ${budget}</p>
            <p>✅ Property Available</p>

            <a href="https://wa.me/919711354661?text=${encodeURIComponent(
                "Hi Harsh Properties, I am interested in a property at " +
                location +
                " with budget " +
                budget
            )}" target="_blank">
                <button>Contact on WhatsApp</button>
            </a>
        </div>
    `;
}
    
