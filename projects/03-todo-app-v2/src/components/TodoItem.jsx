function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 custom-col">
          <button type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
