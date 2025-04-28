const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Email submitted:', email);
    alert('Thank you for your submission!');
    form.reset();
});