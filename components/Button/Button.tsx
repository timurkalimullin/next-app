import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  appearance = "primary",
  children,
  className,
  ...restProps
}: ButtonProps) => {
  const classes = cn(styles.button, className, {
    [styles.primary]: appearance === "primary",
    [styles.ghost]: appearance === "ghost",
  });
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};
