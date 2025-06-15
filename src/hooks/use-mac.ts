import { useEffect, useState } from "react";

export function useIsMac() {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    if (navigator.platform.toUpperCase().includes("MAC")) {
      setIsMac(true);
    }
  }, []);
  return isMac;
}
