import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";
import TodosContext, { TodoContext } from "./todo-context";

type Props = {
  children: ReactNode;
};

const TodosContextProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((todosList) => {
      return [...todosList, newTodo];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((todosList) => {
      return todosList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const contextValue: TodoContext = { items: todos, addTodo: addTodoHandler, removeTodo: removeTodoHandler };
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
