import { Flex, Text } from "@chakra-ui/react"
import { CPPTheme } from "globals/CPPInfo"

const DateBox = ({day}: {day: Date}) => {
  return (
    <Flex 
      flexDir="column" 
      border={`solid 2px ${CPPTheme.blue}`} 
      borderTop={`solid 1rem ${CPPTheme.blue}`} 
      borderRadius={20}
    >
      <Text 
        textColor={CPPTheme.blue} 
        textAlign="center" 
        lineHeight="75%" 
        height="75%" 
        fontWeight={800} 
        fontSize={48} 
        textDecor="none"
      > 
        {day.toLocaleString('en-us', {month: 'short'})} 
      </Text>
      <Text 
        textColor={CPPTheme.lightblue} 
        lineHeight="100%" 
        height="100%" 
        fontWeight={800} 
        textAlign="center" 
        fontSize={86}
      > 
        {day.getDate()} 
      </Text>
    </Flex>
  )
}

export default DateBox
