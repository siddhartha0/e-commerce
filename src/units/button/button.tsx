import classNames from "classnames";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "warning";
  size?: "small" | "medium" | "big";
  outline?: boolean;
}

export const Button = React.memo(
  ({
    children,
    variant = "default",
    type = "submit",
    size = "small",
    outline = false,
    ...other
  }: ButtonProps): JSX.Element => {
    return (
      <button
        className={classNames("-rounded-xl", {
          "text-white bg-blue-500 disabled:bg-blue-300 hover:bg-blue-600 focus:bg-blue-700":
            variant == "default" && !outline,
          "bg-white border-2 border-blue-500 disabled:bg-transparent disabled:border-blue-400 disabled:text-blue-300 hover:bg-blue-50 focus:bg-blue-200":
            variant == "default" && outline,
          "bg-red-300 text-white disabled:bg-red-100 hover:bg-red-400 focus:bg-red-500":
            variant == "warning" && !outline,
          "bg-transparent border-2 disabled:bg-transparent disabled:border-red-100 border-red-500 hover:bg-red-100 focus:bg-red-200":
            variant == "warning" && outline,
          "py-1.5 px-4 text-sm": size == "small",
          "py-2 px-4 text-base": size == "medium",
          "py-2.5 px-4 text-3xl": size == "big",
        })}
        type={type}
        {...other}
      >
        {children}
      </button>
    );
  }
);
