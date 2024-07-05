var todoData = JSON.parse(localStorage.getItem("todoData")) || [];
var resultDiv = document.querySelector("#result");
function displayData(data) {
  resultDiv.innerText = "";
  if (todoData.length > 0) {
    data.forEach((ele, idx) => {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "newTodo");

      var ind = document.createElement("p");
      ind.innerText = idx + 1;
      var todo = document.createElement("p");
      todo.innerText = ele.todo;
      var priority = document.createElement("p");
      priority.innerText = ele.priority;
      var statusEle = document.createElement("button");
      statusEle.innerText = ele.status;
      // status.innerText = ele.status?"Complete":"Pending"
      if (ele.status) {
        statusEle.innerText = "Completed";
        statusEle.style.backgroundColor = "green";
        statusEle.style.color = "yellow";
        statusEle.style.border = "none";
        statusEle.disabled;
      } else {
        statusEle.innerText = "Pending";
      }

      statusEle.addEventListener("click", function () {
        toggleFun(idx);
      });

      var deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", function () {
        deleteFun(idx);
      });

      var cEleArr = [ind, todo, priority, statusEle, deleteBtn];

      cEleArr.forEach((nele) => {
        nele.setAttribute("class", "newTodoItems");
      });
      newDiv.append(ind, todo, priority, statusEle, deleteBtn);
      resultDiv.append(newDiv);
    });
  } else {
    var noTodoMsg = document.createElement("p")
    noTodoMsg.innerText = "No Todos Available."
    noTodoMsg.setAttribute("id", "notodo")
    resultDiv.append(noTodoMsg)
  }
}
displayData(todoData);

function deleteFun(index) {
  todoData.splice(index, 1);
  localStorage.setItem("todoData", JSON.stringify(todoData));
  displayData(todoData);
}

function toggleFun(index) {
  todoData[index].status = true;
  localStorage.setItem("todoData", JSON.stringify(todoData));
  displayData(todoData);
}
