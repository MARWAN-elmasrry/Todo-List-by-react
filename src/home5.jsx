import React,{useState} from "react";

import "./home5.css";

const Home=()=>{
    const [todos ,setTodos] = useState([])
    const [todoEditing, setTodoEditing] = useState(null);

    // add the handle 
    function handleSubmit(e) {
        e.preventDefault();
    
        let todo = document.getElementById('todoAdd').value
        const newTodo = {
          id: new Date().getTime(),
          text: todo.trim(),
          completed: false,
        };
        if (newTodo.text.length > 0 ) {
            setTodos([...todos].concat(newTodo));
        }
        else {
            alert("Enter Valid Task");
        }
        document.getElementById('todoAdd').value = ""
      }
    // add the delete 
    function deleteTodo(id) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      }

    // add the complet
    function toggleComplete(id) {
        let updatedTodos = [...todos].map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        setTodos(updatedTodos);
      }
    // add the edit 
    function submitEdits(newtodo) {
        const updatedTodos = [...todos].map((todo) => {
          if (todo.id === newtodo.id) {
            todo.text = document.getElementById(newtodo.id).value;
            }
            return todo;
          });
          setTodos(updatedTodos);
          setTodoEditing(null);
        }
// ===================================== //
    return(
        <div id="todo-list">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input className="todobox" type="text" id = 'todoAdd'/>
          <button className="add-todo" type="submit">Add Todo</button>
        </form>
          {todos.map((todo) => (

        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              className="check-b"
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ?
              (<input
                className="edit"
                type="text"
                id = {todo.id}
                defaultValue={todo.text}/>
              )
              :(<div className="todo=text">{todo.text}</div>)}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing?
            (<button className="edit-b" onClick={() => submitEdits(todo)}>Submit Edits</button>)
            :(<button className="edit-b" onClick={() => setTodoEditing(todo.id)}>Edit</button>)}

            <button className="del-b" onClick={() => deleteTodo(todo.id)}>Delete</button>

           </div>
        </div>
      ))}
      </div>
    );
};
export default Home;