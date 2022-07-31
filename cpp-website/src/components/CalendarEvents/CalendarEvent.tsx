import { Flex, Heading, Text } from "@chakra-ui/react";
import type { calendarEvent } from "services/GoogleCalendarApi";

import { CPPTheme } from "globals/CPPInfo";

const CalendarEvent = ({event}: {event : calendarEvent}) => {
  return (
    <Flex justifyContent="center" flexDir="column" border="3px solid" borderRadius={30} p={5} borderColor={CPPTheme.blue}>
      <Heading textAlign="center" color={CPPTheme.lightblue}> {event.summary} </Heading>
      <Text> {"date" in event.start ? new Date(event.start.date).toUTCString() : new Date(event.start.dateTime).toUTCString()} </Text>
    </Flex>
  )
};

export default CalendarEvent;
