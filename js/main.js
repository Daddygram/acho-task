// Product image change
function changeMainPicture(pictureSrc) {
    document.getElementById("main-picture").src = pictureSrc;
}

// Like Button
function  addToFavorites() {
    document.getElementById('likeBtn').classList.toggle("fill-red-700")
}

// dropdown menu for colors
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('color-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const colorSvg = document.getElementById('colorSvg');

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    const colorButtons = document.querySelectorAll('.dropdown-menu button');
    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            dropdownButton.innerText = color;
            dropdownMenu.classList.remove('active');
            colorSvg.style.backgroundColor = color.toLowerCase();
        });
    });
});

// Increment and Decrement

let counter = 1;

function increment() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

function decrement() {
    if (counter > 1) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
}