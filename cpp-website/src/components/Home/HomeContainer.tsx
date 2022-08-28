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
      {...props}
    >
      {children}
    </Flex>
  );
}

export default HomeContainer;
