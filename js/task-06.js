function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.style.backgroundColor = "#4E75FF";
destroy.style.backgroundColor = "#FF4E4E";

// ===============================================================

input.addEventListener("input", () => {
  create.addEventListener("click", () => {
    if (Number(input.value) >= 1 && Number(input.value) <= 100) {
      destroyBoxes();
      createBoxes(Number(input.value));
    }
  });
});

// ===============================================================

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML("beforeend", "<div class='box-item'></div>");
    const boxItems = document.querySelectorAll(".box-item");
    const arrBox = [];
    for (let boxItem of boxItems) {
      boxItem.style.width = "30px";
      boxItem.style.height = "30px";
      boxItem.style.backgroundColor = getRandomHexColor();
      arrBox.push(boxItem);
    }
    let ten = 10;
    for (let i = 0; i < boxItems.length; i++) {
      arrBox[i].style.width = `${
        Number.parseFloat(arrBox[i].style.width) + ten
      }px`;
      arrBox[i].style.height = `${
        Number.parseFloat(arrBox[i].style.height) + ten
      }px`;
      ten = ten + 10;
    }
  }
  clearNumber();
}

function clearNumber() {
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroy.addEventListener("click", () => {
  destroyBoxes();
});
