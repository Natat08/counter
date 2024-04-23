let counter = 0;
const topLimit = 5;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');

increaseBtn.addEventListener('click', function () {
  counter++;
  result.innerHTML = counter;
  if (result.innerHTML >= topLimit) {
    alert(`You have reached the limit - ${topLimit}!`);
  }
});

decreaseBtn.addEventListener('click', function () {
  if (result.innerHTML > 0) {
    counter--;
  }
  result.innerHTML = counter;
});

resetBtn.addEventListener('click', function () {
  counter = 0;
  result.innerHTML = counter;
});
