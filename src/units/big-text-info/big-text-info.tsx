import classnames from "classnames";
import { TextProps } from "../../constant";
import React from "react";

export const BigTextInfo = React.memo(
  ({
    title,
    fontWeight = "font-[500]",
    textSize = "text-6xl",
    textColor = "text-brand",
    lineHeight = "leading-[5rem]",
    width = "w-96",
    textDecoration = "capitalize",
    className,
  }: TextProps) => {
    return (
      <article
        className={classnames(
          fontWeight,
          textSize,
          textColor,
          lineHeight,
          textDecoration,
          width,
          className
        )}
      >
        {title}
      </article>
    );
  }
);
