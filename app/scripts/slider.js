import Swiper from "swiper/bundle"

const slider = document.getElementById("latest-stories");
const cursor = document.getElementById("custom-cursor");
const heading = document.getElementById("stories-heading");


// Custom cursor code
function customCursor(event){
    cursor.style.display = "block";
    cursor.style.top = event.clientY + "px";
    cursor.style.left = event.clientX + "px";
}
  
slider.addEventListener('pointermove', customCursor);


// Latest Stories Heading Animation
slider.addEventListener('mouseleave', function() {
    cursor.style.display = "none";
    heading.classList.remove("shake-and-glow-sm");
});

slider.addEventListener("mouseenter", function() {
    window.addEventListener("mousedown", function() {
        heading.classList.add("shake-and-glow-sm");
    });
    window.addEventListener("mouseup", function() {
        heading.classList.remove("shake-and-glow-sm");
    });
});


// Swiper Init
const swiper = new Swiper("#latest-stories", {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true
});