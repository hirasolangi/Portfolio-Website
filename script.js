document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading");
    const servicesSection = document.querySelector(".services"); 

    servicesSection.style.display = "flex";
    servicesSection.style.flexDirection = "column";
    servicesSection.style.alignItems = "center";
    servicesSection.style.justifyContent = "center";
    servicesSection.style.minHeight = "100vh"; 
    
    heading.style.margin = "0";
    heading.style.padding = "0";
});



document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        let skillValue = bar.getAttribute("data-skill");
        bar.style.width = skillValue;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseover", () => {
            service.style.boxShadow = "0 0 20px var(--main-color)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.boxShadow = "none";
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

