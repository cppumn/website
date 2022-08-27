import { Flex, Heading, Text } from "@chakra-ui/react";
import { faChevronCircleDown, faChevronCircleLeft, faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CPPTheme } from "globals/CPPInfo";
import { useState } from "react";

const TopicCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      backgroundColor={CPPTheme.blue}
      borderRadius={5}
      p={2}
      color="white"
      flexDir="column"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => {setOpen(!open)}}
      >
        <Heading
          fontSize="1.25rem"
        >
          Title 
        </Heading>
        <FontAwesomeIcon fontWeight={700} fontSize="1.25rem" icon={open ? faChevronCircleDown : faChevronCircleLeft}/>
      </Flex>
      { open ?
        <Text>
          testing testing testing
        </Text>
        :
        undefined
      }
    </Flex>
  );
};

export default TopicCard;
