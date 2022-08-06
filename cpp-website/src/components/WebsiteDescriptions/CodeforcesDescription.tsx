import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/Codeforces_logo512_square.png")

const CodeforcesDescription = () => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center">
      <Image boxSize={128} src={logo}/>
      <Flex flexDir="column" w="100%">
        <Heading fontSize={28}> Codeforces </Heading>
        <Text> Codeforces is also an excellent resource...</Text>
      </Flex>
    </Flex>
  )
}

export default CodeforcesDescription
