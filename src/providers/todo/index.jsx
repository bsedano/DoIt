import { useContext, createContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
export const useTodo = () => useContext(TodoContext);
