let counterValue = 0;

const buttonCounterInc = document.querySelector('[data-action="increment"]');
const buttonCounterDec = document.querySelector('[data-action="decrement"]');
const spanCounterDec = document.querySelector('[id="value"]');

buttonCounterInc.addEventListener('click', increment);
buttonCounterDec.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  spanCounterDec.innerText = counterValue;
}
function decrement() {
  counterValue -= 1;
  spanCounterDec.innerText = counterValue;
}
