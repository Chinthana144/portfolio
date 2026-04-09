function changeImage(element) {
    const gallery = element.closest(".gallery");

    const mainImage = gallery.querySelector(".main-image img");
    const caption = gallery.querySelector(".main-image p");

    // Fade out
    mainImage.classList.add("fade-out");

    setTimeout(() => {
        // Change image + caption after fade out
        mainImage.src = element.src;
        caption.textContent = element.getAttribute("data-caption");

        // Fade back in
        mainImage.classList.remove("fade-out");
    }, 200); // match CSS timing

    // Update active thumbnail
    gallery.querySelectorAll(".thumbnails img").forEach(img => {
        img.classList.remove("active");
    });

    element.classList.add("active");
}

// Initialize all galleries
window.addEventListener("load", () => {
    document.querySelectorAll(".gallery").forEach(gallery => {
        const firstThumb = gallery.querySelector(".thumbnails img");
        if (firstThumb) firstThumb.classList.add("active");
    });
});