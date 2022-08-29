import { Flex, Text } from "@chakra-ui/react";

import {CPPTheme} from "globals/CPPInfo";
import { fontSizes } from "globals/fontSizes";

import UofMFooter from "components/UofM/UofMFooter";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      bg={CPPTheme.darkblue}
      color="white"
      fontSize={['sm', 'md', 'lg', 'lg']}
      p={3}
      gap={1}
    >
      <Text fontWeight={400}> Competitive Programming Club </Text>
      <Text fontWeight={300}> Copyright &copy; cpp.umn.edu </Text>
      <FooterLinks />
      <UofMFooter />
    </Flex>
  );
};

export default Footer;
