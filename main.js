document.addEventListener('DOMContentLoaded', () => {

    const rotatingTextElement = document.getElementById('rotating_text');

    const textOptions = [
        "Zendesk Specialist",
        "Gaming Connoseiur"
    ];

    let currentIndex = 0;

    function rotateText() {
        
        rotatingTextElement.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textOptions.length;
            rotatingTextElement.textContent = textOptions[currentIndex];
            rotatingTextElement.style.opacity = 1;
        }, 500); 

    }
    
    rotatingTextElement.textContent = textOptions[currentIndex];

    setInterval(rotateText, 3000);

    

});