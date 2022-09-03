import { useState } from "react";
import { 
  Flex, 
  Stack, 
  FormControl, 
  FormLabel, 
  UnorderedList, 
  ListItem, 
  Button, 
  Link as ChakraLink, 
  Input,
  Textarea, 
  Heading, 
  Text } from "@chakra-ui/react";
import { CPPTheme, instagram, discordInvite, email } from "globals/CPPInfo";

// WARNING: Proper format checking should be done also there could be issues of spam
const Contact = () => {

  const [firstName, setFirstName]: [string, Function] = useState<string>('');
  const [lastName, setLastName]: [string, Function] = useState<string>('');
  const [message, setMessage]: [string, Function] = useState<string>('');
  const isValidMsg: boolean = message !== '';

  const sendMail = (): void => {
    const name: string = firstName + " " + lastName;
    const mail: string = `mailto:${email}`;
    const subject: string = "Page Questions - From " + name;

    window.open(mail + '?subject=' + subject + '&body=' + message);
  }

  return (
    <Flex 
      flexDirection="column"
      maxW={1024} 
      m="auto"
      gap={6} 
      p={2}
    >
      <Stack>
        <Heading 
          color={CPPTheme.darkblue} 
          fontSize="1.5rem" 
          fontWeight={450}
        >
          Reach Out To Us
        </Heading> 
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input 
            placeholder="Dennis" 
            onChange={(event) => setFirstName(event.target.value)}
          />
          <FormLabel>Last Name</FormLabel>
          <Input 
            placeholder="Ritchie" 
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea 
            placeholder="What would you like to tell us?" 
            onChange={(event) => setMessage(event.target.value)}
          />
        </FormControl>
        <Button
          colorScheme={CPPTheme.darkblue}
          variant="outline"
          color={CPPTheme.darkblue}
          width="100px" 
          isDisabled={!isValidMsg} 
          onClick={() => sendMail()}
          _hover={{
            bg: CPPTheme.darkblue,
            color: "white"
          }}
        >
          Submit
        </Button>
      </Stack>
      <Stack>
        <Stack>
          <Heading 
            color={CPPTheme.darkblue} 
            fontSize="1.5rem" 
            fontWeight={450}
          >
            Other Ways To Connect
          </Heading>
          <Text>
            Attending meetings is a great way to gain more insight
            and knowledge of the club. The lectures are held by the
            officers so the best way to speak to one is to come to 
            one of the meetings. We also have a couple of other ways
            you can reach out:
          </Text>
          <Flex>
            <UnorderedList spacing="0.5rem">
              <ListItem>
                Have more questions or directly want to ask a specific
                question? Shoot us an email 
                at: <Text as="span" fontWeight="bold">cpp-club@umn.edu</Text>
              </ListItem>
              <ListItem>
                Interested on contacting on our socials? We currently maintain
                2 different socials. To checkout our instagram, search for 
                us at <ChakraLink color={CPPTheme.blue} href={instagram}>@umncpp</ChakraLink>. For 
                our discord, just click on the join button 
                or <ChakraLink color={CPPTheme.blue} href={discordInvite}>here</ChakraLink>.
              </ListItem>
              <ListItem>
                Think you could add something to spice up the website? Visit our 
                club maintained repo
                at <Text as="span" fontWeight="bold">https://github.com/cppumn</Text>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Contact;
