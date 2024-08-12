import React from "react";
import { StyleProps } from "../../constant";
import classnames from "classnames";

interface cardPropTypes extends StyleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card = React.memo(
  ({
    children,
    width = "min-w-[395px]",
    height = "min-h-[510px]",
    marginTop,
    cursor,
    className,
    style,
  }: cardPropTypes) => {
    return (
      <main
        className={classnames(
          width,
          className,
          cursor,
          height,
          marginTop,
          "rounded-3xl"
        )}
        style={style}
      >
        {children}
      </main>
    );
  }
);
