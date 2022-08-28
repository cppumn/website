import { Flex, Box, Text } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

const Mission = () => {
  return (
    <Flex flexDirection="column" position="relative" top="-55px">
      <SectionTitle content="Our Mission" />
      <Box 
        marginLeft={["1rem","2rem","3rem","4rem"]}
        marginRight={["1rem","2rem","3rem","4rem"]}
        marginTop="4rem"
        marginBottom="4rem"
      >
        <Text fontSize={["1rem", "1rem", "1.5rem", "1.5rem"]}>
          We're a student group at the University of Minnesota interested 
          in competitive programming. Our goal is to create an environment
          where students can hone their speed and accuracy in solving 
          challenging problems, learn new programming concepts, and prepare
          for competitions and interviews.
        </Text>
      </Box>
    </Flex>
  );
}

export default Mission;