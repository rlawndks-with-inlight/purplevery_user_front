import { useRouter } from "next/router";
import clientRoutes from "@/data/clientRoutes";
import cls from "@/libs/cls";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="before:contents-[' '] sidebar_before hidden lg:block">
      <nav className="custom_scroll z-10 h-[91vh] w-sm_sidebar_w pt-top_margin lg:pl-12 2xl:w-sidebar_w 2xl:pl-x_margin">
        <ul className="flex h-[90vh] flex-col text-[1.0625rem] font-bold">
          {clientRoutes.map((route, idx) => (
            <li
              key={idx}
              onClick={() => router.push(route.link)}
              className={cls(
                "mb-[20px] w-fit cursor-pointer transition-colors duration-500",
                route.isSub &&
                  cls(
                    "text-sm font-medium text-[#b3b3b3]",
                    route?.isLastSub ? "mb-[35px]" : "mb-[13px]"
                  ),
                router.pathname === route.link
                  ? route.link === "/comagain"
                    ? "text-prime_yellow"
                    : route.link === "/payvery"
                    ? "text-prime_blue"
                    : "text-primary"
                  : "hover:text-white"
              )}
            >
              {route.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
