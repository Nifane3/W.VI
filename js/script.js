const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;

function startSlider() {
    setInterval(() => {
        currentIndex++;
        
        if (currentIndex === slides.length) {
            currentIndex = 0;
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
            }, 20);
        } else {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, 3000);
}
startSlider();