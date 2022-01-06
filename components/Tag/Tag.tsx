import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "s",
  color = "ghost",
  children,
  href,
  className,
  ...restProps
}: TagProps) => {
  const classes = cn(className, styles.tag, {
    [styles[size]]: size,
    [styles[color]]: color,
  });
  return (
    <div className={classes} {...restProps}>
      {href ? <a href={href}>children</a> : children}
    </div>
  );
};
