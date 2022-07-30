import { AspectRatio, Heading, Text, Flex } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Flex w="40%" m="auto" mt={5} mb={5} flexDir="column" gap={5}>
      <Heading fontSize="2em" fontWeight={400} lineHeight={1.35}> Welcome to the Competitive Programming Club (CPP) </Heading>
      <Flex flexDir="column" gap={5}>
        <Text>
          We're a student group at the University of Minnesota interested in competitive programming.
        </Text>
        <Text>
          Our goal is to create an environment where students can hone their speed and accuracy in solving challenging problems, learn new programming concepts, and prepare for competitions and interviews.
        </Text>
        <Text>
          Join our Discord to attend meetings and keep up to date!
        </Text>
      </Flex>
      <Heading size="lg" fontWeight={600} lineHeight={1.35}>UMN.CPP Discord</Heading>
      <AspectRatio w={350} h={500}>
        <iframe src="https://discord.com/widget?id=646499730343460864&theme=dark" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord widget" />
      </AspectRatio> 
    </Flex>
  )
}

export default MainPage
