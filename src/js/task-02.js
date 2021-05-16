const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const result = ingredients.map(item => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = item;
  return ingredientsEl;
});

const listOfIngredientsEl = document.querySelector('ul#ingredients');

listOfIngredientsEl.append(...result);
