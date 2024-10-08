import { createContext, useContext, useState } from "react";

type scrollBarContextTypes = {
  upMotionScrolledStatus: boolean;
  setUpMotionScrolledStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

type scrollBarContentType = {
  children: React.ReactNode;
};

export const ScrollBarContext = createContext<scrollBarContextTypes | null>(
  null
);

export const ScrollBarContent = ({ children }: scrollBarContentType) => {
  const [upMotionScrolledStatus, setUpMotionScrolledStatus] =
    useState<boolean>(true);

  return (
    <ScrollBarContext.Provider
      value={{
        upMotionScrolledStatus,
        setUpMotionScrolledStatus,
      }}
    >
      {children}
    </ScrollBarContext.Provider>
  );
};

export const useScrollBarContent = () => {
  const scrollContext = useContext(ScrollBarContext);
  return scrollContext;
};
