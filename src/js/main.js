import '../css/main.css';
console.log("App js");
// import request from './request';

// request(API).then((data) => {
//     console.log(data)
// })

const menuphone = document.querySelector('.menu_phone');
const menuBtn = document.querySelector('.btn');
const dropDownMenu = document.querySelector('.dropdown-menu');
menuBtn.addEventListener('click', (event) => {
    if(!dropDownMenu.contains(event.target)) {
        dropDownMenu.style.display = dropDownMenu.style.display == "none" ? "block":"none";
    }
})

