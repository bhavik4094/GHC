function updateComponentHeight() {
    const header = document.querySelector(".main-header");
    const headerHeight = header.offsetHeight; // Get dynamic height
    document.documentElement.style.setProperty("--headerHeight", `${headerHeight}px`);
}

// Update height on page load & scroll
window.addEventListener("load", updateComponentHeight);
window.addEventListener("scroll", updateComponentHeight);