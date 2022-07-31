import CalendarEvent from "./CalendarEvent";

import type { calendarEvent } from "services/GoogleCalendarApi";
import { Flex } from "@chakra-ui/react";

const CalendarEventList = ({events}: {events: calendarEvent[]}) => {
  return (
    <Flex justifyContent="column" flexDir="column" gap={5}>
      {events.map(e => {return (<CalendarEvent key={e.id} event={e}></CalendarEvent>)})}
    </Flex>
  )
};

export default CalendarEventList;
