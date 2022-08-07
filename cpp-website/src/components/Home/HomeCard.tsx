import { Flex, Heading, Text } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CPPTheme } from "globals/CPPInfo";

type HomeCardProps = {
  title: string;
  desc: string;
  icon: IconDefinition;
  props?: any;
};

const HomeCard = ({ title, desc, icon, ...props }: HomeCardProps) => {
  return (
    <Flex
      flexDirection="column"
      gap={2}
      p={4}
      borderRadius="1.5rem"
      bg={CPPTheme.blue}
      {...props}
    >
      <Flex
        gap="0.5rem"
      >
        <Heading fontSize="1.25rem" fontWeight={450} color='white'>{title}</Heading>
        <FontAwesomeIcon icon={icon} color='violet' size="lg"/>
      </Flex>
      <Text color='white'>{desc}</Text>
    </Flex>
  );
}

export default HomeCard;
