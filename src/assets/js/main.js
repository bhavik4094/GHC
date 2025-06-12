window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeSection = document.getElementById('fadeSection');
    const showAfterScroll = 120; // Distance in pixels to show the section

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Show the fade section after a certain scroll distance
        if (scrollPosition > showAfterScroll) {
            fadeSection.classList.add('visible');
        } else {
            fadeSection.classList.remove('visible');
        }
    });
});




// console.log("API response:", response.data);
