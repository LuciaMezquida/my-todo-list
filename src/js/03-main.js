///////* CREATE LIST AND PUT IT INTO DOM *//////////

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
    taskList.push(task.outerHTML);
    setLocalStorage();
    printList();
    inputText.value = "";
    inputValue = "";
    taskForm.classList.add("hide");
  }
};

const printList = () => {
  const savedTasks = JSON.parse(localStorage.getItem(localStorageName));
  console.log(savedTasks);
  let listHtml = "";
  for (let task of savedTasks) {
    listHtml += task;
  }
  taskContainer.innerHTML = listHtml;
  selectCheckTask();
  //checkedTaskToTheEndOfTheList();
};

const setLocalStorage = () => {
  localStorage.setItem(localStorageName, JSON.stringify(taskList));
};

// const checkedTaskToTheEndOfTheList = () => {
//   for (let i = 0; i < taskList.length; i++) {
//     if (taskList[i].classList.contains("list")) {
//       console.log("list");
//     }
//     if (taskList[i].classList.contains("check")) {
//       console.log("check");
//     }
//   }
// };

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
        //taskList[i].classList.add("check");
      } else {
        allCustomCheckbox[i].classList.remove("checked");
        allCheckboxLabel[i].classList.remove("removed");
        //taskList[i].classList.remove("check");
      }
    });
  }
};
