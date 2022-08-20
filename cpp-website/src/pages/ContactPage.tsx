import { Flex, Heading } from "@chakra-ui/react";

import { CPPTheme } from "globals/CPPInfo";

const ContactPage = () => {
  return (
    <Flex maxW={1024} m="auto" p={2}>
      <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Contact</Heading>
    </Flex>
  );
};

export default ContactPage;
