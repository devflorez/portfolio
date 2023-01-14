// hook para dectar el scroll del usuario
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useScroll() {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setScroll(0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      setScroll(scrollCheck);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}
