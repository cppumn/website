import { Flex, Heading, Text } from "@chakra-ui/react";

import { CPPTheme } from "globals/CPPInfo";

import CodeforcesDescription from "components/WebsiteDescriptions/CodeforcesDescription";
import KattisDescription from "components/WebsiteDescriptions/KattisDescription";
import LeetcodeDescription from "components/WebsiteDescriptions/LeetcodeDescription";

const GettingStartedPage = () => {
  return (
    <Flex maxW={1024} m="auto" p={5} flexDir="column" >
      <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Getting Started</Heading>
      <Text mt={4} mb={5}> Want to get involved, but don't know where to start? We recommend registering and practicing at the following websites: </Text>
      <Flex flexDir="column" gap={5} p={2}>
        <KattisDescription />
        <CodeforcesDescription />
        <LeetcodeDescription />
      </Flex>
    </Flex>
  );
};

export default GettingStartedPage;
