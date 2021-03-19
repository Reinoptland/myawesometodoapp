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
