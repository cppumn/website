import { Stack, Heading, Text, AspectRatio, UnorderedList, ListItem } from "@chakra-ui/react";
import HomeContainer from "components/Home/HomeContainer";
import HomeSection from "components/Home/HomeSection";
import HomeCard from "components/Home/HomeCard";
import { CPPTheme } from "globals/CPPInfo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {

  const activities = [
    <HomeCard 
      title="Collaboration" 
      desc="
        Work during problem sessions and forums for members to
        help each other progress through the toughest problems
        they are confronted with.
      "
      icon={faPeopleGroup}
    />
  ]


  return (
    <HomeContainer>
      <HomeSection>
        <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Who are we?</Heading>
        <Text>
          We're a student group at the University of Minnesota interested 
          in competitive programming. Our goal is to create an environment
          where students can hone their speed and accuracy in solving 
          challenging problems, learn new programming concepts, and prepare
          for competitions and interviews. Our club consist of these activities:
        </Text>
        {activities}
      </HomeSection>
      <HomeSection flexDirection={["column", "column", "row", "row"]}>
        <Stack flex="1 1 auto">
          <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Looking To Get Involved?</Heading>
          <Text>
            We currently maintain a discord server listed in the University
            of Minnesota Student Hub. You can also join through the widget
            to the right. Discord is where meetings are being hosted every
            Saturday at 2pm CST.
          </Text>
        </Stack>
        <AspectRatio flex="1 0.8 auto" w="100%" h={500}>
          <iframe 
            src="https://discord.com/widget?id=646499730343460864&theme=dark" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" 
            title="Discord widget" 
          />
        </AspectRatio> 
      </HomeSection>
      <HomeSection>
        <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>Trying To Get Started?</Heading>
        <Text>
          Visit our getting started page to learn more about competitive
          programming and where to start.
        </Text>
      </HomeSection>
    </HomeContainer>
  );
}

{/* <Flex maxW={1024} m="auto" p={5} flexDir="column" gap={5}>
<Heading fontSize="2em" fontWeight={400} lineHeight={1.35}> Welcome to the Competitive Programming Club (CPP) </Heading>
<Flex flexDir="column" gap={5}>
  <Text>
    We're a student group at the University of Minnesota interested in competitive programming.
  </Text>
  <Text>
    Our goal is to create an environment where students can hone their speed and accuracy in solving challenging problems, learn new programming concepts, and prepare for competitions and interviews.
  </Text>
  <Text>
    Join our Discord to attend meetings and keep up to date!
  </Text>
</Flex>
<Heading size="lg" fontWeight={600} lineHeight={1.35}>UMN.CPP Discord</Heading>
<AspectRatio maxW={350} h={500}>
  <iframe src="https://discord.com/widget?id=646499730343460864&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord widget" />
</AspectRatio> 
</Flex> */}

export default MainPage
