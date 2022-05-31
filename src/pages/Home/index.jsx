import {
  Center,
  VStack,
  Heading,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <Center w={"100vw"} h={"100vh"} bgColor={"#f1ede0"}>
        <VStack
          w={"90%"}
          h={"250px"}
          maxW="400px"
          justifyContent={"space-between"}
        >
          <Heading fontFamily={"Roboto Mono"} fontWeight={"400"}>
            do
            <Text as={"span"} color={"#c85311"}>
              .
            </Text>
            it
          </Heading>
          <Text align={"center"} fontSize={"30px"} fontFamily={"PT Serif"}>
            Organize-se de forma fácil e efetiva
          </Text>
          <HStack w={"100%"} justifyContent="space-between">
            <Button
              w={"55%"}
              h={"35px"}
              borderRadius={"4px"}
              bgColor={"#F5F5F5"}
              fontFamily={"Roboto Mono"}
              fontSize={"14px"}
              fontWeight={"400"}
              border={"1px solid black"}
              onClick={() => navigate("/register")}
            >
              Cadastre-se
            </Button>
            <Button
              fontFamily={"Roboto Mono"}
              w={"40%"}
              h={"35px"}
              borderRadius={"4px"}
              color={"#F5F5F5"}
              bgColor={"#0C0D0D"}
              fontSize={"14px"}
              fontWeight={"400"}
              _hover={{ filter: "brightness(0.5)" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </HStack>
        </VStack>
      </Center>
    </motion.div>
  );
};

export default Home;
