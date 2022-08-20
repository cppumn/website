import { Center, Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UnderlinedText } from "globals/styledComponents";

import { Calendar, calendarEvent } from "services/GoogleCalendarApi";
import { CPPCalendarConfig, CPPTheme } from "globals/CPPInfo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import CalendarEventList from "components/CalendarEvents/CalendarEventList";

const SchedulePage = () => {

  const [events, setEvents] = useState<calendarEvent[]>([]);

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
        Schedule
      </Heading>  
      <Text>
        Don't miss any of our meetings or other sessions by following our&nbsp;
        <ChakraLink href={CPPCalendarConfig.publicUrl} color={CPPTheme.blue} isExternal>
          calendar!
        </ChakraLink> 
        &nbsp;Here's a preview or our upcoming events:
      </Text>
      <Center w="100%">
        { events.length === 0 ?
          <Text fontSize="1.5rem">
            <FontAwesomeIcon icon={faCircleExclamation} color="#dd0000"/>
            &nbsp; It looks like there are no more upcoming events &nbsp;
            <FontAwesomeIcon icon={faCircleExclamation} color="#dd0000"/>
          </Text>
          :
          <CalendarEventList events={events}/>
        }
      </Center>
    </Flex>
  );
};

export default SchedulePage
