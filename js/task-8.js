const divBoxes = document.querySelector('div#boxes');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const inputNumber = document.querySelector('[type="number"]');

let widthDiv = 30;
let heightDiv = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    this.appendChild(document.createElement('div')).style = `
        width: ${widthDiv}px;
        height: ${heightDiv}px; background-color:
        rgb(${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100,
    )}%, ${Math.floor(Math.random() * 100)}%);
        margin-left: auto;
        margin-right: auto;`;
    widthDiv += 10;
    heightDiv += 10;
  }
}

function destroyBoxes() {
  this.innerHTML = '';
}

btnRender.addEventListener('click', () => {
  createBoxes.call(divBoxes, inputNumber.valueAsNumber);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call(divBoxes);
  widthDiv = 30;
  heightDiv = 30;
});
