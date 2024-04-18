import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const gameDiv = document.querySelector(".game");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("data-name", card.name);
    cardDiv.innerHTML = `<img src=${card.image}>`;
    cardDiv.addEventListener("click", flipCard);
    gameDiv.appendChild(cardDiv);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  nextTurn();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
    nextTurn();
  }, 1500);
}

function nextTurn() {
  lockBoard = false;
  [firstCard, secondCard] = [null, null];
}

function restart() {
  nextTurn();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gameDiv.innerHTML = "";
  generateCards();
}
