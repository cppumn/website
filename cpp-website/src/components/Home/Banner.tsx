import { Flex, Link, Button, Heading, Text } from "@chakra-ui/react";
import { CPPTheme, discordInvite } from "globals/CPPInfo";

const Banner = () => {
  return (
    <Flex 
      flexDirection="column" 
      justify="center"
      align="center"
      gap="1rem"
      padding="2rem"
      bgColor={CPPTheme.blue}
    >
      <Heading 
        fontSize={["1.5rem", "1.5rem", "2rem", "3rem"]}
        color="white"
      >
        By the way, did you know we have a discord?
      </Heading>
      <Text 
        fontSize={["0.8rem", "1rem", "1rem", "1.5em"]}
        color="white"
      >
        It’s super active and a great way to meet more competitive programmers!
      </Text>
      <Link href={discordInvite} isExternal>
        <Button         
          display="inline-block" 
          fontSize={["1.5rem", "1.5rem", "2rem", "3rem"]}
          position="relative"
          color="white"
          textDecoration="none" 
          variant='outline'
          borderRadius="2rem"
          width={["225px", "300px", "300px", "500px"]}
          height={["50px", "100px", "100px", "100px"]}
          _hover={{
            bg: "white",
            color: CPPTheme.blue
          }}
        >
          Join The Discord
        </Button>
      </Link>
    </Flex>
  );
}

export default Banner;