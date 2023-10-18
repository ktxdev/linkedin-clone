import { useEffect, useRef } from "react";

export function useClickOutside(handler, listenOnCapture = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenOnCapture);

    return () =>
      document.removeEventListener("click", handleClick, listenOnCapture);
  }, [handler, listenOnCapture]);

  return ref;
}
