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
                className={`${nsKR.className} w-screen px-5 lg:w-full lg:px-0`}
              >
                <Component {...pageProps} />
              </motion.main>
              {backgroundImages.map((image, idx) => (
                <Image
                  key={idx}
                  alt="백그라운드 이미지"
                  src={image.src}
                  fill
                  sizes="(max-width: 1920px) 100vw"
                  priority
                  className={`-z-[1] h-full w-screen object-cover object-center ${
                    image.path === pathname ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-[0.5s]`}
                />
              ))}
            </AnimatePresence>
          </ClientLayout>
        )}
      </IsOpenContext.Provider>
    </>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  try {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    if (ctx.req?.headers) {
      const host = ctx.req.headers.host.split(':')[0];
      const res = await fetch(`https://backend.comagain.kr/api/v1/auth/domain?dns=${host}`);
      const json = (await res.json());
      return {
        dns_data: json
      }
    } else {
      return {
        dns_data: {}
      }
    }
  } catch (err) {
    return {
      dns_data: {}
    }
  }
}
export default App;
