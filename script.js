// Not much to note here, all looks good!
// For improvements purposes, you could switch from alerting (its very intrusive function, mostly used for debugging purposes)
// to changing your html from the script. Like adding a text somewhere, or changing the color of the background.
// You can also disable the + button completely, when the counter reaches the top limit
let counter = 0;
const topLimit = 5;

// Great job caching your DOM elements
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');

increaseBtn.addEventListener('click', function () {
  if (result.innerHTML >= topLimit) {
    alert(`You have reached the limit - ${topLimit}!`);
  } else {
    counter++;
    result.innerHTML = counter;
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
