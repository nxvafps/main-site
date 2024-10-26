export const sideMenuVariants = {
  open: {
    zIndex: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    zIndex: -1,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
