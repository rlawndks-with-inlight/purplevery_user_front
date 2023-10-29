import { motion, AnimatePresence } from "framer-motion";

import Paragraph from "@/components/global/Paragraph";
import Layout from "@/components/layout/clientLayout";
import Graph from "@/components/our-purpose/graph";
import { fadeIn, pageVariants } from "@/libs/variants";

const OurPurpose = () => {
  return (
    <>
      <Paragraph>
        <strong className="font-bold">사</strong>
        <strong className="font-bold">랑</strong>
        <span>하</span>
        <span>{"는 "}</span>
        <strong className="font-bold">사</strong>
        <strong className="font-bold">람</strong>
        <span>들</span>
        <span>{"과\n"}</span>
        <strong className="strong">동</strong>
        <strong className="strong">반 </strong>
        <strong className="strong">성</strong>
        <strong className="strong">공</strong>
        <span>하</span>
        <span>는 </span>
        <span>것</span>
        <span>입</span>
        <span>니</span>
        <span>다</span>
        <span>.</span>
      </Paragraph>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate={"show"}
        className="mt-[35px] lg:mt-[65px]"
      >
        <Graph />
      </motion.div>
    </>
  );
};

export default OurPurpose;
