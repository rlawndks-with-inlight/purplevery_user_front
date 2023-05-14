import React from "react";
import { motion } from "framer-motion";

import BoomSVG from "@/assets/images/boom.svg";
import Image from "next/image";

const Boom = () => {
  const boomVariants = {
    initial: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.5 },
  };
  return (
    <motion.div
      className="fixed -left-5 -top-5 z-50 lg:left-[10%] lg:top-[5%]"
      variants={boomVariants}
      initial="initial"
      animate="visible"
      transition={{ delay: 2 }}
    >
      <Image src={BoomSVG} alt="Boom Image" className="w-[70vw] lg:w-auto" />
    </motion.div>
  );
};

export default Boom;
