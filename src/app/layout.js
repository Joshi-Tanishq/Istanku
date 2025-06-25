import "./globals.css";

export const metadata = {
  title: "Istanku - Professional Recruitment Solutions",
  description: "Leading third-party recruiting firm connecting top talent with exceptional opportunities. Expert recruitment services for businesses and professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            let currentSlide = 0;
            let autoSlideInterval;
            let isInitialized = false;
            
            function showSlide(n) {
              const slides = document.querySelectorAll('.testimonial-slide');
              const dots = document.querySelectorAll('.dot');
              
              if (!slides.length) return;
              
              if (n >= slides.length) currentSlide = 0;
              if (n < 0) currentSlide = slides.length - 1;
              
              slides.forEach((slide, index) => {
                slide.classList.remove('active');
                slide.style.display = 'none';
              });
              
              dots.forEach(dot => dot.classList.remove('active'));
              
              if (slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
                slides[currentSlide].style.display = 'block';
              }
              
              if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
              }
            }
            
            function nextSlide() {
              currentSlide++;
              showSlide(currentSlide);
              resetAutoSlide();
            }
            
            function previousSlide() {
              currentSlide--;
              showSlide(currentSlide);
              resetAutoSlide();
            }
            
            function currentSlideIndex(n) {
              currentSlide = n - 1;
              showSlide(currentSlide);
              resetAutoSlide();
            }
            
            function autoSlide() {
              currentSlide++;
              showSlide(currentSlide);
            }
            
            function startAutoSlide() {
              if (autoSlideInterval) clearInterval(autoSlideInterval);
              autoSlideInterval = setInterval(autoSlide, 5000);
            }
            
            function stopAutoSlide() {
              if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
              }
            }
            
            function resetAutoSlide() {
              stopAutoSlide();
              startAutoSlide();
            }
            
            function initializeSlider() {
              if (isInitialized) return;
              
              const slides = document.querySelectorAll('.testimonial-slide');
              if (!slides.length) return;
              
              // Initialize first slide
              showSlide(0);
              
              // Set up click events for navigation
              const nextBtn = document.querySelector('.slider-next');
              const prevBtn = document.querySelector('.slider-prev');
              const dots = document.querySelectorAll('.dot');
              
              if (nextBtn) {
                nextBtn.addEventListener('click', nextSlide);
                console.log('Next button event attached');
              }
              if (prevBtn) {
                prevBtn.addEventListener('click', previousSlide);
                console.log('Previous button event attached');
              }
              
              dots.forEach((dot, index) => {
                dot.addEventListener('click', () => currentSlideIndex(index + 1));
              });
              
              // Start auto-play
              startAutoSlide();
              
              // Pause auto-play on hover
              const slider = document.querySelector('.testimonials-slider');
              if (slider) {
                slider.addEventListener('mouseenter', stopAutoSlide);
                slider.addEventListener('mouseleave', startAutoSlide);
              }
              
              isInitialized = true;
              console.log('Slider initialized with', slides.length, 'slides');
            }
            
            // Multiple initialization attempts for Next.js
            document.addEventListener('DOMContentLoaded', initializeSlider);
            window.addEventListener('load', initializeSlider);
            
            // Fallback initialization after a delay
            setTimeout(initializeSlider, 1000);
            setTimeout(initializeSlider, 3000);
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
