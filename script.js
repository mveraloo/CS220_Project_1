
let slideIndex = 1;
// Call the showSlides function to display the first slide
showSlides(slideIndex);

// Function to play the previous or next slide
function otherSlides(n) {
    showSlides(slideIndex += n);
}

function specificSlide(n) {
    showSlides(slideIndex = n);
}

//Function to display the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

// Check if the slide index is out of bounds and wrap around.
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

// Define an array
    const images = [
      'images/product2-1.jpg',
      'images/product2-2.jpeg',
      'images/product2-3.jpeg'
    ];
// Update the image sources
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].querySelector('img').src = images[i];
    }
    
    slides[slideIndex - 1].style.display = "block";
}