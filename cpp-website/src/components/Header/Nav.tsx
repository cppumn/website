import { useState } from "react";
import NavContainer from "./NavContainer";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen]: [boolean, Function] = useState(false);

  const toggle = (): void => setIsOpen((lastOpen: boolean) => !lastOpen);

  return (
    <NavContainer>
      <Link to="/">
        <Logo />
      </Link>
      <NavToggle 
        toggle={toggle} 
        isOpen={isOpen} 
      />
      <NavLinks isOpen={isOpen} />
    </NavContainer>
  );
}

export default Nav;