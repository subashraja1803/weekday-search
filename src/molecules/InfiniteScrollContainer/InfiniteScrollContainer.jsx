import React, { useEffect, useState } from "react";
import InlineLoader from "../InlineLoader";
import { useIntersectionalObserver } from "../../Utils/customHooks";

const InfiniteScrollContainer = ({
  className = "",
  children,
  onScrollNext,
  hasMoreRecords,
}) => {
  const [showLoader, setLoaderVisibility] = useState(false);
  const [elementRef, elementVisible] = useIntersectionalObserver({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  const containerClass = `${className}`;
  useEffect(() => {
    if (showLoader) {
      setTimeout(() => {
        setLoaderVisibility(!showLoader);
      }, 1500);
    }
  }, [children]);
  useEffect(() => {
    if (elementVisible && hasMoreRecords) {
      setLoaderVisibility(true);
      onScrollNext();
    }
  }, [elementVisible, hasMoreRecords]);
  return (
    <div id="infinite_scroll" className={containerClass}>
      <div id="infinite_scroll_container">
        {children}
        {elementRef && hasMoreRecords && (
          <span id="scroll_span" ref={elementRef}></span>
        )}
      </div>
      {showLoader && <InlineLoader />}
    </div>
  );
};

export default InfiniteScrollContainer;
