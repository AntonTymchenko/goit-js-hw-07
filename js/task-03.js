const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const arrayOfItem = images
  .map((item) => {
    return `<li  class='gallery-item'><image src='${item.url}' alt='${item.alt}'
   width = 320 height = 200></li>`;
  })
  .join("");

const gallaryListEl = document.querySelector("ul#gallery");

gallaryListEl.insertAdjacentHTML("beforeend", arrayOfItem);

//===== не через шаблонную строку ======
// const galleryList = document.querySelector("ul#gallery");

// const arrayOfItemsGallary = images.map((image) => {
//   const itemOfGalleryListEl = document.createElement("li");
//   itemOfGalleryListEl.classList.add("gallary-item");

//   const imageOfItemGalleryEl = document.createElement("img");
//   imageOfItemGalleryEl.src = image.url;
//   imageOfItemGalleryEl.alt = image.alt;
//   imageOfItemGalleryEl.width = 320;
//   imageOfItemGalleryEl.height = 200;

//   itemOfGalleryListEl.appendChild(imageOfItemGalleryEl);

//   return itemOfGalleryListEl;
// });

// galleryList.append(...arrayOfItemsGallary);
