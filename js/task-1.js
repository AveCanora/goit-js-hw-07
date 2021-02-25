const liRef = document.querySelectorAll('li.item');
console.log(`В списке ${liRef.length} категории.`);

for (const item of liRef) {
  console.log(`Категория: ${item.firstElementChild.innerText}`);
  console.log(
    `Количество элементов: ${item.firstElementChild.nextElementSibling.children.length}`,
  );
}
