import { SimpleGrid, Stack, Heading, Text, AspectRatio } from "@chakra-ui/react";
import { faPeopleGroup, faTrophy, faChalkboard, faCalendar } from "@fortawesome/free-solid-svg-icons";
import HomeContainer from "components/Home/HomeContainer";
import Hero from "components/Home/Banner/Hero";
import HomeSection from "components/Home/HomeSection";
import HomeCard from "components/Home/HomeCard";
import { CPPTheme } from "globals/CPPInfo";

const CPPMainCards = [
  {
    title: "Collaboration",
    desc: `
        We provide sessions for members to help each other progress
        through the toughest problems they are confronted with.
      `,
    icon: faPeopleGroup
  },
  {
    title: "Lectures",
    desc: `
        Lectures are ran by experienced competitive programmers
        where we dive into challenging computer science topics.
      `,
    icon: faChalkboard
  },
  {
    title: "Contests",
    desc: `
        We host practice contests where beginning programmers
        to top competitors can compete at different levels.
      `,
    icon: faTrophy
  },
  {
    title: "Events",
    desc: `
        Seminars, conferences, and meetups are scheduled to 
        interact with the broader computer science community.
      `,
    icon: faCalendar
  }
]

const MainPage = () => {
  const activities = CPPMainCards.map(entry => {
    return <HomeCard key={entry.title} title={entry.title} desc={entry.desc} icon={entry.icon} />
  });

  return (
    <HomeContainer>
      <Hero />
      <HomeSection>
        <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Who are we?</Heading>
        <Text>
          We're a student group at the University of Minnesota interested 
          in competitive programming. Our goal is to create an environment
          where students can hone their speed and accuracy in solving 
          challenging problems, learn new programming concepts, and prepare
          for competitions and interviews. Our club consists of the following activities:
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
                page.
              </Text>
              <Heading color={CPPTheme.blue} fontSize="1rem" fontWeight={450}>Check Our Schedule</Heading>
              <Text >
                Visit the schedule page! It's a great place to view when our events and 
                meetings are and where they are being hosted.
              </Text>
              <Heading color={CPPTheme.blue} fontSize="1rem" fontWeight={450}>Where to Start</Heading>
              <Text>
                A great place to begin on what to cover and some tools that can help is our 
                Getting Started page. The guide provided there has been setup by the experienced 
                competitive programmers in our commmunity and is a fantastic resource for newcomers.
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
