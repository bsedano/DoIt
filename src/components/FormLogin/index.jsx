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
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/auth";

const FormLogin = () => {
  const { authLogin } = useAuth();
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(4, "Senha muito curta"),
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
        h={"50%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDir={"column"}
        onSubmit={handleSubmit(authLogin)}
      >
        <Heading fontFamily={"Roboto Mono"} fontWeight={"400"}>
          Login
        </Heading>
        <FormLabel alignSelf={"flex-start"} marginBottom={["-5%"]}>
          Email
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Seu email"
            variant="filled"
            h={"50px"}
            type="email"
            {...register("email")}
          />
          <InputLeftElement children={<EmailIcon marginTop={"12px"} />} />
        </InputGroup>
        {errors.email && (
          <Text
            fontFamily={"PT Serif"}
            m={"-18px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.email.message}
          </Text>
        )}
        <FormLabel alignSelf={"flex-start"} marginBottom={"-5%"}>
          Senha
        </FormLabel>
        <InputGroup w={"100%"}>
          <Input
            placeholder="Sua senha ultra secreta"
            variant="filled"
            h={"50px"}
            type="password"
            {...register("password")}
          />
          <InputLeftElement children={<LockIcon marginTop={"12px"} />} />
        </InputGroup>
        {errors.password && (
          <Text
            fontFamily={"PT Serif"}
            m={"-18px"}
            fontSize={"xs"}
            color={"red.500"}
            textShadow={"0px 0px 0.5px black"}
          >
            {errors.password.message}
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
          Não tem conta?
          <Link
            color={"#c85311"}
            as={ReactLink}
            to="/register"
            marginLeft={"6px"}
          >
            Faça seu cadastro
          </Link>
        </Text>
      </FormControl>
    </VStack>
  );
};

export default FormLogin;
