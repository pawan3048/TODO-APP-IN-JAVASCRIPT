var todoData = JSON.parse(localStorage.getItem("todoData")) || [];

document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();

    var form = document.querySelector("form");
    var todoObj = {
        todo : form.todo.value,
        priority : form.priority.value,
        status: false,
    }
    todoData.push(todoObj);
    localStorage.setItem("todoData", JSON.stringify(todoData));
    alert("Todo has added successfully.")
    document.querySelector("form").reset()

});