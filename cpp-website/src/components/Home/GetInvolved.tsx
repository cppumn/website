import { Flex, Stack, AspectRatio, Heading, Text } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";
import SectionTitle from "components/SectionTitle";
import { fontSizes } from "globals/fontSizes";

const GetInvolved = () => {
  return (
    <Flex flexDirection="column">
      <SectionTitle content="Get Involved" />
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        marginLeft={["1rem","2rem","3rem","4rem"]}
        marginRight={["1rem","2rem","3rem","4rem"]}
        marginTop="4rem"
        gap="2rem"
      >
        <Stack flex="1 1 auto" spacing="1rem">
          <Heading 
            color={CPPTheme.blue} 
            fontSize={fontSizes.medium}
            fontWeight={450}
          >
            Interact
          </Heading>
          <Text fontSize={fontSizes.small}>
            We currently maintain a discord server listed in the University
            of Minnesota Student Hub. This is a great place to interact with existing
            or new members to the club. You can join through the widget
            on the page. We also have a email you can directly contact through the contact
            page.
          </Text>
          <Heading 
            color={CPPTheme.blue} 
            fontSize={fontSizes.medium}
            fontWeight={450}
          >
            Check Our Schedule
          </Heading>
          <Text fontSize={fontSizes.small}>
            Visit the schedule page! It's a great place to view when our events and 
            meetings are and where they are being hosted.
          </Text>
          <Heading 
            color={CPPTheme.blue} 
            fontSize={fontSizes.medium}
            fontWeight={450}
          >
            Where To Start
          </Heading>
          <Text fontSize={fontSizes.small}>
            A great place to begin on what to cover and some tools that can help is our 
            Getting Started page. The guide provided there has been setup by the experienced 
            competitive programmers in our commmunity and is a fantastic resource for newcomers.
          </Text>
        </Stack>
        <AspectRatio flex="1 0.75 auto" w="100%" h={600}>
          <iframe 
            src="https://discord.com/widget?id=646499730343460864&theme=dark" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
            title="Discord widget" 
          />
        </AspectRatio> 
      </Flex>
    </Flex>
  );
}

export default GetInvolved;