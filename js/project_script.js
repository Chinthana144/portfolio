document.addEventListener('DOMContentLoaded', ()=>{
    const elements = document.getElementsByClassName('section');
    const screeWidth = screen.width;

    if(screeWidth >= 768)
    {
        for(const element of elements){
            element.style.display = "none";
            // console.log('running');
        }

        const cloudtik = document.getElementById('sec_cloudtik');
        cloudtik.style.display = "block";
        cloudtik.classList.add('active');
    }//responsive design
});

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
}//change image

function toggleSection(sectionID)
{
    const elements = document.getElementsByClassName('section');

    for(const element of elements){
        element.style.display = "none";
    }
    
    const section = document.getElementById(sectionID);

    section.style.display = "block";
    section.classList.add('active');
}