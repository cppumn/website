import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/Kattis512.png")

const KattisDescription = () => {
  return (
    <Flex gap={5}>
      <Center w={128} h={128} p={2}>
        <Image src={logo}/>
      </Center>
      <Flex flexDir="column">
        <Heading fontSize={28}> Kattis </Heading>
        <Text> Kattis is an excellent resource... </Text>
      </Flex>
    </Flex>
  )
}

export default KattisDescription
