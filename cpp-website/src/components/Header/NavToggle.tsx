import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

type NavToggleProps = {
  toggle: (event: React.MouseEvent) => any,
  isOpen: boolean
};

const NavToggle = ({toggle, isOpen}: NavToggleProps) => {
  return (
    <Box 
      display = {{base: "block", md: "none"}}
      onClick={toggle}
    >
      {isOpen ? 
        <CloseIcon boxSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]} /> : 
        <HamburgerIcon boxSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]} />}
    </Box> 
  );
}

export default NavToggle;