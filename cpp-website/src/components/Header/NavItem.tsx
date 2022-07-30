import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import styled from '@emotion/styled';


const StyledLink = styled(Text)`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #0087ca;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

type NavItemProps = {
  content: string,
  path: string
};

const NavItem = ({content, path}: NavItemProps) => {
  return (
    <Link to={path}>
      <StyledLink 
        display="inline-block" 
        fontSize={['sm', 'md', 'lg', 'xl']}
        position="relative"
        color="white"
        textDecoration="none"
      >
        {content}
      </StyledLink>
    </Link>
  );
}

export default NavItem;