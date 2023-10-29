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
import { backgroundImages } from "@/data/backgroundImages";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const nsKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
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
                className={`${nsKR.className} w-screen px-5 lg:px-0 scroll-height-content`}
              >
                <Component {...pageProps} />
              </motion.main>
              {backgroundImages.map((image, idx) => (
                <img
                  key={idx}
                  alt="백그라운드 이미지"
                  src={image.src}
                  style={{
                    left: '0',
                  }}
                  className={`-z-[1] w-screen object-cover object-center ${image.path === pathname ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-[0.5s] move-image`}
                />
              ))}
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
