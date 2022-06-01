import { useContext, createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "..";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(null);

  const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const getTodos = async () => {
    axios.get(`${url}/todo`, token).then((res) => {
      setTodos(res.data);
      console.log(res.data);
    });
  };

  const addTodo = async (data) => {
    await axios
      .post(
        `${url}/todo`,
        {
          ...data,
          userId: user.id,
          status: "pending",
        },

        token
      )
      .then((res) => {
        console.log(res);
        toast.success("Tarefa adicionada com sucesso!");
        getTodos();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };
  const finishTodo = async (id) => {
    await axios
      .patch(
        `${url}/todo/${id}`,
        { status: "finished", userId: user.id },
        token
      )
      .then((res) => {
        console.log(res);
        toast.success("Tarefa concluída com sucesso!");
        getTodos();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`${url}/todo/${id}`, token)
      .then((res) => {
        console.log(res);
        toast.success("Tarefa removida com sucesso!");
        getTodos();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };
  return (
    <TodoContext.Provider
      value={{ getTodos, todos, addTodo, deleteTodo, finishTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
export const useTodo = () => useContext(TodoContext);
