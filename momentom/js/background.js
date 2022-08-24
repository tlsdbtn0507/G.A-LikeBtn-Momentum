const body = document.querySelector("body");
console.log(body)

const images = [
    "fog.jpeg",
    "forest.jpeg",
    "mountains.jpeg"
];
const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);

