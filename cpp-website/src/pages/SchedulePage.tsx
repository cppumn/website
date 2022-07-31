import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Calendar } from "services/GoogleCalendarApi";

const config = {
  clientId: "c_04skom520lh4t0kium9qg1r1vg@group.calendar.google.com",
  apiKey: "AIzaSyAASW9GZYCIxKLVjS8wEJ1tP-oNW3028eE",
}

const SchedulePage = () => {

  const [events, setEvents] = useState({});

  const c = new Calendar(config);
  const d = new Date("2020-08-28T07:00:00.000Z")

  const h = async () => {
    const l = await c.getUpcomingEvents(2);
    setEvents(l)
  }

  useEffect(() => {
    h();
  }, []);

  return (
    <Flex maxW={1024} m="auto" p={5} flexDir="column">
      <Heading> Schedule </Heading>
      <Text> {d.toUTCString()} </Text>
      <pre>
        {JSON.stringify(events, null, 2)}
      </pre>
    </Flex>
  );
};

export default SchedulePage
