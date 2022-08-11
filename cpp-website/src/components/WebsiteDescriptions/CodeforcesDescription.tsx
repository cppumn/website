import { Heading, Text } from "@chakra-ui/react"

import DescriptionContainer from "./DescriptionContainer"

const logo = require("img/logos/Codeforces_logo512_square.png")

const CodeforcesDescription = () => {
  return (
    <DescriptionContainer icon={logo}>
      <Heading fontSize="1.25rem" fontWeight={450}> Codeforces </Heading>
      <Text> Codeforces is also an excellent resource...</Text>
    </DescriptionContainer>
  )
}

export default CodeforcesDescription
