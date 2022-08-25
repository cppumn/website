import { Center, Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Calendar, calendarEvent } from "services/GoogleCalendarApi";
import { CPPCalendarConfig, CPPTheme } from "globals/CPPInfo";
import MeetingsTable from "components/MeetingsTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import CalendarEventList from "components/CalendarEvents/CalendarEventList";

const SchedulePage = () => {

  const [events, setEvents] = useState<calendarEvent[] | undefined>(undefined);

  useEffect(() => {
    const cal = new Calendar(CPPCalendarConfig);
    const asyncSetEvents = async () => {
      const curlist = await cal.getCurrentEvents(5);
      const upclist = await cal.getUpcomingEvents(5);
      const list = curlist.concat(upclist);
      setEvents(list.slice(0, 5))
    }
    asyncSetEvents();
  }, []);

  return (
    <Flex 
      maxW={1024}
      m="auto"
      p={2}
      flexDir="column"
      gap={4}
    >
      <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>
        Meetings
      </Heading>  
      <Text>
        We meet twice a week and our meeting information can be found below.
        Our meetings are generally open to people with all levels of experience.
        Occasionally, a meeting might be split in a beginner and advanced section if the topic is too difficult.
      </Text>
      <MeetingsTable/>
      <Heading color={CPPTheme.darkblue} fontSize="1.5rem" fontWeight={450}>
        Calendar
      </Heading>  
      <Text>
        Don't miss any of our meetings or other sessions by following our {" "}
        <ChakraLink href={CPPCalendarConfig.publicUrl} color={CPPTheme.blue} isExternal>
          calendar!
        </ChakraLink> 
        {" "} Here's a preview or our upcoming events:
      </Text>
      <Center w="100%">
        { events ? events.length === 0 ?
          <Text fontSize="1.5rem">
            <FontAwesomeIcon icon={faCircleExclamation} color="#dd0000"/>
            &nbsp; It looks like there are no more upcoming events &nbsp;
            <FontAwesomeIcon icon={faCircleExclamation} color="#dd0000"/>
          </Text>
          :
          <CalendarEventList events={events}/>
          :
          undefined
        }
      </Center>
    </Flex>
  );
};

export default SchedulePage
