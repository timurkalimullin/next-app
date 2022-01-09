import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps) => {
  const footerClasses = cn(className, styles.footer);
  return (
    <footer className={footerClasses} {...props}>
      <div>@ All rights reserved 2021 - {new Date().getFullYear()}</div>
      <a href="#" target="_blank">
        Docs
      </a>
      <a href="#" target="_blank">
        Politics
      </a>
    </footer>
  );
};
