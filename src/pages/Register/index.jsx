import { HStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import AsideComponent from "../../components/AsideComponent";
import FormRegister from "../../components/FormRegister";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <HStack w={"100vw"} h={"100vh"}>
        <AsideComponent type="register" />
        <FormRegister />
      </HStack>
    </motion.div>
  );
};
export default Register;
