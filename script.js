let counter = 0;
const topLimit = 5;
const bottomLimit = 0;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');
const alertMessageEl = document.querySelector('.alert-message');

const messageAboutTopLimit = `You have reached the top limit - ${topLimit}!`;
const messageAboutBottomLimit = `You have reached the bottom limit - ${bottomLimit}!`;

increaseBtn.addEventListener('click', function () {
  if (result.innerHTML < topLimit) {
    counter++;
    result.innerHTML = counter;
    if (result.innerHTML > bottomLimit) {
      decreaseBtn.disabled = false;
      alertMessageEl.style.visibility = 'hidden';
    }
  } else {
    alertMessageEl.innerHTML = messageAboutTopLimit;
    alertMessageEl.style.visibility = 'visible';
    increaseBtn.disabled = true;
  }
});

decreaseBtn.addEventListener('click', function () {
  if (result.innerHTML > bottomLimit) {
    counter--;
    result.innerHTML = counter;
    if (result.innerHTML < topLimit) {
      increaseBtn.disabled = false;
      alertMessageEl.style.visibility = 'hidden';
    }
  } else {
    alertMessageEl.innerHTML = messageAboutBottomLimit;
    alertMessageEl.style.visibility = 'visible';
    decreaseBtn.disabled = true;
  }
});

resetBtn.addEventListener('click', function () {
  counter = 0;
  result.innerHTML = counter;
});
