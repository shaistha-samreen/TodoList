import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    };

return (
    <div>
        <input className="search" placeholder="Add a Task"
        value={newTodo}
         onChange={updateTodovalue}></input>
        <br></br>
        <button onClick={addNewTask} className="btn">Add Task</button>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <h4>Task Todo</h4>
        <ul>
            {todos.map((todo) =>(
                    <li>{todo}</li>
                    ))
            }
        </ul>
    </div>
);

}