import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type HomeContainerProps = {
  children: ReactNode;
  props?: any;
};

const HomeContainer = ({ children, ...props }: HomeContainerProps) => {
  return (
    <Flex
      flexDirection="column"
      maxW={1024} 
      m="auto" 
      p={2}
      gap={6}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default HomeContainer;
