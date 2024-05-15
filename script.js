function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
}


