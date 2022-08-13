import { Text, Link as ChakraLink } from "@chakra-ui/react";
import { UnderlinedHeading } from "globals/styledComponents";

import DescriptionContainer from "./DescriptionContainer";

const Description = ({ logo, url, title, text}: any) => {
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
          {title} 
        </UnderlinedHeading>
      </ChakraLink>
      <Text> {text} </Text>
    </DescriptionContainer>
  );
};

export default Description;
