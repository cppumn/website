import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

type INavItemProps = {
  content: string,
  path: string
};

const NavItem = ({content, path}: INavItemProps) => {
  return (
    <Link to={path}>
      <Text display="block" fontSize="1.5rem">
        {content}
      </Text>
    </Link>
  );
}

export default NavItem;