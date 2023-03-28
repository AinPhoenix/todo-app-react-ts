import Todo from "../models/Todo";
import React, { createContext } from "react";

export interface TodoContext {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = createContext<TodoContext>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export default TodosContext;
