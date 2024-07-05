var todoData = JSON.parse(localStorage.getItem("todoData")) || [];
var resultDiv = document.querySelector("#result");
function displayData(data){
    resultDiv.innerText="";
    if(todoData.length>0){
        data.forEach((ele, idx)=>{
            var newDiv = document.createElement('div');
            newDiv.setAttribute("class","newTodo")
    
            var ind = document.createElement('p');
            ind.innerText = idx+1
            var todo = document.createElement('p');
            todo.innerText = ele.todo;
            var priority = document.createElement('p');
            priority.innerText = ele.priority;
            var statusEle = document.createElement('button');
            statusEle.innerText = ele.status;
     
            // status.innerText = ele.status?"Complete":"Pending"
            if(ele.status){
                statusEle.innerText="Completed";
                statusEle.style.backgroundColor="green";
                statusEle.style.color="yellow";
                statusEle.style.border="none";
                statusEle.disabled
            }else{
                statusEle.innerText = "Pending"
            }
            var deleteBtn = document.createElement('button');
            deleteBtn.innerText = "Delete"
    
            var cEleArr = [ind,todo,priority,statusEle,deleteBtn];
    
            cEleArr.forEach((nele)=>{
                nele.setAttribute("class", "newTodoItems")
            })
            newDiv.append(ind, todo, priority, statusEle, deleteBtn)
            resultDiv.append(newDiv)
            console.log(resultDiv)
        })
    }else{
        var blankTodoMsg = document.createElement("p");
        blankTodoMsg.innerText="Where was no Completed Todo is Available here"
        blankTodoMsg.setAttribute("id","blankTodoMsg")
        resultDiv.append(blankTodoMsg)
        console.log(blankTodoMsg)
    }
}

var filterCompletedTodos = todoData.filter((item)=>{
    if(item.status){
        return item
    }
})
displayData(filterCompletedTodos)