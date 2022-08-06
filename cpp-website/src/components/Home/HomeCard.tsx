import { Flex, Stack, Box, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CPPTheme } from "globals/CPPInfo";

const HomeCard = ({ title, desc, icon, color, ...props }: any) => {
  return (
    <Flex
      gap={2}
      {...props}
      w="80%"
    >
      <Box flex="1 1 auto">
        <FontAwesomeIcon icon={icon} color={CPPTheme.lightblue} style={{
          display: "inline-block",
          width: "100%",
          height: "100%"
        }} />
      </Box>
      <Stack flex="1 1 auto">
        <Heading fontSize="1.25rem" fontWeight={450} color={CPPTheme.blue}>{title}</Heading>
        <Text>{desc}</Text>
      </Stack>
    </Flex>
  );
}

export default HomeCard;