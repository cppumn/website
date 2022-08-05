import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/codechef_logo512.png")

const CodechefDescription = () => {
  return (
    <Flex gap={5}>
      <Center w={128} h={128} p={2}>
        <Image src={logo} />
      </Center>
      <Flex flexDir="column">
        <Heading fontSize={28}> CodeChef </Heading>
        <Text> Do I even have to say it...</Text>
      </Flex>
    </Flex>
  )
}

export default CodechefDescription
