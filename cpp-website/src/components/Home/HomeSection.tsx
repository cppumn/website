import { Flex } from "@chakra-ui/react";

const HomeSection = ({ children, ...props }: any) => {
  return (
    <Flex
      flexDirection="column"
      gap={4}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default HomeSection;
