import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { UnderlinedHeading } from "globals/styledComponents";

import DescriptionContainer from "./DescriptionContainer";

const logo = require("img/logos/Codeforces_logo512_square.png");
const url = "https://codeforces.com/";

const CodeforcesDescription = () => {
  return (
    <DescriptionContainer icon={logo} url={url}>
      <ChakraLink href={url} isExternal>
        <UnderlinedHeading 
          display="inline-block" 
          position="relative"
          fontSize="1.25rem"
          fontWeight={450}
          color="white"
        > 
          Codeforces 
        </UnderlinedHeading>
      </ChakraLink>
      <Text> Codeforces is also an excellent resource...</Text>
    </DescriptionContainer>
  );
};

export default CodeforcesDescription;
