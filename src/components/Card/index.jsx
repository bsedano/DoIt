import { HStack, Text, VStack, Button } from "@chakra-ui/react";
import { CloseIcon, CalendarIcon, RepeatIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ todo, toDos, setToDos }) => {
  const [number, setNumber] = useState(0);
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

  const handleRemove = (todo) => {
    setToDos(toDos.filter((item) => item !== todo));
  };

  const handleComplete = (todo) => {
    console.log(toDos);
    todo.completed = true;
    setNumber(number + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
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
            textDecoration={todo.completed === true ? "line-through" : "none"}
          >
            {todo.description}
          </Text>

          <CloseIcon
            w={2}
            h={2}
            alignSelf={"flex-start"}
            _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
            onClick={() => handleRemove(todo)}
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
            onClick={() => handleComplete(todo)}
            disabled={todo.completed === true ? true : false}
          >
            Concluir
          </Button>
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default Card;
