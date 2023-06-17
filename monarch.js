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


function showModal() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/FIRST_HEADLINE.jpg";
  img.alt = "Monarch Dispatch Online";
  img.style.maxWidth = "150%";
  img.style.maxHeight = "150%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalB() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/mainStreet_Final.jpg";
  img.alt = "Main Street";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}
function showModalC() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914CCCC.jpg";
  img.alt = "Annual Awards Ceremony";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalD() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914DDDD.jpg";
  img.alt = "ScratchCooked Meals";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalE() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914EEEE.jpg";
  img.alt = "New Clinic Opening";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalF() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914FFFF.jpg";
  img.alt = "Soviet, Afghan Arms Deal";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalG() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914GGGG.jpg";
  img.alt = "Increasing Taxes";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalO() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914OOOO.jpg";
  img.alt = "Rhythm Avenue";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalM1() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/Greater_Monarch_East.png";
  img.alt = "Greater Monarch Map East";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalM2() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/Greater_Monarch_West.png";
  img.alt = "Greater Monarch Map West";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalM3() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/MONARCH_CTR_Map.jpg";
  img.alt = "Monarch City Central";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalM4() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/MONARCH_NTH.jpg";
  img.alt = "Monarch City North";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalS1() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914KKKK.jpg";
  img.alt = "Gollen Football";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalS2() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914LLLL.jpg";
  img.alt = "Monarch High Track";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalS3() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/0914JJJJ.jpg";
  img.alt = "Regonial Sports News";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}

function showModalS4() {
  // Create a new div element for the modal
  var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  // Create a new image element inside the modal
  var img = document.createElement("img");
  img.src = "images/914IIII.jpg";
  img.alt = "National Sports News";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";

  // Add the image to the modal
  modal.appendChild(img);

  // Add the modal to the page
  document.body.appendChild(modal);

  // Add a click event listener to close the modal when clicked
  modal.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
}