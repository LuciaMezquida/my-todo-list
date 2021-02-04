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

const taskList = document.createElement("ul");
listContainer.appendChild(taskList);

let inputValue = "";

///////* EVENTS *//////////

addButton.addEventListener("click", () => {
  taskForm.classList.remove("hide");
  inputText.focus();
});
closeButton.addEventListener("click", () => {
  taskForm.classList.add("hide");
});

///////* CREATE LIST AND PUT IT INTO DOM *//////////

inputText.addEventListener("keyup", (ev) => {
  inputValue = ev.currentTarget.value;
});

const addTaskToTheList = () => {
  if (inputValue !== "") {
    const task = document.createElement("li");
    const checkbox = document.createElement("input");
    const customCheckbox = document.createElement("span");
    const checkboxLabel = document.createElement("label");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", inputValue);
    customCheckbox.classList.add("custom-check");
    customCheckbox.setAttribute("name", inputValue);
    checkboxLabel.classList.add("task-label");
    checkboxLabel.innerHTML = inputValue;
    task.classList.add("list");
    task.appendChild(checkbox);
    task.appendChild(customCheckbox);
    task.appendChild(checkboxLabel);
    taskList.appendChild(task);
    inputText.value = "";
    taskForm.classList.add("hide");
    selectCheckTask(customCheckbox);
    inputValue = "";
  }
};
submitButton.addEventListener("click", addTaskToTheList);

const selectCheckTask = (customCheckbox) => {
  const allCheckbox = document.querySelectorAll(".checkbox");
  const allCustomCheckbox = document.querySelectorAll(".custom-check");
  const allCheckboxLabel = document.querySelectorAll(".task-label");

  for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].addEventListener("click", (ev) => {
      if (ev.currentTarget.checked) {
        allCustomCheckbox[i].classList.add("checked");
        allCheckboxLabel[i].classList.add("removed");
      } else {
        allCustomCheckbox[i].classList.remove("checked");
        allCheckboxLabel[i].classList.remove("removed");
      }
    });
  }
};
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    addTaskToTheList();
  }
});
///////* MANAGE EVERY TASK IN THE LIST *//////////