import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the window to top on every route change (except hash links). */
export default function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
