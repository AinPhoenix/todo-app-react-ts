import { useRef, FormEvent, useContext } from "react";
import TodosContext from "../context/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (!enteredText) {
      return;
    }

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
    todoTextInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Text</label>
      <input type="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
