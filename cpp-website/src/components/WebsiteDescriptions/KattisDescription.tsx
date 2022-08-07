import { Heading, Text } from "@chakra-ui/react"

import DescriptionContainer from "./DescriptionContainer"

const logo = require("img/logos/Kattis512_square.png")

const KattisDescription = () => {
  return (
    <DescriptionContainer icon={logo}>
      <Heading fontSize="1.25rem" fontWeight={450}> Kattis </Heading>
      <Text> Kattis is an excellent resource... </Text>
    </DescriptionContainer>
  )
}

export default KattisDescription
