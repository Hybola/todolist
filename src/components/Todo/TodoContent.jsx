import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoLists } from "./TodoLists";
import mockData from "../../data/todos.json";
import { v4 as uuidv4 } from "uuid";

export function TodoContent() {
  const [todos, setTodos] = useState(mockData);

  const handleAddTodo = () => {
    // มี new todo
    let newTodoObj = {
      id: uuidv4(),
      task: "DoHW",
      status: false,
      due_date: "",
    };

    // สร้าง state ใหม่
    const newTodos = [newTodoObj, ...todos];
    setTodos(newTodos);
  };
  console.log(todos);
  return (
    <main className="content">
      <TodoHeader />
      <AddTodo />
      <button onClick={handleAddTodo}>Test Add Todo</button>
      <TodoLists todos={todos} />
    </main>
  );
}
