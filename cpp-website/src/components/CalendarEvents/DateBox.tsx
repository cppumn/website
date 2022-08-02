import { Flex, Text } from "@chakra-ui/react"
import { CPPTheme } from "globals/CPPInfo"

const DateBox = ({day, active}: {day: Date, active?: boolean}) => {

  const lightColor = active ? CPPTheme.lightgreen : CPPTheme.lightblue;
  const color = active ? CPPTheme.green : CPPTheme.blue;

  return (
    <Flex 
      flexDir="column"
      border={`solid 2px ${color}`} 
      borderTop={`solid 1rem ${color}`} 
      borderRadius={20}
      gap={1}
    >
      <Text 
        textColor={color} 
        textAlign="center" 
        lineHeight={0.6}
        fontWeight={800}
        fontSize={48} 
        textDecor="none"
        marginTop={0}
        marginBottom={4}
      > 
        {day.toLocaleString('en-us', {month: 'short'})} 
      </Text>
      <Text 
        textColor={lightColor} 
        lineHeight={0.6}
        fontWeight={800} 
        textAlign="center" 
        fontSize={86}
        marginBottom={3}
      > 
        {day.getDate()} 
      </Text>
    </Flex>
  )
}

export default DateBox
