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
        taskList[i].complete = true;
        const completedTask = taskList.splice(i, 1);
        taskList.push(completedTask[0]);
        setLocalStorage();
        console.log(taskList);
        printList();
      } else {
        allCustomCheckbox[i].classList.remove("checked");
        allCheckboxLabel[i].classList.remove("removed");
        taskList[i].complete = false;
        setLocalStorage();
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
      displayReorderedTasks(tasks);
      printList();
    });
  }
};
const sortedTasks = () => {
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
  displayReorderedTasks(tasks);
};
// const sortTasks = () => {
//   for (let i = 0; i < taskList.length; i++) {
//     if (taskList[i].complete === true) {
//       const completedTask = taskList.splice(i, 1);
//       taskList.push(completedTask[0]);
//       setLocalStorage();
//       printList();
//     }
//   }
// };

const displayReorderedTasks = (tasks) => {
  taskList = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] !== undefined) {
      taskContainer.appendChild(tasks[i]);
      taskList.push({
        task: tasks[i].outerHTML,
        complete: false,
      });
    }
  }
  setLocalStorage();
};
