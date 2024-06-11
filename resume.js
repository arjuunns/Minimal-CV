const button = document.querySelector('.button');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
let isDarkMode = true;

button.addEventListener('click', function(e) {
    if (isDarkMode) {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        button.innerHTML = "Switch to Dark Mode";
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        
        links.forEach(link => {
            link.style.color = 'rgb(23, 88, 192);'; // Change to light mode link color
        });
    } else {
        // Switch to dark mode
        body.style.backgroundColor = '#212121';
        body.style.color = 'white';
        button.innerHTML = "Switch to Light Mode";
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        
        links.forEach(link => {
            link.style.color = 'rgb(72, 146, 220)'; // Change to dark mode link color
        });
    }
    isDarkMode = !isDarkMode; // Toggle the mode
});
