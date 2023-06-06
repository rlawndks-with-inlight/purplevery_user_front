import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Paragraph from "@/components/global/Paragraph";
import Layout from "@/components/layout/clientLayout";
import Slogun from "@/components/who-we-are/slogun";
import { fadeIn, pageVariants } from "@/libs/variants";

const Home = () => {
  return (
    <>
      <motion.div>
        <Paragraph>
          <strong className="strong">기</strong>
          <strong className="strong">술</strong>
          <span>{"과 "}</span>
          <strong className="strong">사</strong>
          <strong className="strong">람</strong>
          <span>{"을 "}</span>
          <strong className="font-bold">사</strong>
          <strong className="font-bold">랑</strong>
          <span>{"하"}</span>
          <span>{"는\n"}</span>
          <strong className="font-bold">사</strong>
          <strong className="font-bold">람</strong>
          <strong className="font-bold">들</strong>
          <span>입</span>
          <span>니</span>
          <span>다</span>
          <span>.</span>
        </Paragraph>
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          animate={"show"}
          className="mt-10"
        >
          <Slogun />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
