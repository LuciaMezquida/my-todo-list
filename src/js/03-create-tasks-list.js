///////* CREATE LIST AND PUT IT INTO DOM *//////////

const createElements = () => {
  if (inputValue !== "") {
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", inputValue);

    const customCheckbox = document.createElement("span");
    customCheckbox.classList.add("custom-check");
    customCheckbox.setAttribute("name", inputValue);

    const checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("task-label");
    checkboxLabel.innerHTML = inputValue;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

    addTaskToTheList(checkbox, customCheckbox, checkboxLabel, deleteButton);
    printList();
    deleteInputAndForm();
  }
};
const addTaskToTheList = (
  checkbox,
  customCheckbox,
  checkboxLabel,
  deleteButton
) => {
  const task = document.createElement("li");
  task.classList.add("list", "task");
  task.appendChild(deleteButton);
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
