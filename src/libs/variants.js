export const fadeIn = (direction, delay, opacity = 1) => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity,
    transition: {
      type: "tween",
      duration: 1.2,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const pageVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
