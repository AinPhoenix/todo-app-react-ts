import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodosContextProvider from "./context/TodosContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
