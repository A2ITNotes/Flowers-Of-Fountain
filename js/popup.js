// Function to display the pop-up with the clicked image
function showPopup(imgSrc) {
  // Show the pop-up container
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "block";
  
  // Set the image source for the pop-up
  const popupImage = document.getElementById("popup-image");
  popupImage.src = imgSrc;
}

// Function to hide the pop-up when clicked anywhere outside of it
function hidePopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
}
