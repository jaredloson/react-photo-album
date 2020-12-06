import { useState, useEffect, useRef } from "react";

const hasWindow = typeof window !== "undefined";

const getSize = () => {
  return {
    innerHeight: hasWindow ? window.innerHeight : 0,
    innerWidth: hasWindow ? window.innerWidth : 0,
    outerHeight: hasWindow ? window.outerHeight : 0,
    outerWidth: hasWindow ? window.outerWidth : 0,
  };
};

const useWindowSize = () => {
  const ticking = useRef();
  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    if (!hasWindow) {
      return false;
    }

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setWindowSize(getSize());
        ticking.current = false;
      });

      ticking.current = true;
    }

    return true;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
