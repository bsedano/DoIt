import {
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Input,
  Button,
  Link,
  Text,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, InfoIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/auth";

const FormRegister = () => {
  const { authRegister } = useAuth();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha muito curta"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <VStack
      h={"100%"}
      w={["100%", "55%"]}
      bgColor={"#f1ede0"}
      justifyContent={"center"}
    >
      <FormControl
        as={"form"}
        w={["90%", "80%", "80%", "50%"]}
        h={"70%"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDir={"column"}
        onSubmit={handleSubmit(authRegister)}
      >
        <Heading fontFamily={"Roboto Mono"} fontWeight={"400"}>
          Cadastro
        </Heading>
        <FormLabel alignSelf={"flex-start"} marginBottom={"-4%"}>
          Nome
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Seu nome completo"
            variant="filled"
            h={"50px"}
            {...register("name")}
          />
          <InputLeftElement children={<InfoIcon marginTop={"10px"} />} />
        </InputGroup>
        {errors.name && (
          <Text
            fontFamily={"PT Serif"}
            m={"-15px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.name.message}
          </Text>
        )}
        <FormLabel alignSelf={"flex-start"} marginBottom={"-4%"}>
          Email
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Seu melhor email"
            variant="filled"
            h={"50px"}
            {...register("email")}
          />
          <InputLeftElement children={<EmailIcon marginTop={"10px"} />} />
        </InputGroup>
        {errors.email && (
          <Text
            fontFamily={"PT Serif"}
            m={"-15px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.email.message}
          </Text>
        )}
        <FormLabel alignSelf={"flex-start"} marginBottom={"-4%"}>
          Senha
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Uma senha bem segura"
            variant="filled"
            h={"50px"}
            {...register("password")}
            type="password"
          />
          <InputLeftElement children={<LockIcon marginTop={"10px"} />} />
        </InputGroup>
        {errors.password && (
          <Text
            fontFamily={"PT Serif"}
            m={"-15px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.password.message}
          </Text>
        )}
        <FormLabel alignSelf={"flex-start"} marginBottom={"-4%"}>
          Confirmação da senha
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Confirmação da senha"
            variant="filled"
            h={"50px"}
            {...register("passwordConfirm")}
            type="password"
          />
          <InputLeftElement children={<LockIcon marginTop={"10px"} />} />
        </InputGroup>
        {errors.passwordConfirm && (
          <Text
            fontFamily={"PT Serif"}
            m={"-15px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.passwordConfirm.message}
          </Text>
        )}
        <Button
          type="submit"
          w={"40%"}
          bgColor={"#0C0D0D"}
          color={"#F5F5F5"}
          fontFamily={"PT Serif"}
          fontWeight={"400"}
          _hover={{ filter: "brightness(0.5)" }}
        >
          Enviar
        </Button>
        <Text fontFamily={"Roboto Mono"} textAlign={"center"}>
          Já tem uma conta?
          <Link color={"#c85311"} as={ReactLink} to="/login" marginLeft={"6px"}>
            Faça seu login
          </Link>
        </Text>
      </FormControl>
    </VStack>
  );
};

export default FormRegister;
