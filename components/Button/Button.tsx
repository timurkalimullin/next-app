import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance = "primary",
  children,
  arrow,
  className,
  ...restProps
}: ButtonProps) => {
  const classes = cn(styles.button, className, {
    [styles.primary]: appearance === "primary",
    [styles.ghost]: appearance === "ghost",
  });
  const arrowClasses = cn(styles.arrow, {
    [styles.down]: arrow === "down",
  });
  return (
    <button className={classes} {...restProps}>
      {children}
      {arrow && (
        <span className={arrowClasses}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
