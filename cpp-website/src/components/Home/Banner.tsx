import { Flex, Link, Button, Heading, Text, Divider } from "@chakra-ui/react";
import { CPPTheme, discordInvite } from "globals/CPPInfo";
import { fontSizes } from "globals/fontSizes";

const Banner = () => {
  return (
    <Flex 
      flexDirection="column" 
      justify="center"
      align="center"
      gap="1rem"
      padding="2rem"
      paddingBottom={0}
      bgColor={CPPTheme.darkblue}
    >
      <Heading 
        fontSize={fontSizes.xLarge}
        color="white"
      >
        In case you haven't noticed, we have a Discord!
      </Heading>
      <Text 
        fontSize={fontSizes.xSmall}
        color="white"
      >
        It’s super active and a great way to meet more competitive programmers!
      </Text>
      <Link 
        css={{textDecoration: "none !important"}}
        href={discordInvite}
        isExternal
      >
        <Button
          fontSize={fontSizes.large}
          color="white"
          textDecoration="none"
          variant='outline'
          borderRadius="2rem"
          p={[6, 6, 8, 10]}
          _hover={{
            bg: "white",
            color: CPPTheme.blue
          }}
        >
          Join The Discord
        </Button>
      </Link>
      <Divider mt="1rem" borderWidth={1}/>
    </Flex>
  );
}

export default Banner;