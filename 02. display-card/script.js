const imageCards = [
  {
    imgesrc: "./images/dreamy-desk.jpg",
    alt: "Dreamy desk",
  },
  {
    imgesrc: "./images/imaginary-women.jpg",
    alt: "Imaginary women",
  },
  {
    imgesrc: "./images/cloudy-weather.jpg",
    alt: "cloudy weather",
  },
  {
    imgesrc: "./images/cool-boy.jpg",
    alt: "cool boy",
  },
  {
    imgesrc: "./images/lonly-guy.jpg",
    alt: "lonly boy",
  },
  {
    imgesrc: "./images/mesmering-view.jpg",
    alt: "mesmering view",
  },
];

const mainImage = document.querySelector(".main-img");

let cardContainer = document.querySelector(".below-card");

imageCards.forEach((element) => {
  let smallCards = document.createElement("div");
  smallCards = `
    <div class=inner-cards >
        <img
        src="${element.imgesrc}"
        alt="${element.alt}"
        class="small-images"
        />
    </div>
    `;
  cardContainer.innerHTML += smallCards;
});

const cards = document.querySelectorAll(".small-images");
console.log(cards);

cards.forEach((element) => {
  element.addEventListener("click", function () {
    mainImage.attributes.src.nodeValue = `${element.attributes.src.nodeValue}`; // image src transfer
    mainImage.classList.remove("hidden"); // hidden removed 
    document.querySelector("#heading-text").classList.add("hidden"); // removing text from 
  });
});
