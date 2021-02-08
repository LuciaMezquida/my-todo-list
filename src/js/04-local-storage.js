const setLocalStorage = () => {
  localStorage.setItem(localStorageName, JSON.stringify(taskList));
};

const getLocalStorage = () => {
  const savedTasks = JSON.parse(localStorage.getItem(localStorageName));
  if (savedTasks.length < 0) {
    addTaskToTheList();
  }
  taskList = savedTasks;
  printList();
};
