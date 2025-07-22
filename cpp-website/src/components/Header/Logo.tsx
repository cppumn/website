import { HStack, Image, Heading } from "@chakra-ui/react";
import { logo } from "globals/CPPInfo"

const Logo = () => {
  return (
    <Image 
      maxHeight="6rem"
      src={logo} 
      alt="logo of competitive programming club" 
      maxWidth="100%"
      height="auto"
    />
  );
}

export default Logo;