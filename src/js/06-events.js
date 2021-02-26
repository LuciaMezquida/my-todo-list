///////* EVENTS *//////////

addButton.addEventListener("click", () => {
  taskForm.classList.remove("hide");
  inputText.focus();
});

closeButton.addEventListener("click", () => {
  taskForm.classList.add("hide");
});

//Get the value of the input
inputText.addEventListener("keyup", (ev) => {
  inputValue = ev.currentTarget.value;
});

deleteButton.addEventListener("click", () => {
  const allDeleteButton = document.querySelectorAll(".deleteBtn");
  let tasks = document.querySelectorAll(".task");
  tasks = Array.from(tasks);
  for (let j = 0; j < allDeleteButton.length; j++) {
    allDeleteButton[j].classList.toggle("hide");
    allDeleteButton[j].classList.contains("hide")
      ? (deleteButton.innerHTML = "<i class='fas fa-times'></i>")
      : (deleteButton.innerHTML = "<i class='far fa-thumbs-up'></i>");

    displayReorderTasks(tasks);
  }
});

//Add tasks to the list
submitButton.addEventListener("click", createElements);
formElement.addEventListener("submit", (ev) => {
  ev.preventDefault();
  createElements();
});

getLocalStorage();
