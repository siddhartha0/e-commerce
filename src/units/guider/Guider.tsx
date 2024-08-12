import { Link } from "react-router-dom";
import classnames from "classnames";
import { StyleProps } from "../../constant";
import React from "react";

interface guiderPropsTypes
  extends StyleProps,
    React.RefAttributes<HTMLAnchorElement> {
  path: string;
  title: string;
}

export const Guider = React.memo(
  ({
    path,
    title,
    textSize = "text-xl",
    fontWeight = "font-[500]",
    textColor = "#111111",
    animationProps = "animate-pulsing",
    ...other
  }: guiderPropsTypes) => {
    return (
      <Link
        to={path}
        className={classnames(
          fontWeight,
          textSize,
          textColor,
          `hover:${animationProps}`
        )}
        {...other}
      >
        {title}
      </Link>
    );
  }
);
