import { Flex, Image, Heading, Center, Text } from "@chakra-ui/react"

import { CPPTheme } from "globals/CPPInfo"

const logo = require("img/logos/codechef_logo512.png")

const CodechefDescription = () => {
  return (
    <Flex gap={[0, 5]} flexDir={["column", "row"]} alignItems="center">
      <Image boxSize={128} src={logo}/>
      <Flex flexDir="column" w="100%">
        <Heading fontSize={28}> CodeChef </Heading>
        <Text> Do I even have to say it...</Text>
      </Flex>
    </Flex>
  )
}

export default CodechefDescription
