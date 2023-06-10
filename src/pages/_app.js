import { useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import "@/styles/globals.css";
import ScrollToTop from "@/components/global/ScrollToTop";
import { IsOpenContext } from "@/context/IsOpenContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { pageVariants } from "@/libs/variants";
import ClientLayout from "@/components/layout/clientLayout";

const nsKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-nsKR",
});

function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Head>
          <title>PURPLEVERY</title>
        </Head>
        <ScrollToTop />
        {(pageProps && pageProps.pathname) === "/admin" ? (
          <Component {...pageProps} />
        ) : (
          <ClientLayout>
            <AnimatePresence mode="sync" initial={true}>
              <motion.main
                key={pathname}
                variants={pageVariants}
                initial="initial"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
                className={`${nsKR.variable} w-screen px-5 font-noto lg:w-full lg:px-0`}
              >
                <Component {...pageProps} />
              </motion.main>
            </AnimatePresence>
          </ClientLayout>
        )}
      </IsOpenContext.Provider>
    </>
  );
}

App.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    // Component (pages 폴더에 있는 컴포넌트)에 getInitialProps가 있다면
    pageProps = (await Component.getInitialProps(ctx)) || {};
  }
  return { pageProps };
};

export default App;
