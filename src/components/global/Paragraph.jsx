import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/libs/variants";
import useInterval from "@/hooks/useInterval";

const Paragraph = ({ children, hasImg }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState([]);

  useInterval(() => {
    if (index <= children.length) {
      setText([...text, children[index]]);
      setIndex((prev) => prev + 1);
    }
  }, 50);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate={"show"}
      className={`${
        hasImg ? "lg:pt-0" : "lg:pt-[96px]"
      } title lg:whitespace-pre-wrap`}
    >
      {text}
    </motion.div>
  );
};

export default Paragraph;
