import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps) => {
  return React.createElement(tag, { className: styles[tag] }, children);
};
