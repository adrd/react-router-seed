import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  console.log("ScrollToTop component start executing...");

  const { pathname } = useLocation();

  console.log("ScrollToTop component, pathname = ", pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
