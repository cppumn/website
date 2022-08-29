import { Flex, Heading } from "@chakra-ui/react";
import { CPPTheme } from "globals/CPPInfo";
import { fontSizes } from "globals/fontSizes"

type SectionTitleProps = {
  content: string,
  props?: any
}

const SectionTitle = ({ content, ...props }: SectionTitleProps) => {
  return (
    <Flex 
      position="relative" 
      justify="center" 
      align="center" 
      width={["200px","275px","300px","375px"]} 
      height="90px"
      bgColor={CPPTheme.darkblue} 
      {...props}
    >
      <Heading 
        fontSize={fontSizes.xLarge}
        color="white"
      >
        {content}
      </Heading>
    </Flex>
  );
}

export default SectionTitle;