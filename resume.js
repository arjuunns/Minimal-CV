const button = document.querySelector('.button');
const body = document.querySelector('body');

let isDarkMode = false;

button.addEventListener('click', function(e) {
    if (isDarkMode) {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.style.borderColor = 'black';
        button.innerHTML = "Switch to Dark Mode";
        button.style.backgroundColor = 'black'
        button.style.color='white'
        
        } else {
            // Switch to dark mode
            body.style.backgroundColor = '#212121';
            body.style.color = 'white';
            body.style.borderColor = 'white';
            button.innerHTML = "Switch to Light Mode";
            button.style.backgroundColor = 'white'
            button.style.color='black'
    }
    isDarkMode = !isDarkMode; // Toggle the mode
});
