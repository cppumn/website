import { Flex, Grid } from "@chakra-ui/react";
import { faPeopleGroup, faTrophy, faChalkboard, faCalendar } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "components/SectionTitle";
import AboutCard from "./AboutCard";
import AboutLink from "./AboutLink";
import { discordInvite, CPPCalendarConfig, youtube } from "globals/CPPInfo";

type AboutProps = {
  containerRef: React.MutableRefObject<null>,
  props?: any
}

const CPPMainCards = [
  {
    title: "Collaboration",
    desc: `
        We provide sessions for members to help each other progress
        through the toughest problems they are confronted with.
      `,
    icon: faPeopleGroup,
    links: [<AboutLink link={discordInvite} isExternal={true} desc={"Join Our Discord"} />]
  },
  {
    title: "Lectures",
    desc: `
        Lectures are ran by experienced competitive programmers
        where we dive into challenging computer science topics.
        Some lectures will be recorded on our YouTube channel.
      `,
    icon: faChalkboard,
    links: [<AboutLink link={CPPCalendarConfig.publicUrl} isExternal={true} desc={"Follow Our Calendar"} />,
            <AboutLink link={youtube} isExternal={true} desc={"Watch Recorded Lectures"} />
    ]
  },
  {
    title: "Contests",
    desc: `
        We host practice contests where beginning programmers
        to top competitors can compete at different levels.
      `,
    icon: faTrophy,
    links: [<AboutLink link={"https://open.kattis.com/universities/umn.edu"} isExternal={true} desc={"See Our Ranking List On Kattis"} />]
  },
  {
    title: "Events",
    desc: `
        Seminars, conferences, and meetups are scheduled to 
        interact with the broader computer science community.
      `,
    icon: faCalendar,
    links: [<AboutLink link="/schedule" isExternal={false} desc={"See Upcoming Events"} />]
  }
];

const About = ({ containerRef, ...props }: AboutProps) => {

  const activities = CPPMainCards.map(entry => {
    const links: React.ReactNode[] = [entry.links];
    return (
      <AboutCard 
        key={entry.title} 
        title={entry.title} 
        desc={entry.desc} 
        icon={entry.icon} 
        links={links} />
    )
  });

  return (
    <Flex 
      flexDirection="column"
      ref={containerRef}
      {...props}
    >
      <SectionTitle content="Why Join?" />
      <Grid
        gridTemplateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]}
        gap="2rem"
        marginLeft={["1rem","2rem","3rem","4rem"]}
        marginRight={["1rem","2rem","3rem","4rem"]}
        marginTop="4rem"
        marginBottom="4rem"
      >
        {activities}
      </Grid>
    </Flex>
  );
}

export default About;