import React from "react";

import { Icon } from "./styles";

export interface CircularIconProps {
  src: string;
  alt: string;
}

const CircularIcon = ({ src, alt, ...props }: CircularIconProps) => {
  return (
    <Icon
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default CircularIcon;
// TODO: make the component icon list component and its accompanying stories.
