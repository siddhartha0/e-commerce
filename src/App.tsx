import { useState } from "react";
import "./App.css";
import { Header, TopSection } from "./components/index";

function App() {
  const [UpMotionScrolledStatus, setUpMotionScrolledStatus] = useState<
    boolean | null
  >(true);

  const captureWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const mousestatus = e?.deltaY;
    if (mousestatus <= 0) {
      setUpMotionScrolledStatus(true);
    } else {
      setUpMotionScrolledStatus(false);
    }
  };

  return (
    <div onWheel={captureWheel}>
      <Header UpMotionScrolledStatus={UpMotionScrolledStatus} />
      {/* {//TODO} */}
      <TopSection />
    </div>
  );
}

export default App;
