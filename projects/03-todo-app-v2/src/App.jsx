import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Buy Milk",
      dueDate: "10/12/2024",
    },
    {
      id: 2,
      name: "Go to college",
      dueDate: "10/12/2024",
    },
    {
      id: 3,
      name: "Complete Project",
      dueDate: "10/12/2024",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
      </center>
    </>
  );
}

export default App;
