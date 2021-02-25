const inputText = document.querySelector('[id="validation-input"]');

inputText.addEventListener('blur', () => {
  if (
    inputText.value.length === Number(inputText.getAttribute('data-length'))
  ) {
    inputText.className = 'valid';
  } else {
    inputText.className = 'invalid';
  }
});
