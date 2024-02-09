function createCard() {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("o-box");
  return cardDiv;
}

function createCardDeck() {
  const cardDeckDiv = document.createElement("div");
  cardDeckDiv.classList.add("c-cards");

  for (let i = 0; i < 3; i++) {
    cardDeckDiv.append(createCard());
  }

  return cardDeckDiv;
}

let cardsDiv = document.querySelector(".c-cardsDiv");
let howMany = 3;

function renderCards() {
  if (!cardsDiv) {
    cardsDiv = document.createElement("div");
    cardsDiv.classList.add("c-cardsDiv");
    document.body.append(cardsDiv);
  }

  cardsDiv.innerHTML = "";

  for (let i = 0; i < howMany; i++) {
    cardsDiv.append(createCardDeck());
  }
}

function addCardCreator() {
  const cardCreator = document.createElement("div");
  cardCreator.classList.add("c-cardCreator");

  const cardCounter = document.createElement("div");

  // Remover qntd de cards
  const cardLower = document.createElement("button");
  cardLower.addEventListener("click", () => {
    howMany--;
    cardCounter.textContent = howMany;
    renderCards();
  });

  // Mostra quantas cards há
  cardCounter.textContent = howMany;

  cardLower.textContent = "-";

  cardCreator.append(cardLower);

  cardCreator.append(cardCounter);

  // Adiciona qntd de cards
  const cardUpper = document.createElement("button");
  cardUpper.addEventListener("click", () => {
    howMany++;
    cardCounter.textContent = howMany;
    renderCards();
  });

  cardUpper.textContent = "+";

  cardCreator.append(cardUpper);

  document.body.append(cardCreator);
}

renderCards();
addCardCreator();
