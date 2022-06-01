import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DashHeader from "../../components/DashHeader";
import TodosList from "../../components/TodosList";

const DashBoard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <Center w={"100vw"} h={"100vh"} bgColor={"#f1ede0"} flexDir={"column"}>
        <DashHeader />
        <TodosList />
      </Center>
    </motion.div>
  );
};

export default DashBoard;
