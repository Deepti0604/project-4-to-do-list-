const inputBox = document.getElementById('input_field');
const listContainer = document.getElementById('list_container');
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

/*saving the tasks in memory*/

function saveTasks(){
    localStorage.setItem("data", listContainer.innerHTML);
}

/*displaying tha saved tasks*/

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();