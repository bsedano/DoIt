import {
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Center,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

import { useToast } from "@chakra-ui/react";

import Card from "../../components/Card";

const DashBoard = () => {
  const toast = useToast();
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
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = meses[hoje.getMonth()];
  const dia = hoje.getDate();
  const [newToDo, setNewToDo] = useState({ description: "" });
  const [toDos, setToDos] = useState([]);

  const handleChange = (data) => {
    if (data.description !== "") {
      data.id = toDos.length + 1;
      setToDos([...toDos, data]);
      setNewToDo({ description: "" });
    } else {
      toast({
        position: "top-right",
        title: "Erro ao criar tarefa.",
        description: "Não é possível adicionar tarefas em branco.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <Center w={"100vw"} h={"100vh"} bgColor={"#f1ede0"} flexDir={"column"}>
        <VStack
          marginTop={10}
          w={["90%", "80%", "80%"]}
          h={"15vh"}
          maxW={"800px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={["md", "xl"]}
            fontFamily={"PT Serif"}
            fontWeight={"400"}
            alignSelf={"flex-start"}
            marginBottom={["-35px", "-40px"]}
          >
            {dia} de {mes} de {ano}
          </Text>
          <HStack w={"100%"} h={"100%"}>
            <InputGroup w={"80%"}>
              <Input
                variant={["outline-transparent"]}
                placeholder="Nova tarefa"
                h={"40px"}
                border={"2px solid black"}
                value={newToDo.description}
                onChange={(e) =>
                  setNewToDo({ ...newToDo, description: e.target.value })
                }
                fontFamily={"PT Serif"}
              />
              <InputLeftElement children={<EditIcon />} />
            </InputGroup>

            <Button
              color={"white"}
              bgColor={"black"}
              fontFamily={"PT Serif"}
              fontWeight={"400"}
              w={"20%"}
              h={"40px"}
              fontSize={["xs", "md"]}
              _hover={{ filter: "brightness(0.5)", transform: "scale(1.1)" }}
              onClick={() => handleChange(newToDo)}
            >
              Adicionar
            </Button>
          </HStack>
        </VStack>
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
          {toDos.map((todo, index) => (
            <Card todo={todo} key={index} toDos={toDos} setToDos={setToDos} />
          ))}
        </Center>
      </Center>
    </motion.div>
  );
};

export default DashBoard;
