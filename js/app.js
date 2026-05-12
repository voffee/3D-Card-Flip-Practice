
const card = document.querySelector(".card");

card.addEventListener("click", flipHandler);

function flipHandler() {
    card.classList.toggle("isFlipped");
}

console.log(card);