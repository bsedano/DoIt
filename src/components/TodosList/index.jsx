import { Center } from "@chakra-ui/react";
import { useTodo } from "../../providers/todo";
import { useEffect } from "react";
import Card from "../Card";
const TodosList = () => {
  const { todos, getTodos } = useTodo();
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Center
      h={"85vh"}
      w={"90%"}
      maxW={"1000px"}
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      overflowY={"auto"}
      flexWrap={"wrap"}
    >
      {todos && todos.map((todo) => <Card todo={todo} key={todo.id} />)}
    </Center>
  );
};

export default TodosList;
