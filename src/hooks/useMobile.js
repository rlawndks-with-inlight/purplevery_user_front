import { useEffect, useState } from "react";

const useMobile = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowSize < 1024) {
    return true;
  } else {
    return false;
  }
};

export default useMobile;
