"use client";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
}

const MenuLink: React.FC<Props> = ({ title }) => {
  return (
    <Menu>
      <MenuButton
        px={3}
        py={2}
        borderRadius="md"
        _hover={{
          background: "#d6d2c9",
          cursor: "pointer",
        }}
      >
        {title} <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuLink;
