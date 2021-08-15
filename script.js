// navbarlink selection 

const goToHomepage = document.querySelector('.goToHomepage');
const goToProducts = document.querySelector('.goToProducts');
const goToAboutUs = document.querySelector('.goToAboutUs');

// click actions for navbarlinks

goToHomepage.addEventListener('click', function() {
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