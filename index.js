// import { products } from "./products.js";

let carousels = document.getElementsByClassName("caro");
let next = document.getElementsByClassName("arrow");
let prev = document.getElementsByClassName("arrow2");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let products = res.products
for (let i = 0; i < carousels.length; i++) {
  products.forEach((product) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
        <i class="fa-regular fa-heart"></i>
        <div class="img">
        <img src="${product.images[0]}" alt="">
        </div>
        <p>$${product.price}</p>
        <p>${product.description}</p>
        <p>${product.title}</p>
        <button class="walBtn">Options</button>
        `;
    carousels[i].appendChild(item);
  });
}
  });


function slideNext(x, y) {
  let currentMargin = +carousels[x].style.marginLeft.split("p")[0];
  if (currentMargin <= y) {
    next[x].style.display = "none";
  }
  carousels[x].style.marginLeft = `${currentMargin - 600}px`;
  prev[x].style.display = "block";
}

function slidePrev(x, y) {
  let currentMargin = +carousels[x].style.marginLeft.split("p")[0];
  if (currentMargin >= y) {
    next[x].style.display = "block";
  }
  carousels[x].style.marginLeft = `${currentMargin + 600}px`;
  if (carousels[x].style.marginLeft === "0px") {
    prev[x].style.display = "none";
  }
}

next[0].onclick = () => {
  slideNext(0, -5000);
};

prev[0].onclick = () => {
  slidePrev(0, -5500);
};

next[1].onclick = () => {
  slideNext(1, -6000);
};

prev[1].onclick = () => {
  slidePrev(1, -6000);
};

// video play
let video = document.getElementById("vid");
let play = document.getElementsByClassName("fa-circle-play")[0];
let mute = document.getElementsByClassName("fa-volume-low")[0];
play.onclick = () => {
  if (video.paused) {
    video.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else {
    video.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
};

mute.onclick = () => {
  if (!video.muted) {
    video.muted = true;
    mute.classList.remove("fa-volume-low");
    mute.classList.add("fa-volume-xmark");
  } else {
    video.muted = false;
    mute.classList.remove("fa-volume-xmark");
    mute.classList.add("fa-volume-low");
  }
};


// Haloween page 

