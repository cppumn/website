import { Link } from "react-router-dom";
import { UnderlinedText } from "globals/styledComponents";
import { CPPTheme } from "globals/CPPInfo";

type NavItemProps = {
  content: string;
  path: string;
};

const NavItem = ({ content, path }: NavItemProps) => {
  return (
    <Link to={path}>
      <UnderlinedText 
        display="inline-block" 
        fontSize={['sm', 'md', 'lg', 'xl']}
        position="relative"
        linecolor={CPPTheme.lightblue}
        color="white"
        textDecoration="none"
      >
        {content}
      </UnderlinedText>
    </Link>
  );
}

export default NavItem;