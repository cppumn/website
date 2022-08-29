import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { fontSizes } from "globals/fontSizes";

type AboutLinkProps = {
  link: string,
  desc: string,
  isExternal: boolean,
  props?: any
};

const AboutLink = ({ link, desc, isExternal, ...props }: AboutLinkProps) => {
  return (
    <Box 
      {...props}
    >
      {isExternal && 
        <ChakraLink 
          href={link} 
          fontSize={fontSizes.xSmall} 
          isExternal
        >
          <Flex align="center" gap="0.25rem">
            <ExternalLinkIcon />
            {desc}
          </Flex>
        </ChakraLink>}
      {!isExternal && 
        <Link to={link}>
            <ChakraLink as="div" fontSize={fontSizes.xSmall}>
              <Flex align="center" gap="0.25rem">
                <LinkIcon />
                {desc}
              </Flex>
            </ChakraLink>
          </Link>}
    </Box>
  );
}

export default AboutLink;