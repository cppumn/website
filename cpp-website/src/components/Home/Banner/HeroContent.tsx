import { Flex, Stack, Button, Heading, Text } from "@chakra-ui/react";
import HeroImages from "./HeroImages";
import { CPPTheme } from "globals/CPPInfo";

type HeroContentProps = {
  props?: any;
};

// Might want to show the center of the board as the screen shrinks
const HeroContent = (props: HeroContentProps) => {
  return (
    <Flex         
      justifyContent="space-evenly"
      alignItems="center"
      position="absolute"
      width="full"
      height="full"
      color="white"
      p="1rem"
      {...props}
    >
      <Stack
        justify="center"  
        spacing="1rem"
      >
        <Text fontSize={["0.8rem", "1rem", "1rem", "1rem"]}> 
          University of Minnesota’s 
        </Text>
        <Heading fontSize={["1.5rem", "1.5rem", "2rem", "3rem"]}>
          Competitive Programming Club
        </Heading>
        <Text fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}>
          From collaborating on contests to helping with coding interviews,
          we've got it all.
        </Text>
        <Flex gap="1.5rem">
          <Button 
            bg={CPPTheme.darkblue}
            borderRadius="2rem"
            width={["100px", "150px", "200px", "200px"]}
            fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
            height="50px"
            p={8}
            _hover={{
              bg: "white",
              color: CPPTheme.darkblue
            }}
          >
            Join The Club
          </Button>
          <Button 
            variant="outline"
            borderRadius="2rem"
            width={["100px", "150px", "200px", "200px"]}
            fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
            height="50px"
            p={8}
            _hover={{
              bg: "white",
              color: CPPTheme.darkblue
            }}
          >
            What We Do
          </Button>
        </Flex>
      </Stack>
      <HeroImages />
    </Flex>
  )
}

export default HeroContent;