import { useContext } from "react";
import TodosContext from "../context/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos = () => {
  const { items } = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
