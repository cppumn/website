import { Flex, Link as ChakraLink, Divider } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {email, githubOrg, discordInvite} from "globals/CPPInfo"

const FooterLinks = () => {
  return (
    <Flex flexDir="row" align="center" fontSize={24} gap={3} h={5} mt={1}>
      <ChakraLink href={`mailto:${email}`} title={email} isExternal>
        <FontAwesomeIcon icon={faEnvelope}/>
      </ChakraLink>
      <Divider orientation="vertical" borderColor="#000000"/>
      <ChakraLink href={githubOrg} title={githubOrg} isExternal>
        <FontAwesomeIcon icon={faGithub}/>
      </ChakraLink>
      <Divider orientation="vertical" borderColor="#000000"/>
      <ChakraLink href={discordInvite} title={discordInvite} isExternal>
        <FontAwesomeIcon icon={faDiscord} />
      </ChakraLink>
    </Flex>
  );
};

export default FooterLinks;
