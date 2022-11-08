export const CardHover = {
  hover: { y: -10 },
};

export const WelcomeMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const WrapperVar = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 3,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

export const EleVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const SvgAni = {
  start: { strokeDashoffset: 60 },
  end: {
    strokeDashoffset: 0,
  },
};
