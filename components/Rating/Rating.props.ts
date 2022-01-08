import { ReactNode } from "react";
import { DetailedForExtend } from "../../common/types";

export interface RatingProps extends DetailedForExtend<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}