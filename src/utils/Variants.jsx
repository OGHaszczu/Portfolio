export const fadeInLeftVariant = {
  hidden: {
    x: -75,
    opacity: 0,
  },
  visable: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInRightVariant = {
  hidden: {
    x: 75,
    opacity: 0,
  },
  visable: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInTopVariant = {
  hidden: {
    y: -55,
    opacity: 0,
  },
  visable: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInBottomVariant = {
  hidden: {
    y: 55,
    opacity: 0,
  },
  visable: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
