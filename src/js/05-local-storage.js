///////* LOCAL STORAGE *//////////

const setLocalStorage = () => {
  localStorage.setItem(localStorageName, JSON.stringify(taskList));
};

const getLocalStorage = () => {
  const savedTasks = JSON.parse(localStorage.getItem(localStorageName));
  if (savedTasks === null) {
    addTaskToTheList();
  }
  taskList = savedTasks;
  printList();
};
