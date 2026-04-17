// This function allows me to toggle on and off the hamburger navigations menu
function hamburger() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "black";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}






// Global Variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h3"); // Note: Changed to h3 to match the FAQ HTML provided earlier

// Hamburger menu function

function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#ff69b4"; // Changed to a pinkish color to match a beauty theme
    }
}

// Function to display the first answer (Cancellation Policy)
function ans1() {
    heading.style.display = "block";
    answer.textContent = "We require at least 24 hours notice for cancellations. Appointments cancelled with less than 24 hours notice may be subject to a cancellation fee.";
}

// Function to display the second answer (Gift Certificates)
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Yes! We offer gift certificates in any denomination. They can be purchased in-store or online and are perfect for any occasion.";
}

// Function to display the third answer (Sensitive Skin)
function ans3() {
    heading.style.display = "block";
    answer.textContent = "Absolutely. We use high-quality, hypoallergenic products. Please inform your aesthetician of any specific allergies before your treatment starts.";
}

// Function to display the fourth answer (Arrival Time)
function ans4() {
    heading.style.display = "block";
    answer.textContent = "We recommend arriving 10-15 minutes early to check in, enjoy a refreshment, and fill out any necessary consultation forms.";
}