import React from "react";
import { PtagProps } from "./Ptag.props";
import cn from "classnames";
import styles from "./Ptag.module.css";

export const Ptag = ({
  size = "m",
  className,
  children,
  ...restProps
}: PtagProps) => {
  const classes = cn(className, styles.paragraph, {
    [styles[size]]: size,
  });
  return (
    <p className={classes} {...restProps}>
      {children}
    </p>
  );
};
