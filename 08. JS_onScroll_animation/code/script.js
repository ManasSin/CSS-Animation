const itemsToReveal = document.querySelectorAll('[data-reveal="left"]');

console.log(itemsToReveal);

const scrollAnimation = () => {
  for (const items of itemsToReveal) {
    let isEelementOnScreen =
      items.getBoundingClientRect().top < window.innerHeight;

    isEelementOnScreen
      ? items.classList.add("revealed")
      : items.classList.remove("revealed");
  }
};

window.addEventListener("scroll", scrollAnimation);
window.addEventListener("load", scrollAnimation);
