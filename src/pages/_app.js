import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import MobileNav from "@/components/global/MobileNav";
import Sidebar from "@/components/global/Sidebar";
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
  hidden: { opacity: 0, position: "fixed" },
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
    <div className={`w-full ${bgImg} bg-cover`}>
      <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Head>
          <title>PURPLEVERY</title>
        </Head>
        <ScrollToTop />
        <Navbar />
        <div
          className={`
      custom_scroll
      flex
      w-full
      flex-col
      overflow-scroll
      overscroll-contain 
      lg:mt-0
      lg:flex-row
      lg:overflow-hidden
      ${isOpen && "fixed"}
      `}
        >
          <Sidebar />
          <MobileNav />
          <AnimatePresence initial={false} mode="sync">
            <motion.main
              key={pathname}
              variants={pageVariants}
              initial="initial"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              className={`${nsKR.variable} top-[86px] w-full px-5 font-noto lg:left-sm_sidebar_w lg:px-0 2xl:left-sidebar_w`}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
        </div>
      </IsOpenContext.Provider>
    </div>
  );
}
