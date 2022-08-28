import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeroContainerProps = {
  children: ReactNode;
  props?: any;
};

const HeroContainer = ({ children, ...props }: HeroContainerProps) => {
  return (
    <Flex 
      height="75vh" 
      position="relative"
      overflow="hidden"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default HeroContainer;