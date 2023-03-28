import { useContext } from "react";
import TodosContext from "../context/todo-context";
import Todo from "../models/Todo";
import classes from "./TodoItem.module.css";

type Props = {
  item: Todo;
};

const TodoItem = (props: Props) => {
  const { removeTodo } = useContext(TodosContext);
  return (
    <li className={classes.item} onClick={() => removeTodo(props.item.id)}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
