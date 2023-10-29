import React from "react";
import { motion } from "framer-motion";

import useMobile from "@/hooks/useMobile";
import Cloud1 from "@/assets/images/cloud1.svg";
import Cloud2 from "@/assets/images/cloud2.svg";
import Cloud3 from "@/assets/images/cloud3.svg";
import Image from "next/image";

const Cloud = () => {
  const isMobile = useMobile();
  const cloud1Start = isMobile ? 0 : 20;
  const cloud2Start = isMobile ? 20 : 50;
  const cloud3Start = isMobile ? 0 : 0;
  return (
    <>
      <motion.div
        className="fixed bottom-0 z-30 lg:left-1/4"
        animate={{
          left: [`${cloud1Start}%`, `${cloud1Start + 3}%`, `${cloud1Start}%`],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src={Cloud1} className="w-[70vw] lg:w-auto" alt="cloud1" />
      </motion.div>
      <motion.div
        className="fixed bottom-0 z-20 lg:left-1/2"
        animate={{
          left: [`${cloud2Start}%`, `${cloud2Start - 3}%`, `${cloud2Start}%`],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src={Cloud2} className="w-[70vw] lg:w-auto" alt="cloud2" />
      </motion.div>
      <motion.div
        className="fixed bottom-0 z-10 lg:right-0"
        animate={{
          right: [`${cloud3Start}%`, `${cloud3Start + 5}%`, `${cloud3Start}%`],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image src={Cloud3} className="w-[70vw] lg:w-auto" alt="cloud3" />
      </motion.div>
    </>
  );
};

export default Cloud;
