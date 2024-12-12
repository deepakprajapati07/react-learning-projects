import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = { name: itemName, dueDate: itemDueDate };

    setTodoItems((currValue) => [...currValue, newItem]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
