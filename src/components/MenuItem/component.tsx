import React from "react";
import { useNavigate } from "react-router-dom";
// Animations
import { menuItemVariants } from "./animations";

// Styles
import { MenuItem, Icon, Text } from "./styles";

import { SideMenuProps } from "../../types";

interface SideMenuItemProps extends SideMenuProps {
  onClick: () => void;
}

const SidemenuItem: React.FC<SideMenuItemProps> = ({ item, onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(item.href);
    onClick();
  };
  return (
    <MenuItem
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <Icon src={item.icon} alt={item.text}></Icon>
      <Text>{item.text}</Text>
    </MenuItem>
  );
};

export default SidemenuItem;
