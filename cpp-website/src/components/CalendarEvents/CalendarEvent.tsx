import { Flex, Heading, Text } from "@chakra-ui/react";
import type { calendarEvent } from "services/GoogleCalendarApi";

import { CPPTheme } from "globals/CPPInfo";

const CalendarEvent = ({event}: {event : calendarEvent}) => {
  return (
    <Flex justifyContent="center" flexDir="column" borderBottom="3px solid" p={5} borderColor={CPPTheme.blue}>
      <Heading color={CPPTheme.lightblue}> {event.summary} </Heading>
      <Text> {new Date(event.start.date || event.start.dateTime || "").toUTCString()} </Text>
    </Flex>
  )
};

export default CalendarEvent;
