import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import Navbar from "@/components/global/Navbar";
import ScrollToTop from "@/components/global/ScrollToTop";
import { IsOpenContext } from "@/context/IsOpenContext";
import clientRoutes from "@/data/clientRoutes";

const nsKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-nsKR",
});

const pageVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
  hidden: { opacity: 0, position: "absolute" },
};

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [bgImg, setBgImg] = useState("");

  useEffect(() => {
    clientRoutes.forEach((route) => {
      if (route.link === pathname) {
        setBgImg(`bg-${route.bgImg}`);
      }
    });
  }, [pathname]);

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="visible"
        exit="hidden"
        transition={{ duration: 1 }}
        className={`w-full ${bgImg} bg-cover`}
      >
        <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
          <Head>
            <title>PURPLEVERY</title>
          </Head>
          <ScrollToTop />
          <Navbar />
          <main className={`${nsKR.variable} font-noto`}>
            <Component {...pageProps} />
          </main>
        </IsOpenContext.Provider>
      </motion.div>
    </AnimatePresence>
  );
}
