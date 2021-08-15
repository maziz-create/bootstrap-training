// navbarlink selection 

const goToHomepageFromTitle = document.querySelector('.goToHomepageFromTitle');
const goToHomepageFromNavbar = document.querySelector('.goToHomepageFromNavbar');
const goToProducts = document.querySelector('.goToProducts');
const goToAboutUs = document.querySelector('.goToAboutUs');

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

goToAboutUs.addEventListener('click', function() {
    document.getElementById('homepage').style.display = "none";
    document.getElementById('products').style.display = "none";
    document.getElementById('aboutus').style.display = "block";
})