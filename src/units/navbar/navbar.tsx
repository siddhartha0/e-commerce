import classNames from "classnames";
import { StyleProps } from "../../constant";
import React from "react";

interface navbarPropTypes extends StyleProps {
  animationClass: string;
  children: React.ReactNode;
}

export const Navbar = React.memo(
  ({ children, animationClass }: navbarPropTypes) => {
    return (
      <div
        className={classNames(
          "w-[100%] sticky top-0  flex  justify-between p-7 bg-white z-10 ",
          animationClass
        )}
      >
        {children}
      </div>
    );
  }
);
