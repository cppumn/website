import { Box, Stack, Button, Link } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { CPPTheme, discordInvite } from "globals/CPPInfo";

type NavLinksProps = {
  isOpen: boolean;
};

const NavLinks = ({ isOpen }: NavLinksProps) => {
  return (
    <Box 
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack 
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavItem 
          content="Schedule"
          path="/schedule"
        />
        <NavItem 
          content="Getting Started"
          path="/gettingstarted"
        />
        <NavItem 
          content="Contact"
          path="/contact"
        />
        <Link href={discordInvite} isExternal>
          <Button         
            display="inline-block" 
            width="100px"
            fontSize={['sm', 'md', 'lg', 'xl']}
            position="relative"
            color="white"
            textDecoration="none" 
            variant='outline'
            _hover={{
              bg: "white",
              color: CPPTheme.darkblue
            }}
          >
            Join
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default NavLinks;