			//* display photo on click in portfolio // 

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
  var images = [
  "/img/bw/018fpc1sg4a-01.jpg", "/img/bw/019fpc2sg4a-03.jpg", "/img/bw/019fpc2sg4a-09.jpg", "/img/bw/220130_01.jpg",
  "/img/bw/220314_01.jpg", "/img/bw/220314_02.jpg", "/img/bw/220810_01.jpg", "/img/bw/220816_01.jpg",
  "/img/bw/210107_01.jpg", "/img/bw/009apx1z11-00.jpg",
  "/img/color/220131_01.jpg", "/img/color/220313_01.jpg", "/img/color/220912_01.jpg", "/img/color/220912_02.jpg",
  "/img/color/221019_01.jpg", "/img/color/221114_02.jpg", "/img/color/221031_01.jpg", "/img/color/210604_01.jpg", "/img/color/210201_01.jpg",
  ];

  // Generate a random index within the range of the images array
  var randomIndex = Math.floor(Math.random() * images.length);

  // Construct the image source URL
  var randomImageSource = images[randomIndex];

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



// JavaScript - Update the active thumbnail when the main image changes
function changeMainImage(thumbnail) {
    // Remove the "active-thumbnail" class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb) => thumb.classList.remove('active-thumbnail'));

    // Add the "active-thumbnail" class to the clicked thumbnail
    thumbnail.classList.add('active-thumbnail');

    // Get the src of the clicked thumbnail
    const thumbnailSrc = thumbnail.src;

    // Replace "_thumb" with an empty string to get the main image source
    const mainImageSrc = thumbnailSrc.replace('thumb', '');

    // Get the main image element
    const mainImage = document.getElementById('mainImage');

    // Update the source of the main image
    mainImage.src = mainImageSrc;
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

// Function to handle language button click
function handleLanguageButtonClick() {
    var language = $(this).data("language");
    changeLanguage(language);

    // Remove the active class from all language buttons
    $(".lang-button").removeClass("active");

    // Add the active class to the clicked button
    $(this).addClass("active");
}

// Document ready event
$(document).ready(function() {
    // Set the initial language to English
    changeLanguage("en");

    // Add click event listener to language buttons using event delegation
    $(document).on("click", ".lang-button", handleLanguageButtonClick);
});


//* IMAGE FILTER *//


        $(document).ready(function() {
            filterImages('monochrome');
        });

        function filterImages(category) {
            $('.gallery .gallery-column').each(function() {
                var columnCategory = $(this).data('category');
                if (columnCategory === category) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
        }
		
		


// TOGGLE MENU //

        function toggleMenu() {
  var x = document.getElementById("toggleMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






