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
        sortTasks();
      } else {
        allCustomCheckbox[i].classList.remove("checked");
        allCheckboxLabel[i].classList.remove("removed");
        sortTasks();
      }
    });
  }
  deleteEveryTask();
};
const deleteEveryTask = () => {
  const allDeleteButton = document.querySelectorAll(".deleteBtn");
  let tasks = document.querySelectorAll(".task");
  tasks = Array.from(tasks);
  for (let j = 0; j < allDeleteButton.length; j++) {
    allDeleteButton[j].addEventListener("click", () => {
      tasks.splice(j, 1);
      displayReorderTasks(tasks);
      printList();
    });
  }
};
const sortTasks = () => {
  let tasks = document.querySelectorAll(".task");
  tasks = Array.from(tasks);
  const doneTasks = tasks.filter((item) =>
    item.lastElementChild.classList.value.includes("removed")
  );
  const undoneTasks = tasks.filter(
    (item) => !item.lastElementChild.classList.value.includes("removed")
  );
  const lastUndone = undoneTasks.pop();
  undoneTasks.unshift(lastUndone);
  tasks = undoneTasks.concat(doneTasks);
  displayReorderTasks(tasks);
};

const displayReorderTasks = (tasks) => {
  taskList = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] !== undefined) {
      taskContainer.appendChild(tasks[i]);
      taskList.push(tasks[i].outerHTML);
    }
  }
  setLocalStorage();
};
