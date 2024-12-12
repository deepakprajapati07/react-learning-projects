import {AiFillDelete} from "react-icons/ai"

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 custom-col">
          <button
            type="button"
            className="btn btn-danger custom-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
