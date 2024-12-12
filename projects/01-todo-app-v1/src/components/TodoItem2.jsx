function TodoItem2() {

    let todoName = "Go to College"
    let todoDate = "4/10/2024"

  return (
    <div class="container">
      <div class="row custom-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2 custom-col">
          <button type="button" class="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
