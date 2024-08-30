import React from "react";
import { motion, useAnimation } from "framer-motion";
export function AnimateNumber({ value, duration }) {
  const [number, setNumber] = React.useState(0);
  const controls = useAnimation();
  React.useEffect(() => {
    controls.start({ count: value, transition: { duration } });
  }, [value, duration, controls]);
  return (
    <motion.span
      initial={{ count: number }}
      animate={controls}
      onUpdate={(latest) =>
        setNumber(Math.round(latest.count).toLocaleString("en-US"))
      }>
      {number}
    </motion.span>
  );
}
