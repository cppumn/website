import CalendarEvent from "./CalendarEvent";

import type { calendarEvent } from "services/GoogleCalendarApi";
import { Divider, Flex } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";

const CalendarEventList = ({events}: {events: calendarEvent[]}) => {
  return (
    <Flex flexDir="column" gap={5} w="100%">
      { events.length > 0 ? <CalendarEvent event={events[0]}/> : undefined}
      {events.slice(1).map(e => {return (
        <>
          <Divider borderColor={CPPTheme.blue} borderWidth={2}/>
          <CalendarEvent key={e.id} event={e} />
        </>
      )})}
    </Flex>
  )
};

export default CalendarEventList;
