import { Flex, Link as ChakraLink, Text, AspectRatio } from "@chakra-ui/react";
import { UnderlinedHeading } from "globals/styledComponents";
import type { calendarEvent } from "services/GoogleCalendarApi";

import { CPPTheme } from "globals/CPPInfo";

import "css/normalHTML.css"

import DateBox from "./DateBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendar, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CalendarEvent = ({event}: {event : calendarEvent}) => {

  const startTime = new Date(event.start.date || event.start.dateTime || "");
  const endTime = new Date(event.end.date || event.end.dateTime || "");
  const allDay = event.start.date !== undefined;
  const sameDay = startTime.toLocaleDateString() === endTime.toLocaleDateString();

  const now = new Date();
  let current = startTime <= now && now <= endTime;

  const lightColor = current ? CPPTheme.lightgreen : CPPTheme.lightblue;

  return (
    <Flex justifyContent="left" w="100%">

      <ChakraLink href={event.htmlLink} style={{textDecoration: "none"}} isExternal>
        <AspectRatio w={140} h={140} display={["none", "block"]} marginRight={5}>
          <DateBox day={startTime} active={current}/>
        </AspectRatio>
      </ChakraLink>

      <Flex flexDir="column">

        <ChakraLink href={event.htmlLink} isExternal>
          <UnderlinedHeading
            display="inline-block"
            position="relative"
            color={lightColor}
            textDecoration="none"
          >
            {event.summary}
          </UnderlinedHeading>
        </ChakraLink>

        {current ?
          <Text fontWeight="bold" color={lightColor}>
            <FontAwesomeIcon icon={faBell}/>
            {" Happening right now!"}
          </Text>
          :
          undefined
        }

        <Text overflow="hidden" className="normalHTML" dangerouslySetInnerHTML={{__html: event.description || ""}} />

        <Text>
          <FontAwesomeIcon icon={faCalendar} color={lightColor}/>
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
          <FontAwesomeIcon icon={faClock} color={lightColor}/>
          {allDay ? 
            (sameDay ?
              ` All Day`
              :
              ` All Day, ${startTime.toLocaleDateString('en-us', {weekday: 'long'})} through ${endTime.toLocaleDateString('en-us', {weekday: 'long'})}`
            )
            :
            (sameDay ?
              ` ${startTime.toLocaleTimeString('en-us', {hour: 'numeric', minute:'2-digit'})} to ${endTime.toLocaleTimeString('en-us', {hour: 'numeric', minute:'2-digit'})}`
              :
              ` ${startTime.toLocaleDateString('en-us', {weekday: 'long'})}, ${startTime.toLocaleTimeString('en-us', {hour: 'numeric', minute:'2-digit'})} 
                to 
                ${endTime.toLocaleDateString('en-us', {weekday: 'long'})}, ${endTime.toLocaleTimeString('en-us', {hour: 'numeric', minute:'2-digit'})}
              `
            )
          } 
        </Text>

        {event.location ?  
          <Text> 
            <FontAwesomeIcon icon={faMapMarkerAlt} color={lightColor}/> 
            {` ${event.location}`} 
          </Text> 
          : 
          undefined
        }
        
      </Flex>
    </Flex>
  );
};

export default CalendarEvent;
