import { TodoItem } from "./TodoItem";

export function TodoLists({ todos, onEditTodo, onDeleteTodo }) {
  // const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);

  return (
    <ul>
      {todos.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          todo={todoObj}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
