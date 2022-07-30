import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

type INavToggleProps = {
  toggle: (event: React.MouseEvent) => any,
  isOpen: boolean
};

const NavToggle = ({toggle, isOpen}: INavToggleProps) => {
  return (
    <Box 
      display = {{base: "block", md: "none"}}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon boxSize="50px"/> : <HamburgerIcon boxSize="50px"/>}
    </Box> 
  );
}

export default NavToggle;