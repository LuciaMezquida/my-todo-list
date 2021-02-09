///////* CREATE LIST AND PUT IT INTO DOM *//////////

const createElements = () => {
  if (inputValue !== "") {
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
    addTaskToTheList(checkbox, customCheckbox, checkboxLabel);
    printList();
    deleteInputAndForm();
  }
};
const addTaskToTheList = (checkbox, customCheckbox, checkboxLabel) => {
  const task = document.createElement("li");
  task.classList.add("list");
  task.appendChild(checkbox);
  task.appendChild(customCheckbox);
  task.appendChild(checkboxLabel);
  taskList.push(task.outerHTML);
  setLocalStorage();
};

const printList = () => {
  let listHtml = "";
  for (let task of taskList) {
    listHtml += task;
  }
  taskContainer.innerHTML = listHtml;
  selectCheckTask();
};
const deleteInputAndForm = () => {
  inputText.value = "";
  inputValue = "";
  taskForm.classList.add("hide");
};

///////* MANAGE EVERY TASK IN THE LIST *//////////
const selectCheckTask = () => {
  const allCheckbox = document.querySelectorAll(".checkbox");
  const allCustomCheckbox = document.querySelectorAll(".custom-check");
  const allCheckboxLabel = document.querySelectorAll(".task-label");

  for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].addEventListener("click", (ev) => {
      if (ev.currentTarget.checked) {
        allCustomCheckbox[i].classList.add("checked");
        allCheckboxLabel[i].classList.add("removed");
        eraseCheckedTask(i);
        console.log(taskList);
      } else {
        allCustomCheckbox[i].classList.remove("checked");
        allCheckboxLabel[i].classList.remove("removed");
        recoverDeletedTask();
      }
    });
  }
};
const eraseCheckedTask = (i) => {
  taskList.push(taskList[i]);
  taskList.splice(i, 1);
  setLocalStorage();
};

const recoverDeletedTask = () => {
  let lastTask = taskList.pop();
  taskList.splice(0, 0, lastTask);
  setLocalStorage();
};
