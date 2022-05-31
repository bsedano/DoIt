import {
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  VStack,
  Input,
  Button,
  Link,
  Text,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailIcon, LockIcon, InfoIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import man from "../../assets/man.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleRegister = (data) => {
    console.log(data);
    axios     

      .post(`https://api-nodejs-todolist.herokuapp.com/user/register`, {
        ...data,
        age: 20,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.user._id);
        toast({
          position: "top-right",
          title: "Conta criada.",
          description: "Sua conta foi criada com sucesso.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top-right",
          title: "Erro ao criar conta.",
          description: "Verifique seus dados e tente novamente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <HStack w={"100vw"} h={"100vh"}>
        <Center h={["0%", "100%"]} w={["0%", "45%"]} bgColor={"black"}>
          <Image src={man} w={["50%", "80%"]} />
        </Center>
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
            onSubmit={handleSubmit(handleRegister)}
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
              <Link
                color={"#c85311"}
                as={ReactLink}
                to="/login"
                marginLeft={"6px"}
              >
                Faça seu login
              </Link>
            </Text>
          </FormControl>
        </VStack>
      </HStack>
    </motion.div>
  );
};
export default Register;
