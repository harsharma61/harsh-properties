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
<div style="background:#fff;padding:15px;border-radius:12px;margin-top:20px;box-shadow:0 5px 15px rgba(0,0,0,.2);">

    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
         style="width:100%;height:200px;object-fit:cover;border-radius:10px;">

    <h2>${location}</h2>

    <p><b>💰 Budget:</b> ${budget}</p>
    <p>🏠 2 BHK Builder Floor</p>
    <p>📐 850 Sq.ft.</p>
    <p>✅ Ready to Move</p>
    <p>📍 Prime Location</p>

    <a href="https://wa.me/919711354661?text=${encodeURIComponent(
        "Hi Harsh Properties, I am interested in a property at " +
        location +
        " with budget " +
        budget
    )}" target="_blank">

        <button style="width:100%;padding:14px;background:#25D366;color:#fff;border:none;border-radius:8px;font-size:18px;font-weight:bold;">
            Contact on WhatsApp
        </button>

    </a>

</div>
`;
`;
}
