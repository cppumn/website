import { Flex } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";


const NavContainer = ({ children }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      pt={4}
      pb={4}
      bg={CPPTheme.blue}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      {children}
    </Flex>
  );
}

export default NavContainer;