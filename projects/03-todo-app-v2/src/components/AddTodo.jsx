function AddTodo() {
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 custom-col">
          <button type="button" className="btn btn-success custom-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
