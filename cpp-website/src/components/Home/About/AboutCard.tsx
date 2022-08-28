import { Flex, Heading, Text } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { CPPTheme } from "globals/CPPInfo";

type AboutCardProps = {
  title: string;
  desc: string;
  icon: IconDefinition;
  link: ReactNode,
  props?: any;
};

const AboutCard = ({ title, desc, icon, link, ...props }: AboutCardProps) => {
  return (
    <Flex
      flexDirection="column"
      justify="space-between"
      gap="2rem"
      p="1rem"
      m="1rem"
      bg="rgba(74, 164, 255, 0.17);"
      {...props}
    >
      <Flex
        justify="space-between"
      >
        <Flex 
          flexDirection="column"
          gap="0.5rem"
          flex="0 0 75%" 
        >
          <Heading 
            fontSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]}
            fontWeight="normal"
            color='black'
          >
            {title}
          </Heading>
          <Text 
            fontWeight="light"
            color='black'
            fontSize={["0.8rem", "1rem", "1rem", "1.5em"]}
          >
            {desc}
          </Text>
        </Flex>
        <Flex 
          justify="flex-end" 
          flex="0 0 25%"
          fontSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]}
        >
          <FontAwesomeIcon 
            icon={icon} 
            color={CPPTheme.darkblue} 
            size="lg"/>
        </Flex>
      </Flex>
      {link}
    </Flex>
  );
}

export default AboutCard;
