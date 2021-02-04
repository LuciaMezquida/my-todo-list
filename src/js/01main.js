"use strict";
let day = document.querySelector(".js-day");
let month = document.querySelector(".js-month");
let year = document.querySelector(".js-year");
let weekDay = document.querySelector(".js-weekDay");
const listContainer = document.querySelector(".js-list");
const addButton = document.querySelector(".js-btn");
const closeButton = document.querySelector(".js-close");
const submitButton = document.querySelector(".js-submit");
const taskForm = document.querySelector(".js-form");
const inputText = document.querySelector(".js-input");

let inputValue = "";
let allCheckbox = [];

///////* EVENTS *//////////

addButton.addEventListener("click", () => {
  taskForm.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  taskForm.classList.add("hide");
});

///////* CREATE LIST AND PUT IT INTO DOM *//////////

const taskList = document.createElement("ul");
listContainer.appendChild(taskList);

inputText.addEventListener("keyup", (ev) => {
  inputValue = ev.currentTarget.value;
});

submitButton.addEventListener("click", () => {
  const task = document.createElement("li");
  const checkbox = document.createElement("input");
  const customCheckbox = document.createElement("span");
  const checkboxLabel = document.createElement("label");
  task.classList.add("list");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", inputValue);
  checkbox.classList.add("checkbox");
  customCheckbox.classList.add("custom-check");
  customCheckbox.setAttribute("name", inputValue);
  checkboxLabel.innerHTML = inputValue;
  task.appendChild(checkbox);
  task.appendChild(customCheckbox);
  task.appendChild(checkboxLabel);
  taskList.appendChild(task);
  inputText.value = "";
  taskForm.classList.add("hide");
  selectCheckTask(customCheckbox);
});

const selectCheckTask = (customCheckbox) => {
  allCheckbox = document.querySelectorAll(".checkbox");
  const allcustomCheckbox = document.querySelectorAll(".custom-check");

  for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].addEventListener("click", (ev) => {
      if (ev.currentTarget.checked) {
        allcustomCheckbox[i].classList.add("checked");
      } else {
        allcustomCheckbox[i].classList.remove("checked");
      }
    });
  }
};

///////* MANAGE EVERY TASK IN THE LIST *//////////
