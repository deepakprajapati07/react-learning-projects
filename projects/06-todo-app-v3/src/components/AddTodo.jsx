import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

const AddTodo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    if (todoName) {
      onNewItem(todoName, dueDate);
    }
  };

  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2 custom-col">
          <button
            type="button"
            className="btn btn-success custom-btn"
            onClick={handleAddButtonClick}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
