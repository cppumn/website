import { Flex, Text, Link as ChakraLink, Divider } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";

const CPPTheme = {
  lightblue: "#649bd3",
  blue: "#00599d",
  darkblue: "#014284"
};

const Footer = () => {
  return (
    <Flex flexDir="column" align="center" bg="rgba(0, 0, 0, 0.2)" p={5} gap={0}>
      <Text color={CPPTheme.blue} fontWeight={400}> Competitive Programming Club </Text>
      <Text color={CPPTheme.blue} fontWeight={400}> copyright @ cpp.umn.edu </Text>
      <Flex flexDir="row" align="center" fontSize={24} gap={3} h={5} mt={1}>
        <ChakraLink href="https://gmail.com" isExternal>
          <FontAwesomeIcon icon={faEnvelope}/>
        </ChakraLink>
        <Divider orientation="vertical" borderColor="#000000"/>
        <ChakraLink href="https://github.com/cppumn" isExternal>
          <FontAwesomeIcon icon={faGithub}/>
        </ChakraLink>
        <Divider orientation="vertical" borderColor="#000000"/>
        <ChakraLink href="https://discord.gg" isExternal>
          <FontAwesomeIcon icon={faDiscord} />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Footer;
