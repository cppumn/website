import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { CPPTheme } from "globals/CPPInfo";

import CodeforcesDescription from "components/WebsiteDescriptions/CodeforcesDescription";
import KattisDescription from "components/WebsiteDescriptions/KattisDescription";
import LeetcodeDescription from "components/WebsiteDescriptions/LeetcodeDescription";

const Topics = [
  "Graphs",
  "Dynamic Programming",
  "..."
]

const GettingStartedPage = () => {
  return (
    <Flex 
      maxW={1024}
      m="auto"
      p={2}
      flexDir="column"
      gap={4}
    >
      <Heading 
        color={CPPTheme.darkblue}
        fontSize="1.5rem"
        fontWeight={450}
      >
        Getting Started
      </Heading>
      <Text> 
        Want to get involved, but don't know where to start?
        Well, don't worry just come to any of our club meetings and we'll help get you sorted.
        If you want to start on your own, we recommend registering and practicing at the following websites: 
      </Text>
      <Flex
        p={2}
        flexDir="column"
        gap={5}
      >
        <KattisDescription />
        <CodeforcesDescription />
        <LeetcodeDescription />
      </Flex>
      <Heading 
        color={CPPTheme.darkblue}
        fontSize="1.5rem"
        fontWeight={450}
      >
        Important Topics
      </Heading>
      <Text>
        Here's a list of topics that often come up in programming competitions.
        Don't worry if you don't know some of these since we will be covering most of them during our meetings.
        Regardless, it would be useful for you to familiarize yourself with these topics:
      </Text>
      <UnorderedList>
        {
          Topics.map(t => 
            <ListItem> 
              {t} 
            </ListItem>  
          )
        }
      </UnorderedList>
    </Flex>
  );
};

export default GettingStartedPage;
