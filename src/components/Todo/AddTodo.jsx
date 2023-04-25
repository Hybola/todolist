import styles from "./AddTodo.module.scss";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

export function AddTodo() {
  //# logic & state
  const [isAddMode, setIsAddMode] = useState(false);
  const handleClickAddTask = (e) => {
    console.log("Open form");
    setIsAddMode(true);
  };

  //#UI
  return (
    <>
      {!isAddMode ? (
        <div className={styles.add__todo} onClick={handleClickAddTask}>
          <span>+</span>
          <h3>Add task</h3>
        </div>
      ) : (
        <TodoForm submitText="Add task" onSetIsShowForm={setIsAddMode} />
      )}
    </>
  );
}