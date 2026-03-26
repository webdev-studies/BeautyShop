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
