import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

import { CPPTheme } from "globals/CPPInfo";

const DescriptionContainer = ({ children, icon, url }: any) => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center" background={CPPTheme.blue} p={5} borderRadius={20}>
      <Box minW={128} maxW={128}>
        <ChakraLink href={url} isExternal>
          <Image src={icon}/>
        </ChakraLink>
      </Box>
      <Flex flexDir="column" w="100%" color="white" marginTop={[5, 0]}>
        {children}
      </Flex>
    </Flex>
  );
};

export default DescriptionContainer;
