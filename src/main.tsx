import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./App.css";
import { ScrollBarContent } from "./constant/context-hooks/ScrollBarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollBarContent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ScrollBarContent>
  </StrictMode>
);
