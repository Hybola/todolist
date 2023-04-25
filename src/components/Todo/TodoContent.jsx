import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoHeader } from "./TodoHeader";
import { TodoLists } from "./TodoLists";
import mockData from "../../data/todos.json";
import { v4 as uuidv4 } from "uuid";

export function TodoContent() {
  const [todos, setTodos] = useState(mockData);

  const handleAddTodo = (newTask) => {
    // มี new todo
    let newTodoObj = {
      id: uuidv4(),
      task: newTask,
      status: false,
      due_date: "",
    };
    // สร้าง state ใหม่
    const newTodos = [newTodoObj, ...todos];
    setTodos(newTodos);
  };
  const handleEditTodo = (todoId, newTask) => {
    console.log("##", todoId, newTask);
    // Modify Array
    // #1 FindIndex
    const foundedIndex = todos.findIndex((todoObj) => todoObj.id === todoId);

    // Not founded
    if (foundedIndex == -1) return;

    // Founded
    const newTodos = [...todos];
    // let oldTodoObj = newTodos[foundedIndex]
    // oldTodoObj.task = newTask
    newTodos[foundedIndex] = { ...newTodos[foundedIndex], task: newTask };
    // { "id": 4, "task": "In congue. Etiam justo.", "status": false, "due_date": "2023-05-04" },
    setTodos(newTodos);
  };

  return (
    <main className="content">
      <TodoHeader />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoLists todos={todos} onEditTodo={handleEditTodo} />
    </main>
  );
}
