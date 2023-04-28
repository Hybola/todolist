import styles from "./TodoItem.module.scss";
import { HiCheck, HiPencil, HiTrash } from "react-icons/hi";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { getFormattedDate } from "../../utils/DateUtils";

export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  // #1 : Logic,State
  // Check === DONE
  //const [isCheck, setIsCheck] = useState(todo.status);
  const [isEdit, setIsEdit] = useState(false);
  const handleToggleCheck = (e) => {
    // setIsCheck(!isCheck);
    onEditTodo(todo.id, { status: !todo.status }); // handleEditTodo(todo.id, {status:!todo.status})
  };
  const handleOpenEditMode = () => {
    //console.log(`editing ${todo.id}`);
    setIsEdit(true);
  };
  const handleDeleteTodo = () => {
    console.log("click delete icon");
    onDeleteTodo(todo.id);
  };

  let checkboxStyle = todo.status
    ? styles.check__icon__done
    : styles.checkbox__icon;
  let taskStyle = todo.status ? styles.done : "";
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item__container}>
          <div
            className={styles.checkbox__container}
            onClick={handleToggleCheck}>
            <HiCheck className={checkboxStyle} />
          </div>
          <p className={taskStyle}>{todo.task}</p>
          <span className={styles.date__text}>
            {getFormattedDate(todo.date)}
          </span>
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
          // oldTask={todo.task}
          todo={todo} //ส่ง object todo ไปทั้งก้อนเลย
          onEditTodo={onEditTodo}
        />
      )}
    </>
  );
}
