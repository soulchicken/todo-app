const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bodyElement = document.querySelector('body');

bodyElement.style.backgroundImage = `url("img/${chosenImage}")`;