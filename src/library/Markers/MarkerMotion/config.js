export const marker = {
  default: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  },
  hovered: {
    scale: 2.5,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

export const icon = {
  default: { scale: 1 },
  hovered: {
    scale: 0,
  }
}

export const image = {
  default: { scale: 0 },
  hovered: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20
    }
  }
}

export const text = {
  default: {  opacity: 0 },
  hovered: {  opacity: 1 }
}

export const transition = {
  type: 'spring',
  stiffness: 300,
  damping: 10
};
