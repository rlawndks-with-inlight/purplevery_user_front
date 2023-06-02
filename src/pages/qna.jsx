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

const QNA = () => {
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
      }, 2800);
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
            className="w-fit cursor-pointer select-none font-bold lg:text-[3.646vw]"
          >
            <Paragraph>
              <strong className="font-bold lg:text-[3.646vw]">4</strong>
              <strong className="font-bold lg:text-[3.646vw]">0</strong>
              <strong className="font-bold lg:text-[3.646vw]">4</strong>
              <strong className="font-bold lg:text-[3.646vw]">t</strong>
              <strong className="font-bold lg:text-[3.646vw]">o</strong>
              <strong className="font-bold lg:text-[3.646vw]">k</strong>
            </Paragraph>
          </div>

          {isClient && (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate={"show"}
              className="mt-[45px] whitespace-pre-wrap text-[30px]"
            >
              <TypeAnimation>
                <span className="text-[30px]">{"잘 "}</span>
                <span className="text-[30px]">들</span>
                <span className="text-[30px]">어</span>
                <span className="text-[30px]">오</span>
                <span className="text-[30px]">셨</span>
                <span className="text-[30px]">습</span>
                <span className="text-[30px]">니</span>
                <span className="text-[30px]">다</span>
                <span className="text-[30px]">{"!\n"}</span>
                <strong className="text-[30px] font-bold">궁</strong>
                <strong className="text-[30px] font-bold">금</strong>
                <strong className="text-[30px] font-bold">하</strong>
                <strong className="text-[30px] font-bold">{"신 "}</strong>
                <strong className="text-[30px] font-bold">사</strong>
                <strong className="text-[30px] font-bold">항</strong>
                <span className="text-[30px]">{"을 "}</span>
                <span className="text-[30px]">적</span>
                <span className="text-[30px]">어</span>
                <span className="text-[30px]">주</span>
                <span className="text-[30px]">세</span>
                <span className="text-[30px]">요</span>
                <span className="text-[30px]">{".\n"}</span>
                <span className="text-[30px]">성</span>
                <span className="text-[30px]">심</span>
                <span className="text-[30px]">성</span>
                <span className="text-[30px]">의</span>
                <span className="text-[30px]">{"껏 "}</span>
                <span className="text-[30px]">답</span>
                <span className="text-[30px]">변</span>
                <span className="text-[30px]">드</span>
                <span className="text-[30px]">리</span>
                <span className="text-[30px]">겠</span>
                <span className="text-[30px]">습</span>
                <span className="text-[30px]">니</span>
                <span className="text-[30px]">다</span>
                <span className="text-[30px]">.</span>
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

export default QNA;
