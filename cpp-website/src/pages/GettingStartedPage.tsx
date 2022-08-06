import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

import CodechefDescription from "components/WebsiteDescriptions/CodechefDescription";
import CodeforcesDescription from "components/WebsiteDescriptions/CodeforcesDescription";
import KattisDescription from "components/WebsiteDescriptions/KattisDescription";
import LeetcodeDescription from "components/WebsiteDescriptions/LeetcodeDescription";

const GettingStartedPage = () => {
  return (
    <Flex maxW={1024} m="auto" p={5} flexDir="column" >
      <Heading > Getting Started </Heading>
      <Text mb={5}> Want to get involved, but don't know where to start? We recommend the following websites: </Text>
      <Flex flexDir="column" gap={5} p={2}>
        <KattisDescription />
        <CodeforcesDescription />
        <LeetcodeDescription />
        <CodechefDescription />
      </Flex>
    </Flex>
  );
};

export default GettingStartedPage;
