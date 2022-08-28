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
      m="auto" 
      gap={6}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default HomeContainer;
