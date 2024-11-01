export const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    zIndex: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    zIndex: -1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
