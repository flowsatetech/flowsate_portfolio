"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { easeOut } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const variants = {
    hidden: getInitialState(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
