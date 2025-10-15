// Menu toggle functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Contact form with Formspree
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  
  try {
    // Send to Formspree
    const response = await fetch('https://formspree.io/f/mqaybzbg', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Show success message
      successMessage.style.display = 'block';
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    } else {
      alert('Oops! Ada masalah saat mengirim pesan. Silakan coba lagi.');
    }
  } catch (error) {
    alert('Oops! Ada masalah saat mengirim pesan. Silakan coba lagi.');
  }
});

// Download CV functionality
function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'James-Tanuwijaya-CV.pdf';
  link.download = 'James-Tanuwijaya-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
