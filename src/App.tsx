import { useRef } from "react";
import "./App.css";
import { Header, TopSection, MidSection } from "./components/index";
import { useScrollBarContent } from "./constant/context-hooks/ScrollBarContext";

function App() {
  const scrollContext = useScrollBarContent();
  const lastScrollTop = useRef(0);

  const captureWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollDirection = e.deltaY > 0 ? "down" : "up";
    if (
      scrollDirection === "up" &&
      lastScrollTop.current >= e.currentTarget.scrollTop
    ) {
      scrollContext?.setUpMotionScrolledStatus(true);
    } else if (
      scrollDirection === "down" &&
      lastScrollTop.current <= e.currentTarget.scrollTop
    ) {
      scrollContext?.setUpMotionScrolledStatus(false);
    }
    lastScrollTop.current = e.currentTarget.scrollTop;
  };

  return (
    <div onWheel={captureWheel} className="flex flex-col">
      <Header />
      <TopSection />
      <MidSection />
    </div>
  );
}

export default App;
