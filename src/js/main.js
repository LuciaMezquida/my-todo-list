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

addButton.addEventListener("click", () => {
  taskForm.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  taskForm.classList.add("hide");
});
