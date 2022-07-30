import { Flex, Text } from "@chakra-ui/react";

import {CPPTheme} from "globals/CPPInfo"

import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <Flex flexDir="column" align="center" bg="rgba(0, 0, 0, 0.2)" p={3} gap={0}>
      <Text color={CPPTheme.blue} fontWeight={400}> Competitive Programming Club </Text>
      <Text color={CPPTheme.blue} fontWeight={300}> copyright @ cpp.umn.edu </Text>
      <FooterLinks />
    </Flex>
  );
};

export default Footer;
