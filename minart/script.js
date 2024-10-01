document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    console.log('GSAP plugins registered');

    // Dynamic gallery population with your provided images
    const galleryData = [
        { src: './images/resim1.jpg', title: 'Artwork 1', description: 'Description of Artwork 1' },
        { src: './images/resim2.jpg', title: 'Artwork 2', description: 'Description of Artwork 2' },
        { src: './images/resim 3.jpg', title: 'Artwork 3', description: 'Description of Artwork 3' },
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

    // Other existing JavaScript (animations, particles, etc.) continues here...
});
