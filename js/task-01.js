const categoriesListEl = document.querySelectorAll("ul#categories .item");

const allItemCatigoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${allItemCatigoriesEl.length} категории.`);

categoriesListEl.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.querySelectorAll("li").length}
 `);
});
