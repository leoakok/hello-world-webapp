// Get DOM elements
const greeting = document.getElementById('greeting');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeTextBtn = document.getElementById('changeTextBtn');
const clickCountElement = document.getElementById('clickCount');
const body = document.body;

// Counter for button clicks
let clickCount = 0;

// Array of color gradients
const colorGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
];

// Array of greetings
const greetings = [
    'Hello, World!',
    'Hej, Världen!',  // Swedish
    'Bonjour, Monde!', // French
    '¡Hola, Mundo!',   // Spanish
    'Ciao, Mondo!',    // Italian
    'Hallo, Welt!',    // German
    'こんにちは、世界！', // Japanese
    'Привет, Мир!'     // Russian
];

let currentGradientIndex = 0;
let currentGreetingIndex = 0;

// Change background color
changeColorBtn.addEventListener('click', function() {
    currentGradientIndex = (currentGradientIndex + 1) % colorGradients.length;
    body.style.background = colorGradients[currentGradientIndex];
    
    // Update click count
    clickCount++;
    clickCountElement.textContent = clickCount;
    
    // Add animation
    greeting.style.transform = 'scale(1.1)';
    setTimeout(() => {
        greeting.style.transform = 'scale(1)';
    }, 200);
});

// Change greeting text
changeTextBtn.addEventListener('click', function() {
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    greeting.textContent = greetings[currentGreetingIndex];
    
    // Update click count
    clickCount++;
    clickCountElement.textContent = clickCount;
    
    // Add animation
    greeting.style.transform = 'rotate(5deg)';
    setTimeout(() => {
        greeting.style.transform = 'rotate(0deg)';
    }, 200);
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        changeColorBtn.click();
    } else if (event.key === 'g' || event.key === 'G') {
        changeTextBtn.click();
    }
});

console.log('🎉 Hello World Web App loaded successfully!');
console.log('💡 Tip: Press "C" to change color, "G" to change greeting');