const inputText = document.querySelector('[id="name-input"]');
const spanOutput = document.querySelector('[id="name-output"]');

inputText.addEventListener('input', () => {
  spanOutput.textContent = inputText.value;
  if (inputText.value === '') {
    spanOutput.textContent = 'незнакомец';
  }
});
