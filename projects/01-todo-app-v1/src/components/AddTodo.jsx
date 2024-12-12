function AddTodo() {
  return (
    <div class="container">
      <div class="row custom-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2 custom-col">
          <button type="button" class="btn btn-success custom-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
