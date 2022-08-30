import { Flex, Text, keyframes } from "@chakra-ui/react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSizes } from "globals/fontSizes";

const fadeIn = keyframes`
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 50%;
  }
`;

const blink = keyframes`
  0% {
    opacity: 50%;
  }
  50% {
    opacity: 75%;
  }
  100% {
    opacity: 50%;
  }
`;

const ScrollDownMessage = () => {
  return (
    <Flex
      position="fixed"
      bottom={10}
      left="50%"
      transform="translateX(-50%);"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      color="white"
      opacity="0%"
      fontSize={fontSizes.medium}
      animation={`${fadeIn} 1s, ${blink} 2s infinite`}
      css={{animationDelay: "5s, 6s"}}
    >
      <Text>Scroll Down</Text>
      <FontAwesomeIcon fontSize="75%" icon={faCircle}/>
      <FontAwesomeIcon fontSize="75%" icon={faCircle}/>
      <FontAwesomeIcon icon={faChevronDown}/>
    </Flex>
  );
};

export default ScrollDownMessage;
