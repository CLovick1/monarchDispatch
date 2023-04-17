
/* KAWL AUDIO PLAYER */
const audio = document.getElementById('kawl-audio');
const button = document.getElementById('kawl-button');

button.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Define the banners array for the first banner container
var banners1 = [
  "images/banner01_thunderpeak.jpg",
  "images/banner02_rr.jpg",
  "images/banner03_pizza.jpg",
  "images/banner04_gg.jpg",
  "images/banner05_franny.jpg",
  "images/banner06_chubbs.jpg",
  "images/banner07_army.jpg",
  "images/banner08_golden.jpg",
  "images/banner09_vino.jpg",
  "images/banner10_corvinus.jpg",
  "images/banner11_rubys.jpg"
];

// Initialize the currentImageIndex variable to 0 for the first banner container
var currentImageIndex1 = 0;

// Get a reference to the first banner container element
var bannerContainer1 = document.querySelector(".banner-container17");

// Function to update the background image every 14 seconds for the first banner container
setInterval(function() {
  // Increment the current image index for the first banner container
  currentImageIndex1++;

  // If we've gone past the end of the array, wrap around to the beginning
  if (currentImageIndex1 >= banners1.length) {
    currentImageIndex1 = 0;
  }

  // Set the background image of the first banner container to the current image
  bannerContainer1.style.backgroundImage = "url(" + banners1[currentImageIndex1] + ")";
}, 14000);

// Define the banners array for the second banner container
var banners2 = [
  "images/banner11_rubys.jpg",
  "images/banner10_corvinus.jpg",
  "images/banner09_vino.jpg",
  "images/banner08_golden.jpg",
  "images/banner07_army.jpg",
  "images/banner06_chubbs.jpg",
  "images/banner05_franny.jpg",
  "images/banner04_gg.jpg",
  "images/banner03_pizza.jpg",
  "images/banner02_rr.jpg",
  "images/banner01_thunderpeak.jpg"
];

// Initialize the currentImageIndex variable to 0 for the second banner container
var currentImageIndex2 = 0;

// Get a reference to the second banner container element
var bannerContainer2 = document.querySelector(".banner-container21");

// Function to update the background image every 15 seconds for the second banner container
setInterval(function() {
  // Increment the current image index for the second banner container
  currentImageIndex2++;

  // If we've gone past the end of the array, wrap around to the beginning
  if (currentImageIndex2 >= banners2.length) {
    currentImageIndex2 = 0;
  }

  // Set the background image of the second banner container to the current image
  bannerContainer2.style.backgroundImage = "url(" + banners2[currentImageIndex2] + ")";
}, 16000);
