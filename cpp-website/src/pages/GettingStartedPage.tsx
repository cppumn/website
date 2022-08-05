import { Divider, Flex, Heading, Image } from "@chakra-ui/react";

import CodechefDescription from "components/WebsiteDescriptions/CodechefDescription";
import CodeforcesDescription from "components/WebsiteDescriptions/CodeforcesDescription";
import KattisDescription from "components/WebsiteDescriptions/KattisDescription";
import LeetcodeDescription from "components/WebsiteDescriptions/LeetcodeDescription";

const GettingStartedPage = () => {
  return (
    <Flex maxW={1024} m="auto" p={5} flexDir="column" >
      <Heading mb={5}> Getting Started </Heading>
      <Flex flexDir="column" gap={5} backgroundColor="#EEEEEE">
        <KattisDescription />
        <Divider borderWidth={1} borderColor="black"/>
        <CodeforcesDescription />
        <Divider borderWidth={1} borderColor="black"/>
        <LeetcodeDescription />
        <Divider borderWidth={1} borderColor="black"/>
        <CodechefDescription />
      </Flex>
    </Flex>
  );
};

export default GettingStartedPage;
