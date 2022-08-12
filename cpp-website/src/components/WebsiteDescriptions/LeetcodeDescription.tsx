import { Heading, Text } from "@chakra-ui/react";

import DescriptionContainer from "./DescriptionContainer";

const logo = require("img/logos/LeetCode_logo_black512.png");
const url = "https://leetcode.com/";

const LeetcodeDescription = () => {
  return (
    <DescriptionContainer icon={logo} url={url}>
      <Heading fontSize="1.25rem" fontWeight={450}> LeetCode </Heading>
      <Text> You have probably already heard of LeetCode, but in case you haven't, it is also an excellent resource...</Text>
    </DescriptionContainer>
  );
};

export default LeetcodeDescription;
