import { Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Calendar, calendarEvent } from "services/GoogleCalendarApi";
import { CPPCalendarConfig } from "globals/CPPInfo";

import CalendarEventList from "components/CalendarEvents/CalendarEventList";

const SchedulePage = () => {

  const [events, setEvents] = useState<calendarEvent[]>([]);

  useEffect(() => {
    const cal = new Calendar(CPPCalendarConfig);
    const asyncSetEvents = async () => {
      const curlist = await cal.getPreviousEvents(5);
      const upclist = await cal.getUpcomingEvents(5);
      const list = curlist.concat(upclist);
      setEvents(list.slice(0, 5))
    }
    asyncSetEvents();
  }, []);

  return (
    <Flex maxW={1024} m="auto" p={5} flexDir="column">
      <Center w="100%">
        <CalendarEventList events={events}/>
      </Center>
    </Flex>
  );
};

export default SchedulePage
