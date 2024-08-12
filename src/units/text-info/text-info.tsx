import classnames from "classnames";
import { TextProps } from "../../constant";
import React from "react";

export const TextInfo = React.memo(
  ({
    title,
    fontWeight = "font-[500]",
    textSize = "text-lg",
    textColor = "text-brand",
    marginTop,
    className,
  }: TextProps) => {
    return (
      <article
        className={classnames(
          fontWeight,
          textSize,
          textColor,
          marginTop,
          className
        )}
      >
        {title}
      </article>
    );
  }
);
