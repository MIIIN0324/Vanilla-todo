const todoInputElem = document.querySelector(".todoInput");
const todoListElem = document.querySelector(".todoList");

let todos = [];
let id = [];

const setTodos = (newTodos) => {
    todos = newTodos;
};

const getAllTodos = () => {
    return todos;
};

const appendTodos = (text) => {
    const newId = id++;
    const newTodos = getAllTodos().concat({
        id: newId,
        isCompleted: false,
        content: text,
    });
    setTodos(newTodos);
    paintTodos();
};

//할 일 추가될 때마다, paintTodos()함수 실행하여 렌더링
const paintTodos = () => {
    todoListElem.innerHTML = null; //todoListElem 요소 안의 HTML 초기화
    const allTodos = getAllTodos(); //todos 배열 가져오기

    // "todo-item"에 해당하는 HTML을 그려서 "todo-list"에 추가하기
    allTodos.forEach((todo) => {
        const todoItemElem = document.createElement("li");
        todoItemElem.classList.add("todoItem");

        const checkboxElem = document.createElement("div");
        checkboxElem.classList.add("checkBox");

        const todoElem = document.createElement("div");
        todoElem.classList.add("todo");
        todoElem.innerText = todo.content;

        const delBtnElem = document.createElement("button");
        delBtnElem.classList.add("delBtn");
        delBtnElem.innerHTML = "x";

        if (todo.isChecked) {
            todoItemElem.classList.add("checked");
            checkboxElem.innerText = "✔";
        }
        todoItemElem.appendChild(checkboxElem);
        todoItemElem.appendChild(todoElem);
        todoItemElem.appendChild(delBtnElem);

        todoListElem.appendChild(todoItemElem);
    });
};

const init = () => {
    todoInputElem.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            appendTodos(e.target.value);
            todoInputElem.value = "";
        }
    });
};

init();
