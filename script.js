// navbarlink selection 

const goToHomepageFromTitle = document.querySelector('.goToHomepageFromTitle');
const goToHomepageFromNavbar = document.querySelector('.goToHomepageFromNavbar');

const goToProducts = document.querySelector('.goToProducts');

const goToAboutUsFromNavbar = document.querySelector('.goToAboutUsFromNavbar');
const goToAboutUsFromButton = document.querySelector('.goToAboutUsFromButton');

// click actions for navbarlinks

goToHomepageFromTitle.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "block";
    document.getElementById('products').style.display = "none";
    document.getElementById('aboutus').style.display = "none";
})

goToHomepageFromNavbar.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "block";
    document.getElementById('products').style.display = "none";
    document.getElementById('aboutus').style.display = "none";
})

goToProducts.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "none";
    document.getElementById('products').style.display = "block";
    document.getElementById('aboutus').style.display = "none";
})

goToAboutUsFromNavbar.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "none";
    document.getElementById('products').style.display = "none";
    document.getElementById('aboutus').style.display = "block";
})

// click action for button in homepage

goToAboutUsFromButton.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "none";
    document.getElementById('products').style.display = "none";
    document.getElementById('aboutus').style.display = "block";
})