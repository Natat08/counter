let counter = 0;

const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');

increaseBtn.addEventListener('click', function () {
  counter += 1;
  result.innerHTML = counter;
});

decreaseBtn.addEventListener('click', function () {
  counter -= 1;
  result.innerHTML = counter;
});

resetBtn.addEventListener('click', function () {
  counter = 0;
  result.innerHTML = counter;
});
