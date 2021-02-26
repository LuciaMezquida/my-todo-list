///////* CREATE LIST AND PUT IT INTO DOM *//////////

//Create elements
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
    deleteButton.classList.add("deleteBtn", "hide");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

    addTaskToTheList(checkbox, customCheckbox, checkboxLabel, deleteButton);
    printList();
    deleteInputAndForm();
  }
};

//Add elements to the list
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

//Print every list item
const printList = () => {
  let listHtml = "";
  for (let task of taskList) {
    listHtml += task;
  }
  taskContainer.innerHTML = listHtml;
  selectCheckTask();
};

//Delete input text, input value and modal
const deleteInputAndForm = () => {
  inputText.value = "";
  inputValue = "";
  taskForm.classList.add("hide");
};
