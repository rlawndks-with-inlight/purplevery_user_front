import { useContext, useEffect, useRef, useState } from "react";
import MobileNav from "@/components/global/MobileNav";
import Sidebar from "@/components/global/Sidebar";
import clientRoutes from "@/data/clientRoutes";
import { IsOpenContext } from "@/context/IsOpenContext";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { isOpen } = useContext(IsOpenContext);
  const [prevRoute, setPrevRoute] = useState("");
  const [nextRoute, setNextRoute] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  let startY = 0;

  useEffect(() => {
    setIsMounted(true);
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
  }, [router]);

  useEffect(() => {
    if (isMounted) {
      const scrollContainer = ref.current;
      scrollContainer.addEventListener("wheel", handleWheel);
      scrollContainer.addEventListener("touchstart", onTouchStart);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
        scrollContainer.removeEventListener("touchstart", onTouchStart);
      };
    }
  }, [isMounted, router.pathname]);

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    startY = touch.clientY;
    ref.current.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchEnd = (event) => {
    const scrollThreshold = 100;
    const touch = event.changedTouches[0];
    const delta = touch.clientY - startY;

    const scrollContainer = ref.current;
    const isTop = scrollContainer.scrollTop === 0;
    const isBottom =
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight;

    if (Math.abs(delta) > scrollThreshold) {
      if (isTop && delta > 0) {
        router.push(prevRoute);
      } else if (isBottom && delta < 0) {
        router.push(nextRoute);
      }
      ref.current.removeEventListener("touchend", handleTouchEnd);
    }
  };

  const handleWheel = (event) => {
    const scrollContainer = ref.current;
    const isTop = scrollContainer.scrollTop === 0;
    const isBottom =
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight;

    if (isTop && event.deltaY < 0) {
      router.push(prevRoute);
    } else if (isBottom && event.deltaY > 0) {
      router.push(nextRoute);
    }
  };

  return (
    <div
      className={`
      flex
      w-full
      flex-col
      overflow-scroll
      overscroll-contain 
      px-5
      lg:mt-0
      lg:flex-row
      lg:overflow-hidden
      lg:px-0
      ${isOpen && "fixed"}
      `}
    >
      {isMounted && (
        <>
          <Sidebar />
          <MobileNav />
          <main
            ref={ref}
            className="lg:custom_scroll mt-3 min-h-[84vh] w-full flex-1 overflow-auto pb-top_margin  scrollbar-hide lg:mt-0 lg:h-[90vh] lg:pl-[190px] lg:pr-[10vw] lg:scrollbar-default"
          >
            {children}
          </main>
        </>
      )}
    </div>
  );
};

export default Layout;
