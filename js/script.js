// Display the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    let year = document.getElementById("year");
    if (year) {
        year.innerHTML = new Date().getFullYear();
    }
});

// Simple basket functions
let basket = [];

function addToCart(productName) {
    basket.push(productName);
    showBasket();
}

function showBasket() {
    let basketItems = document.getElementById("basket-items");
    if (basketItems) {
        if (basket.length === 0) {
            basketItems.innerHTML = "No products added yet.";
        } else {
            basketItems.innerHTML = basket.join(", ");
        }
    }
}

function clearBasket() {
    basket = [];
    showBasket();
}

// Check that the contact form is filled in
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            let result = document.getElementById("form-message");

            if (name === "" || email === "" || message === "") {
                result.innerHTML = "Please fill in all the fields.";
                result.style.color = "red";
            } else {
                result.innerHTML = "Thank you! Your message has been checked.";
                result.style.color = "green";
                form.reset();
            }
        });
    }
});
