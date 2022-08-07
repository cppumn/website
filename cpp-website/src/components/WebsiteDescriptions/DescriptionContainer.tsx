import { Flex, Image } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo";

const DescriptionContainer = ({ children, icon }: any) => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center" background={CPPTheme.blue} p={5} borderRadius={20}>
      <Image boxSize={128} src={icon}/>
      <Flex flexDir="column" w="100%" color="white" marginTop={[5, 0]}>
        {children}
      </Flex>
    </Flex>
  );
};

export default DescriptionContainer;
