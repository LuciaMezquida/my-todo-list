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

//Add tasks to the list
submitButton.addEventListener("click", createElements);
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    createElements();
  }
});
getLocalStorage();
