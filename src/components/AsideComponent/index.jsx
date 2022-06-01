import { Center, Image } from "@chakra-ui/react";
import woman from "../../assets/images/woman.svg";
import man from "../../assets/images/man.svg";

const AsideComponent = ({ type }) => {
  return (
    <Center h={["0%", "100%"]} w={["0%", "45%"]} bgColor={"black"}>
      <Image src={type === "register" ? man : woman} w={["50%", "80%"]} />
    </Center>
  );
};

export default AsideComponent;
