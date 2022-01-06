import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import { DetailedForExtend } from "../../common/types";

export interface ButtonProps extends DetailedForExtend<HTMLButtonElement> {
  children: ReactNode;
  appearance?: 'primary' | 'ghost';
}