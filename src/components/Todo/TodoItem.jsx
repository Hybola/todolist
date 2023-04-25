import styles from "./TodoItem.module.scss";
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { useState } from "react";
import { TodoForm } from "./TodoForm";

export function TodoItem() {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleToggleCheck = (e) => {
    setIsCheck(!isCheck);
  };
  const handleOpenEditMode = () => {
    setIsEdit(true);
  };
  const handleDeleteTodo = () => {
    console.log("click delete icon");
  };

  let checkboxStyle = isCheck
    ? styles.check__icon__done
    : styles.checkbox__icon;
  let taskStyle = isCheck ? styles.done : "";
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container}>
          <div
            className={styles.checkbox__container}
            onClick={handleToggleCheck}>
            <HiCheck className={checkboxStyle} />
          </div>
          <p className={taskStyle}>{`OLD-TASK`}</p>

          <div className={styles.edit__icon} onClick={handleOpenEditMode}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon} onClick={handleDeleteTodo}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm
          submitText="Edit task"
          onSetIsShowForm={setIsEdit}
          oldTask="old-task-name"
        />
      )}
    </>
  );
}
