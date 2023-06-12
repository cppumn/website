import { Table, Tr, Th, Td, TableContainer, Thead, Tbody, Box, Text } from "@chakra-ui/react";
import {CPPTheme } from "globals/CPPInfo";

const MeetingsTable = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={16} align="center"> Meeting Information </Text>
      <Box mt={2} p={5} border="solid 1px" borderColor={CPPTheme.blue} borderRadius={10}>
        <TableContainer mt={-2}>
          <Table variant="simple" colorScheme="blue">
            <Thead>
              <Tr>
                <Th fontSize={16}> Day </Th>
                <Th fontSize={16}> Time </Th>
                <Th fontSize={16}> Location </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> Saturday </Td>
                <Td> 2:00 - 4:00 </Td>
                <Td> Discord<Text fontWeight="bold" as='a'>*</Text> </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Text fontSize={14}>
        <Text fontWeight="bold" as='a'>*</Text>Summer meetings are held in the voice channels on Discord
      </Text>
    </Box>
  );
};

export default MeetingsTable;
