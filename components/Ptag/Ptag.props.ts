import { ReactNode } from "react";
import { DetailedForExtend } from "../../common/types";

export interface PtagProps extends DetailedForExtend<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'l' | 'm' | 's';
}