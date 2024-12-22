const searchBtn = document.querySelector(".search__button");
const searchInput = document.querySelector(".field__input");
const cardWrapper = document.querySelector(".cards__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
  {
    id: 1,
    title: "Второй товар",
    price: 171,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
  {
    id: 2,
    title: "Третий товар",
    price: 172,
    address: "Москва, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: 173,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: 174,
    address: "Москва, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: 175,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "card-image.jpeg",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <li class="card__item">
                <a href="./item.html" class="card__link">
                  <div class="card__image">
                    <img
                    src="./images/${item.image}"
                      alt="${item.title}"
                      width="264"
                      height="178"
                      loading="lazy"
                    />
                  </div>
                  <div class="card__body">
                    <h3 class="card__body-title">${item.title}</h3>
                    <p class="card__body-price">${item.price} ₽</p>
                    <p class="card__body-address">${item.address}</p>
                    <p class="card__body-date">${item.date}</p>
                  </div>
                </a>
              </li>
            `
    );
  });
};

const filterArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || String(item.price).includes(value);
  });
};

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filterArray(cardArray, searchInput.value));
});
