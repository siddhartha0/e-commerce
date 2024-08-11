import { useEffect, useRef } from "react";

function CloseFromOutside(callback: () => void) {
  const ref = useRef(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      ref?.current &&
      !ref?.current?.contains(event.target) &&
      ref?.current &&
      !ref?.current?.contains(event.target)
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return ref;
}

export default CloseFromOutside;
