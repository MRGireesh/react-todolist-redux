import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToDoList } from "../../features/TodoList";
import style from "./List.module.css";

export const List = () => {
  const list = useSelector((state) => state.list.value.list);
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  // function to add todo to the list.
  const addTolist = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      toDo: todoValue,
    };
    const newList = [...list, task];
    dispatch(updateToDoList({ list: newList }));
  };

  
  // function to delete todo from the list.
  const deleteToDO = (id) => {
    const newList = list.filter((task) => task.id !== id);
    dispatch(updateToDoList({ list: newList }));
  };

  return (
    <div className={style.todoListBlock}>
      <div className={style.inputform}>
        <input
        placeholder="Enter todo"
        className={style.inputValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={addTolist} className={style.addButton}>Add</button>
      </div>
      <ul className={style.allList}>
        {list?.map((task) => (
          <li id={task.id} className={style.singleTodo}>
            <span className={style.todoText} >{task.toDo}</span>
            <button className={style.deleteButton} onClick={() => deleteToDO(task.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
