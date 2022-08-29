import { Flex, Stack, Link, Button, Heading, Text, keyframes } from "@chakra-ui/react";
import HeroImages from "./HeroImages";
import { CPPTheme, discordInvite } from "globals/CPPInfo";
import { fontSizes } from "globals/fontSizes"

const slide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Might want to show the center of the board as the screen shrinks
const HeroContent = (props: any) => {
  return (
    <Flex  
      position="absolute"       
      justify="space-evenly"
      alignItems="center"
      gap="2rem"
      width="full"
      height="full"
      color="white"
      p="2rem"
      {...props}
    >
      <Stack
        justify="center" 
        spacing="1rem"
        animation={`1s ease-out 0s 1 ${slide}`}
      >
        <Text fontSize={fontSizes.xSmall}> 
          University of Minnesota’s 
        </Text>
        <Heading fontSize={fontSizes.xLarge}>
          Competitive Programming Club
        </Heading>
        <Text fontSize={fontSizes.medium}>
          From collaborating on contests to helping with coding interviews,
          we've got it all.
        </Text>
        <Flex gap="1.5rem" flexDir={{base: "column", sm: "row"}}>
          <Link
            css={{textDecoration: "none !important"}}
            href={discordInvite}
            isExternal
          >
            <Button 
              bg={CPPTheme.darkblue}
              borderRadius="2rem"
              fontSize={fontSizes.medium}
              p={["0.8rem", "1rem", "1.5rem", "2rem"]}
              _hover={{
                bg: "white",
                color: CPPTheme.darkblue
              }}
            >
              Join The Club
            </Button>
          </Link>
          <Button
            onClick={() => props.scroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
            variant="outline"
            borderRadius="2rem"
            fontSize={fontSizes.medium}
            p={["0.8rem", "1rem", "1.5rem", "2rem"]}
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
  );
}

export default HeroContent;
