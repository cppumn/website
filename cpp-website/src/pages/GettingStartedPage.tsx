import { Flex, Heading, Text } from "@chakra-ui/react";

import { CPPTheme } from "globals/CPPInfo";

import CodeforcesDescription from "components/WebsiteDescriptions/CodeforcesDescription";
import KattisDescription from "components/WebsiteDescriptions/KattisDescription";
import LeetcodeDescription from "components/WebsiteDescriptions/LeetcodeDescription";

const GettingStartedPage = () => {
  return (
    <Flex 
      maxW={1024}
      m="auto"
      p={5}
      flexDir="column"
      gap={4}
    >
      <Heading 
        color={CPPTheme.darkblue}
        fontSize="1.5rem"
        fontWeight={450}
      >
        Getting Started?
      </Heading>
      <Text> 
        Want to get involved, but don't know where to start?
        Well, don't worry just come to any of our club meetings and we'll help get you sorted.
        If you want to start on your own, we recommend registering and practicing at the following websites: 
      </Text>
      <Flex
        p={2}
        flexDir="column"
        gap={5}
      >
        <KattisDescription />
        <CodeforcesDescription />
        <LeetcodeDescription />
      </Flex>
    </Flex>
  );
};

export default GettingStartedPage;
