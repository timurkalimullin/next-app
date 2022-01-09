import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Header.module.css";

export const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Sidebar</div>;
};
