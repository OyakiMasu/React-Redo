import React, { useState } from "react";
import { myTodos, getNextId } from "./todos";

/*
Rules of state: never mutate state directly!

Todo Deliverables:
- Add element to array- use the spread operatore
- Remove element to array - use the .filter method
- Update element in array - use the map method
*/


function TodoList(){
    const [todos, setTodods] = useState(myTodos);
    const [newTodoDescription, setNewTodoDescription] = useState("")

    function addTodo(e) {
        e.preventDefault();
        const newTodo = {
          id: getNextId(),
          description: newTodoDescription,
          completed: false,
        };

        const updatedTodos = [...todos, newTodo]
        setTodods(updatedTodos);

      }

      function deleteTodo(id){
        const updatedTodos = todos.filter(todo => todo.id !== id)
          setTodods(updatedTodos)
      }

      function updateTodo(id, completed){
        const updatedTodos = todos.map(todo => {
          if (todo.id === id){
            return {
              ...todo,
              completed: completed
            }
          } else {
              return todo
            }
        })
        setTodods(updatedTodos)
      }

    return (
    <div className="Todo">
        <h1> Todo List</h1>
        <form onSubmit={addTodo}>
            <label>
            Description:
            <input
                type="text"
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
            />
            </label>
        <input type="submit" value="Add todo" />
        </form>
         <h2>My Todos</h2>
         <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id, e.target.checked)}
                checked={todo.completed}
              />
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    )
    
    

}

export default TodoList