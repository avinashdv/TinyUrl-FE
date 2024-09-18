"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
}

const MenuLink: React.FC<Props> = ({ title }) => {
  const pathname = usePathname();

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
