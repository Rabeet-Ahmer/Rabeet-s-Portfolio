"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Horizontal scroll progress bar — fixed at the top of the viewport.
 * Uses Motion's useScroll + useSpring for a butter-smooth indicator.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] bg-inverse-primary origin-left z-9997"
      style={{ scaleX }}
    />
  );
}
