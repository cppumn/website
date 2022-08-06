import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/Kattis512_square.png")

const KattisDescription = () => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center">
      <Image boxSize={128} src={logo}/>
      <Flex flexDir="column" w="100%">
        <Heading fontSize={28}> Kattis </Heading>
        <Text> Kattis is an excellent resource... </Text>
      </Flex>
    </Flex>
  )
}

export default KattisDescription
