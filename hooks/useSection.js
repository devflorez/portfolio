// hook para detectar en que sección del sitio se encuentra el usuario
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useSection() {
  const router = useRouter();
  const [section, setSection] = useState("");

  useEffect(() => {
    const handleRouteChange = (url) => {
      const path = url.split("/")[1];
      setSection(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return section;
}
