const list = document.querySelector("#categories");

const listChild = list.children;

const items = document.querySelectorAll(".item");

const arrTitles = [];
const listLength = [];

const plusTitle = () => {
  items.forEach((item) => {
    arrTitles.push(item.firstElementChild.textContent);
    listLength.push(item.lastElementChild.children.length);
  });
};

const newMessage = (arr1, arr2) => {
  let inc;
  for (let i = 0; i < arr1.length; i++) {
    inc = `
Category: ${arr1[i]}
Elements: ${arr2[i]}`;
    console.log(`${inc}`);
  }
};
const lastMessage = (callback) => {
  console.log(`Number of categories: ${listChild.length}`);
  plusTitle();
  newMessage(arrTitles, listLength);
};
lastMessage();
