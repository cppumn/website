import { Flex } from "@chakra-ui/react";

import TopicCard from "./TopicCard";

const Topics = [
  "Graphs",
  "Dynamic Programming",
  "Greedy",
  "Number Theory",
  "Geometry",
  "Data Structures",
  "Strings",
  "Simulation"
]

const TopicsList = () => {
  return (
    <Flex
      flexDir="column"
      gap={2}
    >
      {
        Topics.map(t => 
          <TopicCard/>
        )
      }
    </Flex>
  );
};

export default TopicsList;
