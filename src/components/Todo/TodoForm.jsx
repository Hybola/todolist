import styles from "./TodoForm.module.scss";
import React, { useState } from "react";

// TodoForm => call in 2 Mode
// Mode-1 : Add
// Mode-2 : Edit
export function TodoForm({
  onSetIsShowForm,
  submitText,
  todo,
  onAddTodo,
  onEditTodo,
}) {
  // # 1 : Logic Section
  const [task, setTask] = useState(todo.task || "");
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Click Add Task button");
    //จบ AddMode

    // validate
    if (task.trim() === "") {
      setIsError(true);
      return;
    } else {
      // validate passed , execute addTodo
      //onAddTodo(task); // from <TodoContent/>
      onEditTodo(todo.id, task); // send => 1.newTask 2. todoId
    }

    // set back to normal mode
    onSetIsShowForm(false);
  };
  const handleClickCancel = (e) => {
    // from <AddTodo/> for Add
    // onSetIsAddMode?.(false);
    // from <TodoItem/> for Edit
    // onSetIsEditMode?.(false);
    onSetIsShowForm?.(false);
  };

  const handleChangeInput = (e) => {
    setIsError(false);
    // console.log(e.target.value);
    setTask(e.target.value);
  };
  // # 2 : UI-Section
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={task}
        onChange={handleChangeInput}
      />
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Title is required</p>}
        <div className={styles.todo__form__buttons}>
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
          <button type="submit">{submitText}</button>
        </div>
      </div>
    </form>
  );
}
