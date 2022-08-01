import { Flex, Heading, Link as ChakraLink, Text, AspectRatio } from "@chakra-ui/react";
import type { calendarEvent } from "services/GoogleCalendarApi";

import { CPPTheme } from "globals/CPPInfo";
import styled from '@emotion/styled';

import DateBox from "./DateBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const StyledLink = styled(Text)`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${CPPTheme.lightblue};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const CalendarEvent = ({event}: {event : calendarEvent}) => {

  const startTime = new Date(event.start.date || event.start.dateTime || "");
  const endTime = new Date(event.end.date || event.end.dateTime || "");
  const allDay = event.start.date !== undefined
  const sameDay = startTime.toLocaleDateString() === endTime.toLocaleDateString()

  return (
    <Flex justifyContent="left" w="100%">
      <ChakraLink href={event.htmlLink} style={{textDecoration: "none"}} isExternal>
        <AspectRatio w={140} h={140} display={["none", "block"]} marginRight={5}>
          <DateBox day={new Date(event.start.date || event.start.dateTime || "")}/>
        </AspectRatio>
      </ChakraLink>
      <Flex flexDir="column">
        <ChakraLink href={event.htmlLink} isExternal>
          <StyledLink
            display="inline-block" 
            fontSize={['sm', 'md', 'lg', 'xl']}
            position="relative"
            color="white"
            textDecoration="none"
          >
            <Heading color={CPPTheme.lightblue}> {event.summary} </Heading>
          </StyledLink>
        </ChakraLink>
        <Text> {event.description} </Text>
        {event.location ?  
          <Text> 
            <FontAwesomeIcon icon={faMapMarkerAlt} color={CPPTheme.lightblue}/> 
            {` ${event.location}`} 
          </Text> 
          : 
          undefined
        }
        <Text>
          <FontAwesomeIcon icon={faCalendar} color={CPPTheme.lightblue}/>
          {sameDay ? 
            ` ${startTime.toLocaleDateString('en-us', {year: 'numeric', day: 'numeric', month: 'long', weekday: 'long'})}`
            :
            ` ${startTime.toLocaleDateString('en-us', {year: 'numeric', day: 'numeric', month: 'long'})}
              to
              ${endTime.toLocaleDateString('en-us', {year: 'numeric', day: 'numeric', month: 'long'})}
            `
          } 
        </Text>
        <Text> 
          <FontAwesomeIcon icon={faClock} color={CPPTheme.lightblue}/>
          {allDay ? 
            ` All Day`
            :
            (sameDay ?
              ` ${startTime.toLocaleTimeString()} to ${endTime.toLocaleTimeString()}`
              :
              ` ${startTime.toLocaleDateString('en-us', {weekday: 'long'})}, ${startTime.toLocaleTimeString()} 
                to 
                ${endTime.toLocaleDateString('en-us', {weekday: 'long'})}, ${endTime.toLocaleTimeString()}
              `
            )
          } 
        </Text>
      </Flex>
    </Flex>
  )
};

export default CalendarEvent;
