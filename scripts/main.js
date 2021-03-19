function updateCounters() {
  // alle li's selecteren -> length
  // declare a variable that contains the "Total" counter element
  var allListItems = document.querySelectorAll("li");
  var totalTodoCount = allListItems.length;
  //   console.log(totalTodoCount);

  // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
  // Strategie 0: Zoek alle li items met class completed!
  // Strategie 1: Zoek all checkboxes die checked true hebben
  var completedTodos = document.querySelectorAll(".completed");
  var completedTodoCount = completedTodos.length;
  //   console.log(completedTodoCount);

  var notDoneCount = totalTodoCount - completedTodoCount;
  //   console.log(notDoneCount);

  // update the HTML inside the counter element with the number of todos
  var todoElement = document.getElementById("todo");
  var doneElement = document.getElementById("done");
  var totalElement = document.getElementById("total");

  todoElement.textContent = notDoneCount;
  doneElement.textContent = completedTodoCount;
  totalElement.textContent = totalTodoCount;
}

updateCounters();

function toggleDone(event) {
  //   console.log(event);
  // get the checkbox from the event object
  var checkbox = event.target;

  var listItem = checkbox.parentElement.parentElement;
  if (checkbox.checked) {
    listItem.className = "completed";
    // change the checkbox so that it shows up as completed
  } else {
    listItem.className = "";
    // change the checkbox so that it shows up as todo
  }

  updateCounters();
  // update the counters, now that we have updated the checkbox
}

var allCheckBoxes = document.querySelectorAll("input[type=checkbox]");
// console.log(allCheckBoxes);
// add a "change" event listener to every checkbox,
for (let counter = 0; counter < allCheckBoxes.length; counter++) {
  const checkbox = allCheckBoxes[counter];
  //   console.log("1 element tegeliijk????");
  //   console.log(checkbox);
  checkbox.addEventListener("change", toggleDone);
}
// and use the "toggleDone" function as the callback

function addNewTodo(event) {
  event.preventDefault();
  //   console.log("hello");

  // Stap 1: haal de text uit het invul veld
  var inputElement = document.getElementById("todoInput");
  var todoText = inputElement.value;
  //   console.log(todoText);
  // Stap 2: maak het inveld weer leeg
  inputElement.value = null;
  // Stap 3: Maak een nieuw todoItem aan (li, label, input (checkbox), text)
  var newTodoElement = document.createElement("li"); // <li>
  var labelElement = document.createElement("label"); // <label>
  var checkbox = document.createElement("input"); // <input />
  checkbox.type = "checkbox"; // <input type="checkbox"/>
  checkbox.addEventListener("change", toggleDone);
  var todoTextElement = document.createTextNode(todoText); // Learn JS

  newTodoElement.appendChild(labelElement);
  labelElement.appendChild(checkbox);
  labelElement.appendChild(todoTextElement);
  // <li>
  //   <label><input type="checkbox" />Sweep the floor</label>
  // </li>
  //   console.log(newTodoElement);
  // Stap 4: plak de nieuwe todo op de pagina
  var todoList = document.getElementById("todoList");
  todoList.appendChild(newTodoElement);

  updateCounters();
}

var formElement = document.querySelector("form");

formElement.addEventListener("submit", addNewTodo);

// Alle done todos wille we opruimen
// Stap 3: Schrijf een functie
function removeDoneTodos() {
  //   console.log("I GOT CLICKED!");
  // Stap 4: Zorg dat de functie alle todos die completed zijn verwijderd

  // Stap 4a: Selecteer alle done todos
  var completedTodos = document.querySelectorAll(".completed");
  console.log(completedTodos);
  // Stap 4b: loop over die todos heen
  for (let counter = 0; counter < completedTodos.length; counter++) {
    const todoItem = completedTodos[counter];
    // console.log("1 tegelijk??");
    // console.log(todoItem);
    // Stap 4c: verwijder de todos
    todoItem.remove();
  }

  updateCounters();
}

// X Stap 1: maak een knopje
var removeDoneButton = document.getElementById("removeDoneButton");
console.log(removeDoneButton);
// Stap 2: luister naar klik events en voer dan een functie uit
removeDoneButton.addEventListener("click", removeDoneTodos);
