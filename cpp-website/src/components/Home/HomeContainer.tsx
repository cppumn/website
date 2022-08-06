import { Flex } from "@chakra-ui/react";

const HomeContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      flexDirection="column"
      maxW={1024} 
      m="auto" 
      p={5}
      gap={6}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default HomeContainer;