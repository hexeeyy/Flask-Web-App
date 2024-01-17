$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scroll');
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    });
});

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Variable to store the last scroll position
let lastScroll = 0;

// Function to handle the scroll event
function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.classList.add('navbar-shrink');
    } else {
        // Scrolling up
        navbar.classList.remove('navbar-shrink');
    }

    lastScroll = currentScroll;
}

// Event listener for the scroll event
window.addEventListener('scroll', handleScroll);

/* YOU DONT NEED THESE, these are just for the popup you see */
function closeTreactPopup(){ 
    document.querySelector(".treact-popup").classList.add("hidden");
  }
  function openTreactPopup(){ 
    document.querySelector(".treact-popup").classList.remove("hidden");
  }
  document.querySelector(".close-treact-popup").addEventListener("click", closeTreactPopup);
  setTimeout(openTreactPopup, 3000)