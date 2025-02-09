const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Display the success message
    document.getElementById("successMessage").style.display = "block";
  
    // Optionally, reset the form
    document.getElementById("contactForm").reset();
  });
  