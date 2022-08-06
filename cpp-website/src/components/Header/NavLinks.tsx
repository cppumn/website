import { Box, Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";

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
      </Stack>
    </Box>
  );
}

export default NavLinks;