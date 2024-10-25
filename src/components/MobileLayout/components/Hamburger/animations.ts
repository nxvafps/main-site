export const topVariants = {
  closed: {
    y: [10, 10, 10, 10, 0],
    rotate: ["135deg", "90deg", "45deg", "0deg", "0deg"],
  },
  open: {
    y: [0, 10, 10, 10, 10],
    rotate: ["0deg", "0deg", "45deg", "90deg", "135deg"],
  },
};

export const middleVariants = {
  closed: {
    opacity: [0, 0, 0, 0, 1],
  },
  open: {
    opacity: [1, 0, 0, 0, 0],
  },
};

export const bottomVariants = {
  closed: {
    y: [-10, -10, -10, -10, 0],
    rotate: ["45deg", "45deg", "45deg", "0deg", "0deg"],
  },
  open: {
    y: [0, -10, -10, -10, -10],
    rotate: ["0deg", "0deg", "45deg", "45deg", "45deg"],
  },
};

export const transition = {
  duration: 0.5,
  times: [0.2, 0.4, 0.6, 0.8, 1],
};
