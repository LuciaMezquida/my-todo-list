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

///////* GENERATE DATE AND PUT IT INTO DOM *//////////

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const date = new Date();
day.innerHTML = date.getDate();
month.innerHTML = months[date.getMonth()];
year.innerHTML = date.getFullYear();
weekDay.innerHTML = weekDays[date.getDay()];

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
  task.classList.add("list");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  const checkboxLabel = document.createElement("label");
  checkboxLabel.innerHTML = inputValue;
  task.appendChild(checkbox);
  task.appendChild(checkboxLabel);
  taskList.appendChild(task);
  inputText.value = "";
  taskForm.classList.add("hide");
});
