import { HStack, Image, Heading } from "@chakra-ui/react";
import { logo } from "globals/CPPInfo"

const Logo = () => {
  return (
    <HStack spacing="0.5rem">
      <Image 
        boxSize={["3rem", "3.75rem", "4.75rem", "5rem"]}
        src={logo} 
        alt="logo of competitive programming club" 
        maxWidth="100%"
        height="auto"
      />
      <Heading as='h1' size={['md', 'md', 'lg', 'xl']}>
        CPP UMN
      </Heading>
    </HStack>
  );
}

export default Logo;