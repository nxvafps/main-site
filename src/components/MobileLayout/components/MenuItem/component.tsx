import React from "react";

// Animations
import { menuItemVariants } from "./animations";

// Styles
import { MenuItem, Icon, Text } from "./styles";

interface SideMenuProps {
  item: {
    icon: string;
    text: string;
    href: string;
  };
}

const SidemenuItem: React.FC<SideMenuProps> = ({ item }) => (
  <MenuItem
    variants={menuItemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon>{item.icon}</Icon>
    <Text>{item.text}</Text>
  </MenuItem>
);

export default SidemenuItem;
