import React from "react";
import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
