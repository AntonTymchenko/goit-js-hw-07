const allItemCatigoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${allItemCatigoriesEl.length} категории.`);

const categoriesListEl = document.querySelector('ul#categories');

const firstItemOfCategoriesEl = categoriesListEl.firstElementChild;
const titleOfFirstItemEl = firstItemOfCategoriesEl.firstElementChild;
const listOfFirstItemEl = firstItemOfCategoriesEl.querySelectorAll('li');

console.log(`Категория: ${titleOfFirstItemEl.textContent}
Количество элементов: ${listOfFirstItemEl.length}
`);

const secondItemOfCategoriesEl = categoriesListEl.children[1];
const titleOfSecondItemEl = secondItemOfCategoriesEl.firstElementChild;
const listOfSecondItemEl = secondItemOfCategoriesEl.querySelectorAll('li');

console.log(`Категория: ${titleOfSecondItemEl.textContent}
Количество элементов: ${listOfSecondItemEl.length}
`);

const thirdItemOfCategoriesEl = categoriesListEl.lastElementChild;
const titleOfThirdItemEl = thirdItemOfCategoriesEl.firstElementChild;
const listOfThirdItemEl = thirdItemOfCategoriesEl.querySelectorAll('li');

console.log(`Категория: ${titleOfThirdItemEl.textContent}
Количество элементов: ${listOfThirdItemEl.length}
`);
