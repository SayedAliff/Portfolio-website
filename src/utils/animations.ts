

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export const scaleIn = { 
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
}

export const slideInLeft = { // ✅ ADDED
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
}

export const slideInRight = { // ✅ ADDED
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const cardHoverSmall = {
  whileHover: {
    scale: 1.03
  }
}