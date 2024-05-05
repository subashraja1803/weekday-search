import { useEffect, useRef, useState } from "react";

export const useIntersectionalObserver = (options) => {
  const elementRef = useRef();
  const [elementVisible, setElementVisible] = useState(false);

  const callbackFunc = (entries) => {
    const [entry] = entries;
    setElementVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);
  return [elementRef, elementVisible];
};
