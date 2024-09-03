import { useState, useEffect } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("lg");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBreakpoint("sm");
      } else if (width >= 640 && width < 768) {
        setBreakpoint("md");
      } else if (width >= 768 && width < 1024) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint();

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
