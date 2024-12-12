import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';


export function TodoList({ todos, toggleTodo, deleteTodo}) {

    
    return (
        <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem 
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};