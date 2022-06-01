import { HStack, Text, VStack, Button } from "@chakra-ui/react";
import { CloseIcon, CalendarIcon, RepeatIcon } from "@chakra-ui/icons";
import { useTodo } from "../../providers/todo";

const Card = ({ todo }) => {
  console.log(todo);
  const { deleteTodo, finishTodo } = useTodo();
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const dataInicial = new Date();
  const dia = dataInicial.getDate();
  const mes = dataInicial.getMonth();
  const ano = dataInicial.getFullYear();
  const data = `${dia} de ${meses[mes]} de ${ano}`;

  return (
    <VStack
      p={4}
      margin={"20px"}
      h={"250px"}
      w={"250px"}
      minH={"200px"}
      minW={"200px"}
      border={" 2px  solid black"}
      bgColor={"white"}
      rounded={"lg"}
    >
      <HStack
        spacing={4}
        borderBottom={"1px solid black"}
        w={"100%"}
        h={"30%"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <RepeatIcon color={"orange.500"} />
        <Text
          fontFamily={"PT Serif"}
          fontWeight={"400"}
          textTransform={"capitalize"}
          textAlign={"center"}
          fontSize={"sm"}
          w={"80%"}
          textDecoration={todo.status === "finished" ? "line-through" : "none"}
        >
          {todo.description}
        </Text>

        <CloseIcon
          w={2}
          h={2}
          alignSelf={"flex-start"}
          _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
          onClick={() => deleteTodo(todo.id)}
        />
      </HStack>
      <VStack w={"100%"} h={"70%"} justifyContent={"space-around"}>
        <HStack>
          <CalendarIcon color={"orange.500"} />
          <Text fontFamily={"PT Serif"} fontWeight={"400"}>
            {data}
          </Text>
        </HStack>

        <Button
          w={"90%"}
          h={"25px"}
          color={"white"}
          bgColor={"black"}
          fontFamily={["PT Serif"]}
          fontWeight={"400"}
          fontSize={["xs"]}
          _hover={{ filter: "brightness(0.9)", transform: "scale(1.1)" }}
          onClick={() => finishTodo(todo.id)}
          disabled={todo.status === "finished" ? true : false}
        >
          Concluir
        </Button>
      </VStack>
    </VStack>
  );
};

export default Card;
