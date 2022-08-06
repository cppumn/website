import { SimpleGrid, Stack, Heading, Text, AspectRatio } from "@chakra-ui/react";
import HomeContainer from "components/Home/HomeContainer";
import HomeSection from "components/Home/HomeSection";
import HomeCard from "components/Home/HomeCard";
import { CPPTheme, CPPMainCards } from "globals/CPPInfo";

const MainPage = () => {
  const activities = CPPMainCards.map(entry => {
    return <HomeCard key={entry.title} title={entry.title} desc={entry.desc} icon={entry.icon} />
  });

  return (
    <HomeContainer>
      <HomeSection>
        <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Who are we?</Heading>
        <Text>
          We're a student group at the University of Minnesota interested 
          in competitive programming. Our goal is to create an environment
          where students can hone their speed and accuracy in solving 
          challenging problems, learn new programming concepts, and prepare
          for competitions and interviews. Our club consist of the following activities:
        </Text>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={6}>
          {activities}
        </SimpleGrid>
      </HomeSection>
      <HomeSection flexDirection={["column", "column", "row", "row"]}>
        <Stack flex="1 1 auto">
          <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Looking To Get Involved?</Heading>
            <Stack>
              <Heading color={CPPTheme.blue} fontSize="1rem" fontWeight={450}>Interact</Heading>
              <Text>
                We currently maintain a discord server listed in the University
                of Minnesota Student Hub. This is a great place to interact with existing
                or new members to the club. You can join through the widget
                on the page. We also have a email you can directly contact through the contact
                page or on the icon in the footer.
              </Text>
              <Heading color={CPPTheme.blue} fontSize="1rem" fontWeight={450}>Check Our Schedule</Heading>
              <Text >
                Visit the schedule page! Its a great place to view when our events and 
                meetings are and where they are being hosted.
              </Text>
              <Heading color={CPPTheme.blue} fontSize="1rem" fontWeight={450}>Where to Start</Heading>
              <Text>
                We think a great place to begin on what to cover and some tools that can help is our 
                Getting Started page. The guide provided there has been setup by the experienced 
                competitive programmers in our commmunity and is a great place to begin.
              </Text>
          </Stack>
        </Stack>
        <AspectRatio flex="1 0.75 auto" w="100%" h={400}>
          <iframe 
            src="https://discord.com/widget?id=646499730343460864&theme=dark" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
            title="Discord widget" 
          />
        </AspectRatio> 
      </HomeSection>
    </HomeContainer>
  );
}

export default MainPage
