import '../css/contact.css';
import '../css/main.css';

const submitBtn = document.querySelector('.submitBtn');
        var fName = document.querySelector('.name');
        var fEmail = document.querySelector('.email');

    submitBtn.addEventListener('click', () =>{
        if (fName.value !== "" && fEmail.value !== "") {
            alert("Message sent")
        } else {
            alert("Please fill in all required fields");
        }
   });
