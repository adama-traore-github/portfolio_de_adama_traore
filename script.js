document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Effet machine à écrire
    // MODIFIÉ : Texte mis à jour
    const typewriterText = "Full-Stack & Blockchain";
    const typewriterElement = document.querySelector('.typewriter');
    let i = 0;

    function type() {
        if (i < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            // Optionnel : redémarrer l'animation
            setTimeout(() => {
                typewriterElement.textContent = '';
                i = 0;
                type();
            }, 5000);
        }
    }
    if (typewriterElement) {
        type();
    }

    // Animation d'apparition au défilement
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});