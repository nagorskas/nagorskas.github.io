			//* display photo on click in gallery // 

function showImage(imageUrl) {
  var popupImage = document.getElementById("popupImage");
  popupImage.src = imageUrl;
  document.getElementById("imagePopup").style.display = "block";
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}

			//* random image display, index pages // 

document.addEventListener("DOMContentLoaded", function() {
  // Get a reference to the image element
  var randomImageElement = document.getElementById("randomImage");

  // Array of image filenames
  var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"];

  // Generate a random index within the range of the images array
  var randomIndex = Math.floor(Math.random() * images.length);

  // Construct the image source URL
  var randomImageSource = "img/" + images[randomIndex];

  // Set the source attribute of the image element
  randomImageElement.src = randomImageSource;
});


			//* GALLERY scrollable // 

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    mainImage.setAttribute('src', imagePath);
  });
});


// JavaScript code

// Wrap the code inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Get all thumbnail images
  const thumbnails = document.querySelectorAll('.thumbnail');

  // Add click event listener to each thumbnail image
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Get the source of the clicked thumbnail image
      const thumbnailSrc = this.src;

      // Get the main image element
      const mainImage = document.getElementById('mainImage');

      // Update the source of the main image
      mainImage.src = thumbnailSrc;
    });
  });
});

function changeMainImage(imagePath) {
  var mainImage = document.getElementById('mainImage');
  mainImage.src = imagePath;
}


//* DROPDOWN MENU //

document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.getElementsByClassName("dropdown");
  
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownMenu = this.querySelector(".dropdown-menu");
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  }
});


// * INCLUDES //


