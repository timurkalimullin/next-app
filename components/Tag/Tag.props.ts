import { ReactNode } from "react";
import { DetailedForExtend } from "../../common/types";

export interface TagProps extends DetailedForExtend<HTMLDivElement> {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}