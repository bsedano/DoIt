import { HStack, VStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import FormLogin from "../../components/FormLogin";
import AsideComponent from "../../components/AsideComponent";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <VStack>
        <HStack w={"100vw"} h={"100vh"}>
          <FormLogin />
          <AsideComponent />
        </HStack>
      </VStack>
    </motion.div>
  );
};
export default Login;
