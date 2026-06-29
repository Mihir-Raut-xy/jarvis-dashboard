"use client";

import { motion } from "framer-motion";

import OuterRing from "./OuterRing";
import TickMarks from "./TickMarks";
import SegmentRing from "./SegmentRing";
import InnerRing from "./InnerRing";

export default function ReactorSVG() {
  return (
    <motion.svg
      width="700"
      height="700"
      viewBox="0 0 700 700"
      className="absolute"
      animate={{ rotate: 360 }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <OuterRing />
      <TickMarks />
      <SegmentRing />
      <InnerRing />
    </motion.svg>
  );
}