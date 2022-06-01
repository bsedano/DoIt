import { useContext, createContext } from "react";
import { useState } from "react";
import axios from "axios";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    axios.get("https://doit-bsedano.herokuapp.com/todo").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <TodoContext.Provider value={{ getTodos, todos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
export const useTodo = () => useContext(TodoContext);
