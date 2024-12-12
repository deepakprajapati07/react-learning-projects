import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 custom-col">
          <button
            type="button"
            className="btn btn-danger custom-btn"
            onClick={() => deleteItem(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
