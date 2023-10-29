import React, { useEffect, useState } from "react";
import clientRoutes from "@/data/clientRoutes";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/router";

const MobileNav = () => {
  const { pathname } = useRouter();
  const [curRoute, setCurRoute] = useState(null);
  const [topRoute, setTopRoute] = useState(null);

  useEffect(() => {
    clientRoutes.forEach((route) => {
      if (pathname === route.link) {
        if (route.isSub) {
          setCurRoute(route.title);
          setTopRoute(route.isSub);
        } else {
          setTopRoute(null);
          setCurRoute(route.title);
        }
      }
    });
  }, [pathname]);

  return (
    <>
      {curRoute && (
        <nav className="mt-5 flex items-center space-x-2 px-5 text-xs font-bold text-[#b3b3b3] lg:hidden">
          {topRoute && (
            <>
              <span>{topRoute}</span>
              <AiOutlineRight className="h-3 w-3" />
            </>
          )}
          <div className="relative block w-28 bg-transparent">{curRoute}</div>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
