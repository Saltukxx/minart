document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    console.log('GSAP plugins registered');

    // Enhanced header animation on scroll
    gsap.from('header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: 'header',
            start: "top top",
            scrub: true,
        }
    });

    // Dynamic gallery population
    const galleryData = [
        { src: './images/resim1.jpg', title: 'Artwork 1', description: 'Description of Artwork 1' },
        { src: './images/resim2.jpg', title: 'Artwork 2', description: 'Description of Artwork 2' },
        { src: './images/resim3.jpg', title: 'Artwork 3', description: 'Description of Artwork 3' },
        { src: './images/resim4.jpg', title: 'Artwork 4', description: 'Description of Artwork 4' },
        { src: './images/resim5.jpg', title: 'Artwork 5', description: 'Description of Artwork 5' },
    ];

    const gallery = document.querySelector('.gallery');
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        gallery.appendChild(galleryItem);
        console.log(`Added gallery item ${index + 1}`);
    });

    // Parallax effect for hero section
    gsap.to('.hero-content', {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top top",
            scrub: true,
        }
    });

    // Gallery items scroll animation
    gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            }
        });
    });

    // Contact form button click animation
    document.querySelectorAll('.contact-form button').forEach(button => {
        button.addEventListener('click', () => {
            gsap.fromTo(button, 
                { scale: 1 }, 
                { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
            );
        });
    });

    // Enhanced particle animation
    function createMoreParticles() {
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = gsap.utils.random(3, 10);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const startX = gsap.utils.random(0, window.innerWidth);
            const startY = gsap.utils.random(0, window.innerHeight);
            
            gsap.set(particle, { x: startX, y: startY });
            document.body.appendChild(particle);
            
            gsap.to(particle, {
                x: `+=${gsap.utils.random(-100, 100)}`,
                y: `+=${gsap.utils.random(-100, 100)}`,
                duration: gsap.utils.random(5, 10),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }

    createMoreParticles();
});
