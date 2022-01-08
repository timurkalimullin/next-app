import React, { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...restProps
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (rat: number) => {
    if (!isEditable) return;
    constructRating(rat);
  };

  const onClick = (rat: number) => {
    if (!isEditable) return;
    setRating?.(rat);
  };

  const handleSpace = (rat: number, e: React.KeyboardEvent) => {
    if (e.code !== "Space" || !isEditable) return;
    setRating?.(rat);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => {
      const iconClass = cn(styles.star, {
        [styles.filled]: i < currentRating,
        [styles.editable]: isEditable,
      });
      return (
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          onKeyDown={(e: React.KeyboardEvent) =>
            isEditable && handleSpace(i + 1, e)
          }
          className={iconClass}
          key={i}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...restProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
