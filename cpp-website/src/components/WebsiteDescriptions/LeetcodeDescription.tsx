import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/LeetCode_logo_black512.png")

const LeetcodeDescription = () => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center">
      <Image boxSize={128} src={logo}/>
      <Flex flexDir="column" w="100%">
        <Heading fontSize={28}> LeetCode </Heading>
        <Text> You have probably already heard of LeetCode, but in case you haven't, it is also an excellent resource...</Text>
      </Flex>
    </Flex>
  )
}

export default LeetcodeDescription
