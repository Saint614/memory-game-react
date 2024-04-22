//Charity

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!firstCard) {
      firstCard = this;
      return;
    }
    secondCard = this;
    score++;
    document.querySelector('.score').textContent = score
    lockBoard = true;
    checkForMatch();
  }