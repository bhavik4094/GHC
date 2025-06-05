// function debounce(func, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(func, delay);
//     };
// }

// function updateComponentHeight() {
//     const header = document.querySelector(".main-header");
//     const headerHeight = header.offsetHeight; // Get dynamic height
//     document.documentElement.style.setProperty("--headerHeight", `${headerHeight}px`);
// }

// // Apply debounce to prevent rapid height recalculations
// window.addEventListener("load", updateComponentHeight);
// window.addEventListener("scroll", debounce(updateComponentHeight, 100)); // Adjust delay as needed



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