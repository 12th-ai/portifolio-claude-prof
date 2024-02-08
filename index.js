function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}
const texts = ['hello my name is ntiranta j.cloude', 'i am website developer',' and website designer '];
let index = 0;
let letterIndex = 0;
let intervalId;

function typeWriter() {
const currentText = texts[index % texts.length]; // Cycle through the texts

intervalId = setInterval(() => {
if (letterIndex <= currentText.length) {
    document.getElementById("typing-text").textContent = currentText.substring(0, letterIndex);
    letterIndex++;
} else {
    clearInterval(intervalId);
    setTimeout(() => {
        letterIndex = 0;
        index++;
        typeWriter();
    }, 1000); // Delay before starting the next text
}
}, 100); // Adjust typing speed (milliseconds)
}

document.getElementById("typing-text").classList.add("typing-animation");
typeWriter(); // start typing animation


// Function to enable dark mode and update icon
function enableDarkMode() {
    const content = document.getElementById('content');
    content.classList.add('dark-mode');
    content.classList.remove('light-mode');

    // Set moon icon
    const icon = document.getElementById('darkModeIcon');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    // Set icon color to white
    icon.classList.add('text-white');
}

// Function to enable light mode and update icon
function enableLightMode() {
    const content = document.getElementById('content');
    content.classList.add('light-mode');
    content.classList.remove('dark-mode');

    // Set sun icon
    const icon = document.getElementById('darkModeIcon');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    // Set icon color to gray
    icon.classList.remove('text-white');
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', function() {
    const content = document.getElementById('content');
    // Check if dark mode is enabled
    if (content.classList.contains('dark-mode')) {
        enableLightMode(); // If dark mode is enabled, switch to light mode
    } else {
        enableDarkMode(); // If dark mode is disabled, switch to dark mode
    }
});
