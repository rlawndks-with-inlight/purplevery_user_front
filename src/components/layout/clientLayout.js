import { useContext, useEffect, useRef, useState } from "react";
import clientRoutes from "@/data/clientRoutes";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import Navbar from "../global/Navbar";
import MobileNav from "../global/MobileNav";
import Sidebar from "../global/Sidebar";
import { motion } from "framer-motion";
import { IsOpenContext } from "@/context/IsOpenContext";
import Image from "next/image";
import { backgroundImages } from "@/data/backgroundImages";

const ClientLayout = ({ children }) => {
  const { isOpen } = useContext(IsOpenContext);
  const [prevRoute, setPrevRoute] = useState("");
  const [nextRoute, setNextRoute] = useState("");
  const router = useRouter();
  const ref = useRef(null);
  let startY = 0;

  useEffect(() => {
    for (let i = 0; i < clientRoutes.length; i++) {
      if (router.pathname.includes(clientRoutes[i].link)) {
        setPrevRoute(
          clientRoutes[i === 0 ? clientRoutes.length - 1 : i - 1].link
        );
        setNextRoute(
          clientRoutes[i === clientRoutes.length - 1 ? 0 : i + 1].link
        );
      }
    }
  }, [router, router.pathname]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    startY = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (!ref.current) return;
    const scrollThreshold = 150;
    const touch = event.changedTouches[0];
    const delta = touch.clientY - startY;

    const scrollContainer = ref.current;
    const isTop = scrollContainer.scrollTop === 0;
    const isBottom =
      scrollContainer.scrollTop + scrollContainer.clientHeight + 10 >=
      scrollContainer.scrollHeight;

    if (Math.abs(delta) > scrollThreshold) {
      if (isTop && delta > 0) {
        router.push(prevRoute);
      } else if (isBottom && delta < 0) {
        router.push(nextRoute);
      }
    }
  };

  const handleWheel = debounce((event) => {
    if (!ref.current) return;
    const scrollContainer = ref.current;
    const isTop = scrollContainer.scrollTop === 0;
    const isBottom =
      scrollContainer.scrollTop + scrollContainer.clientHeight + 10 >=
      scrollContainer.scrollHeight;

    if (isTop && event.deltaY < 0) {
      scrollToTop(scrollContainer);
      router.push(prevRoute);
    } else if (isBottom && event.deltaY > 0) {
      scrollToTop(scrollContainer);
      router.push(nextRoute);
    }
  }, 300);

  const scrollToTop = (scrollContainer) => {
    if (scrollContainer.scrollTo) {
      scrollContainer.scrollTo({
        top: 0,
      });
    } else {
      scrollContainer.scrollTop = 0;
    }
  };

  return (
    <>
      <div className="absolute z-[1] min-h-screen w-full bg-transparent">
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

          <motion.div
            ref={ref}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:custom_scroll top-[86px] mt-3 min-h-[84vh] w-full flex-1 overflow-y-auto overflow-x-hidden px-5 pb-top_margin scrollbar-hide lg:left-sm_sidebar_w lg:mt-0 lg:h-[90vh] lg:px-0 lg:pl-[190px] lg:pr-[10vw] lg:scrollbar-default 2xl:left-sidebar_w "
          >
            {children}
          </motion.div>
        </div>
        {backgroundImages.map((image, idx) => (
          <Image
            key={idx}
            alt="백그라운드 이미지"
            src={image.src}
            fill
            priority
            className={`
          -z-[1]
          h-full
          w-screen
          object-cover
          object-center
          ${image.path.includes(router.pathname) ? "visible" : "hidden"}`}
          />
        ))}
      </div>
    </>
  );
};

export default ClientLayout;
