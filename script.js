document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const slideCounter = document.getElementById('slide-counter');


    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the target slide
        slides[index].classList.add('active');
        
        // Update slide counter
        slideCounter.textContent = `${index + 1} / ${totalSlides}`;



        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalSlides - 1;

        currentSlide = index;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initial load
    showSlide(0);
});
