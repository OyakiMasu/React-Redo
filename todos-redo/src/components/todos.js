
const myTodos = [
    { id: 1, description: "Create a new todo", completed: false },
    { id: 2, description: "Update an existing todo", completed: false },
    { id: 3, description: "Delete an existing todo", completed: false },
  ];
  
  const getNextId = ((id) => () => ++id)(3);
  
  export { myTodos, getNextId }