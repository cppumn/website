import { Flex, Heading, Text } from "@chakra-ui/react";
import type { calendarEvent } from "services/GoogleCalendarApi";

import { CPPTheme } from "globals/CPPInfo";
import { CalendarIcon } from "@chakra-ui/icons";

const CalendarEvent = ({event}: {event : calendarEvent}) => {

  const options: any = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const get12hourTimeString = (day: Date) => {
    return Intl.DateTimeFormat('en-us', options).format(day).split(" ").slice(1).join(" ");
  }
  

  return (
    <Flex justifyContent="left" w="100%">
      <CalendarIcon w={[0, 140]} h={[0, 140]} paddingRight={5} color={CPPTheme.blue}></CalendarIcon>
      <Flex flexDir="column">
        <Heading color={CPPTheme.lightblue}> {event.summary} </Heading>
        <Text> {event.description} </Text>
        <Text> {event.location} </Text>
        <Text> {new Date(event.start.date || event.start.dateTime || "").toUTCString().split(" ").slice(0, 4).join(" ")} </Text>
        <Text> {`${get12hourTimeString(new Date(event.start.date || event.start.dateTime || ""))} to ${get12hourTimeString(new Date(event.end.date || event.end.dateTime || ""))}`} </Text>
      </Flex>
    </Flex>
  )
};

export default CalendarEvent;
