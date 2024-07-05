const root = document.querySelector("#root");

let sliderIndex = 0;

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");

const leftBtn = document.createElement("button");
const rightBtn = document.createElement("button");

frame.classList.add("frame");
cards.classList.add("cards");
triggers.classList.add("triggers");

triggers.append(leftBtn, rightBtn);
frame.append(cards, triggers);
root.append(frame);

leftBtn.textContent = "<";
rightBtn.textContent = ">";

images.forEach((image) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url(${image})`;
  cards.append(card);
});

// ================= triggers =================

leftBtn.addEventListener("click", () => {
  if (sliderIndex !== 0) {
    sliderIndex--;
    // cards.style.left = `${-1 * sliderIndex * 500}px`;
    updateSlider();
    updateRounds();
  }
});
rightBtn.addEventListener("click", () => {
  if (sliderIndex < images.length - 1) {
    sliderIndex++;
    // cards.style.left = `${-1 * sliderIndex * 500}px`;
    updateSlider();
    updateRounds();
  }
});

// ================= rounds =================

function createRounds() {
  const container = document.createElement("div");
  container.classList.add("rounds");

  frame.append(container);

  images.forEach((el, index) => {
    const button = document.createElement("button");
    container.append(button);

    const allButtons = button.parentElement.children;

    button.addEventListener("click", () => {
      sliderIndex = index;
      cards.style.left = `${-1 * sliderIndex * 500}px`;
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
      }
      button.classList.add("active");
    });
  });
}
createRounds();

// Функция для обновления позиции слайдера и rounds
function updateSlider() {
  cards.style.left = `${-1 * sliderIndex * 500}px`;
}

function updateRounds() {
  const allButtons = document.querySelectorAll(".rounds button");
  allButtons.forEach((button, index) => {
    if (index === sliderIndex) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
