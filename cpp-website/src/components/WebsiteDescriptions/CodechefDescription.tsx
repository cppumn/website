import { Heading, Text } from "@chakra-ui/react"

import DescriptionContainer from "./DescriptionContainer"

const logo = require("img/logos/codechef_logo512.png")

const CodechefDescription = () => {
  return (
    <DescriptionContainer icon={logo}>
      <Heading fontSize="1.25rem" fontWeight={450}> CodeChef </Heading>
      <Text> Do I even have to say it...</Text>
    </DescriptionContainer>
  )
}

export default CodechefDescription
