import { Flex, Heading, Text } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { CPPTheme } from "globals/CPPInfo";
import { fontSizes } from "globals/fontSizes";

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
            fontSize={fontSizes.large}
            fontWeight="normal"
            color='black'
          >
            {title}
          </Heading>
          <Text 
            fontWeight="light"
            color='black'
            fontSize={fontSizes.xSmall}
          >
            {desc}
          </Text>
        </Flex>
        <Flex 
          justify="flex-end" 
          flex="0 0 25%"
          fontSize={fontSizes.large}
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
