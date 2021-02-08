"use strict";
//Calendar
let day = document.querySelector(".js-day");
let month = document.querySelector(".js-month");
let year = document.querySelector(".js-year");
let weekDay = document.querySelector(".js-weekDay");

//Buttons
const addButton = document.querySelector(".js-btn");
const closeButton = document.querySelector(".js-close");
const submitButton = document.querySelector(".js-submit");

//Containers
const mainContainer = document.querySelector(".js-list");
const taskForm = document.querySelector(".js-form");
const inputText = document.querySelector(".js-input");

//Create elements
const taskContainer = document.createElement("ul");
mainContainer.appendChild(taskContainer);

let inputValue = "";
let taskList = [];
const localStorageName = "tasks";
