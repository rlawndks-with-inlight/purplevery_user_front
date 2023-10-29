import { useContext, useEffect, useRef, useState } from "react";
import clientRoutes from "@/data/clientRoutes";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import Navbar from "../global/Navbar";
import MobileNav from "../global/MobileNav";
import Sidebar from "../global/Sidebar";

import { IsOpenContext } from "@/context/IsOpenContext";
import $ from 'jquery';

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
    const contentHeight = $('.scroll-height-content').height() - window.innerHeight;
    const scrollHeight = window.scrollY
    const touch = event.changedTouches[0];
    const delta = touch.clientY - startY;
    const scrollContainer = ref.current;
    const isTop = scrollContainer.scrollTop === 0;
    const isBottom =
      scrollContainer.scrollTop + scrollContainer.clientHeight + 10 >=
      scrollContainer.scrollHeight;

    scrollToTop(scrollContainer);
    if (scrollHeight == 0) {
      router.push(prevRoute);
      window.scrollTo(0, 0);

    } else if (contentHeight - scrollHeight <= 10) {
      router.push(nextRoute);
      window.scrollTo(0, 0);

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
      window.scrollTo(0, 0);

    } else if (isBottom && event.deltaY > 0) {
      scrollToTop(scrollContainer);
      router.push(nextRoute);
      window.scrollTo(0, 0);
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
      <div className="absolute z-[1] min-h-screen w-full bg-transparent scroll-height-content">
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
          ${isOpen ? "fixed" : "static"}
      `}
        >
          <Sidebar />
          <MobileNav />
          <div
            ref={ref}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:custom_scroll top-[86px] mt-3 min-h-[84vh] w-full flex-1 overflow-y-auto overflow-x-hidden pb-top_margin scrollbar-hide lg:left-sm_sidebar_w lg:mt-0 lg:h-[90vh] lg:px-0 lg:pl-[190px] lg:pr-[10vw] lg:scrollbar-default 2xl:left-sidebar_w"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
