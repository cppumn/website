import { Heading, Text } from "@chakra-ui/react";

import DescriptionContainer from "./DescriptionContainer";

const logo = require("img/logos/Codechef_logo512.png");
const url = "https://www.codechef.com/";

const CodechefDescription = () => {
  return (
    <DescriptionContainer icon={logo} url={url}>
      <Heading fontSize="1.25rem" fontWeight={450}> CodeChef </Heading>
      <Text> Do I even have to say it...</Text>
    </DescriptionContainer>
  );
};

export default CodechefDescription;
