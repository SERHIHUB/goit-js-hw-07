const list = document.querySelector("#categories");

const items = document.querySelectorAll(".item");

const result = () => {
  console.log(`Number of categories: ${list.children.length}`);
  items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};

result();
