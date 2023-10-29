import React from "react";
import { motion } from "framer-motion";

import VerySVG from "@/assets/images/very.svg";
import useMobile from "@/hooks/useMobile";
import Image from "next/image";

const Very = ({ duration }) => {
  const isMobile = useMobile();

  const maxWidth = isMobile ? 35 : 50;
  const maxHeight = isMobile ? 35 : 50;
  const maxX = window.innerWidth - maxWidth;

  const width = Math.floor(Math.random() * maxWidth) + maxWidth;
  const height = Math.floor(Math.random() * maxHeight) + maxHeight;

  const veryVariants = {
    initial: {
      opacity: 0,
      y: 0,
      x: Math.floor(Math.random() * maxX),
    },
    visible: { opacity: [1, 1], y: window.innerHeight - height },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      className="fixed z-30 will-change-transform"
      animate="visible"
      initial="initial"
      transition={{ duration, ease: "backInOut" }}
      variants={veryVariants}
    >
      <Image
        src={VerySVG}
        alt="purplevery"
        width={width}
        height={height}
        className="z-50"
        // style={{
        //   width,
        //   height,
        // }}
      />
    </motion.div>
  );
};

export default Very;
