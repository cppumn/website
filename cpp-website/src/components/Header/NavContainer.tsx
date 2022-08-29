import { Flex } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";
import { ReactNode } from "react";

type NavContainerProps = {
  children: ReactNode;
};

const NavContainer = ({ children }: NavContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      pt={4}
      pb={4}
      bg={CPPTheme.darkblue}
      color="white"
    >
      {children}
    </Flex>
  );
}

export default NavContainer;