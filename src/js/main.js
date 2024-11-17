import '../css/main.css';
console.log("App js");
// import request from './request';

// request(API).then((data) => {
//     console.log(data)
// })


document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector('.btn');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    menuBtn.addEventListener('click', (event) => {
        if(!dropDownMenu.contains(event.target)) {
            dropDownMenu.style.display = dropDownMenu.style.display == "none" ? "block":"none";
        }
    });

    const sections = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {threshold: 0.2});

    sections.forEach((section) =>{
        observer.observe(section);
    });
});

