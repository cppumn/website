import { useState } from "react";
import NavBarContainer from "./NavContainer";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [isOpen, setIsOpen]: [boolean, Function] = useState(false);

  const toggle = (): void => setIsOpen((lastOpen: boolean) => !lastOpen);

  return (
    <NavBarContainer>
      <Logo />
      <NavToggle 
        toggle={toggle} 
        isOpen={isOpen} 
      />
      <NavLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default Nav;