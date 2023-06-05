import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { fadeIn } from "@/libs/variants";
import Paragraph from "@/components/global/Paragraph";
import Layout from "@/components/layout";
import Rocket from "@/components/404/Rocket";
import Boom from "@/components/404/Boom";
import Cloud from "@/components/404/Cloud";
import Very from "@/components/404/Very";
import TypeAnimation from "@/components/global/TypeAnimation";

const TOK = () => {
  const veryCounts = 150;
  const [isClient, setIsClient] = useState(false);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [veryDownStart, setVeryDownStart] = useState(false);
  const [durations, setDurations] = useState([]);

  useEffect(() => {
    setIsClient(true);
    [...Array(veryCounts)].forEach((_) => {
      setDurations((prev) => [...prev, Math.random() + 1]);
    });
  }, []);

  const onDoubleClick = useCallback((event) => {
    if (event.detail === 2) {
      setIsDoubleClicked(true);
      setTimeout(() => {
        setIsDoubleClicked(false);
      }, 2600);
      setTimeout(() => {
        setVeryDownStart(true);
        setTimeout(() => setVeryDownStart(false), 4000);
      }, 2500);
    }
  }, []);

  return (
    <>
      <Layout>
        <>
          <div
            onClick={onDoubleClick}
            className="w-fit cursor-pointer select-none font-bold"
          >
            <Paragraph>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                4
              </strong>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                0
              </strong>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                4
              </strong>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                t
              </strong>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                o
              </strong>
              <strong className="font-bold md:text-custom_md 2xl:text-custom_lg">
                k
              </strong>
            </Paragraph>
          </div>

          {isClient && (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate={"show"}
              className="mt-[15px] whitespace-pre-wrap text-custom_sm leading-[55px] lg:mt-[45px]"
            >
              <TypeAnimation>
                <span className="">서</span>
                <span className="">비</span>
                <span className="">스</span>
                <span className="">{"를 "}</span>
                <span className="">준</span>
                <span className="">비</span>
                <span className="">{" 중 "}</span>
                <span className="">입</span>
                <span className="">니</span>
                <span className="">다</span>
                <span className="">.</span>
              </TypeAnimation>
            </motion.div>
          )}
        </>
      </Layout>

      <AnimatePresence mode="wait">
        {isDoubleClicked && (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="z-50"
          >
            <Rocket />
            <Boom />
            <Cloud />
          </motion.div>
        )}

        {veryDownStart && (
          <motion.div
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed left-0 top-0 z-50 h-screen"
          >
            {durations.map((duration, idx) => (
              <Very key={idx} duration={duration} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TOK;
