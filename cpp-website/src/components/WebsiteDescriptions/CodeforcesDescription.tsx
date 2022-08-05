import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/Codeforces_logo512.png")

const CodeforcesDescription = () => {
  return (
    <Flex gap={5}>
      <Center w={128} h={128} p={2}>
        <Image src={logo}/>
      </Center>
      <Flex flexDir="column">
        <Heading fontSize={28}> Codeforces </Heading>
        <Text> Codeforces is also an excellent resource...</Text>
      </Flex>
    </Flex>
  )
}

export default CodeforcesDescription
