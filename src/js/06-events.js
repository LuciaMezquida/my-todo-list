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
    displayReorderTasks(tasks);
  }
});

//Add tasks to the list
submitButton.addEventListener("click", createElements);
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    createElements();
  }
});

getLocalStorage();
