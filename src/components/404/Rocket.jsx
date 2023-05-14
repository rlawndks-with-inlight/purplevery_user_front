import { motion } from "framer-motion";

import RocketSVG from "@/assets/images/rocket.svg";
import FireSVG from "@/assets/images/fire.svg";
import Image from "next/image";

const Rocket = () => {
  const rocketVariants = {
    initial: { bottom: 0, right: 0 },
    visible: { top: "5%", left: "22%" },
  };

  const fireVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="absolute z-20 overflow-hidden will-change-transform"
      variants={rocketVariants}
      initial="initial"
      animate="visible"
      transition={{ duration: 2, ease: "easeIn" }}
    >
      <Image
        src={RocketSVG}
        alt="rocket image"
        className="z-20 w-[20vw] lg:w-auto"
      />
      <motion.div
        className="absolute left-[40px] top-[40px] -z-10 lg:left-[60px] lg:top-[70px]"
        variants={fireVariants}
        initial="initial"
        animate="visible"
        transition={{ delay: 1.3 }}
      >
        <Image
          src={FireSVG}
          alt="rocket image"
          className="w-[35vw] lg:w-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default Rocket;
