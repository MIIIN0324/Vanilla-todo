const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("input");
const todoList = document.querySelector("#todoList");

let todos = [];

//추가 함수
const handleTodoSubmit = (event) => {
    event.preventDefault();
    if (todoInput.value.length >= 1) {
        const item = {
            id: Date.now(),
            text: todoInput.value,
        };
        todos.push(item);
        renderTodo(item);
        todoInput.value = "";
    }
};

//화면에 그려주는 함수
const renderTodo = (item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = item.text;
    li.appendChild(span);
    todoList.appendChild(li);
};

todoForm.addEventListener("click", handleTodoSubmit);
