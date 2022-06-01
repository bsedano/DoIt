import {
  VStack,
  HStack,
  Input,
  Button,
  Text,
  InputGroup,
  InputLeftElement,
  FormControl,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTodo } from "../../providers/todo";

const DashHeader = () => {
  const { addTodo } = useTodo();
  const formSchema = yup.object().shape({
    description: yup
      .string()
      .required("Descrição obrigatória")
      .min(4, "Descrição muito curta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
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

  return (
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
      <FormControl onSubmit={handleSubmit(addTodo)} as="form">
        <HStack w={"100%"} h={"100%"}>
          <InputGroup w={"80%"}>
            <Input
              variant={["outline-transparent"]}
              placeholder="Nova tarefa"
              h={"40px"}
              border={"2px solid black"}
              fontFamily={"PT Serif"}
              {...register("description")}
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
            type="submit"
          >
            Adicionar
          </Button>
        </HStack>
      </FormControl>
      {errors.description && (
        <Text
          fontFamily={"PT Serif"}
          fontSize={"md"}
          color={"red.500"}
          textShadow={"0px 0px 0.5px black"}
        >
          {errors.description.message}
        </Text>
      )}
    </VStack>
  );
};

export default DashHeader;
