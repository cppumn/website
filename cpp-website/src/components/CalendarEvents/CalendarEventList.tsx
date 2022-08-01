import CalendarEvent from "./CalendarEvent";

import type { calendarEvent } from "services/GoogleCalendarApi";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";

const CalendarEventList = ({events}: {events: calendarEvent[]}) => {
  return (
    <Flex flexDir="column" w="100%">
      { events.length > 0 ? <CalendarEvent key={events[0].id} event={events[0]}/> : undefined}
      {events.slice(1).map(e => {return (
        <Box key={e.id}>
          <Divider borderColor={CPPTheme.blue} borderWidth={2} marginBottom={5} marginTop={5}/>
          <CalendarEvent event={e} />
        </Box>
      )})}
    </Flex>
  )
};

export default CalendarEventList;
