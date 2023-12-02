window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }
   
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          document.getElementById('navbarResponsive').classList.remove('show');
        });
      });
      

    // Smooth scrolling using jQuery
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            const target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, 'easeInOutExpo');
                return false;
            }
        }
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach(section => {
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        observer.observe(section);
    });

    // Typewriter effect for introduction
    const introText = "I am a person fueled by passion and driven by purpose. Throughout my life, I have always been eager to learn, grow, and take on new challenges. Collaboration is at the heart of my work philosophy. I strongly believe in the power of teamwork and the diverse perspectives it brings.";

    let charIndex = 0;
    const typeWriter = setInterval(() => {
        document.getElementById('introText').innerHTML += introText[charIndex];
        charIndex++;
        if (charIndex === introText.length) {
            clearInterval(typeWriter);
        }
    }, 50);
    
});
