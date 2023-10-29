import { useState } from "react";
import useInterval from "@/hooks/useInterval";

const TypeAnimation = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState([]);

  useInterval(() => {
    if (index <= children.length) {
      setText([...text, children[index]]);
      setIndex((prev) => prev + 1);
    }
  }, 50);
  return <>{text}</>;
};

export default TypeAnimation;
