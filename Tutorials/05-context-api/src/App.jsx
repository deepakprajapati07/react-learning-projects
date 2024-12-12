import { TodoItemsContext } from "./store/todo-items-store";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newItem = { name: itemName, dueDate: itemDueDate };

    setTodoItems((currValue) => [...currValue, newItem]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;
