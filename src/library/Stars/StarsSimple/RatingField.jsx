import React, { useRef } from "react";
import { useHoverDirty } from "react-use";
import { useProgress } from "@/hooks/useProgress";
import { useChangeHandler } from "@/hooks/useChangeHandler";
import { Rating } from "./Rating";

const isTouchDevice = "ontouchstart" in window;

export const RatingFieldController = ({
  gap,
  onChange,
  value,
  max,
  children
}) => {
  const ratingRef = useRef(null);
  const isHovered = useHoverDirty(ratingRef) && !isTouchDevice;
  const progress = useProgress(ratingRef, { gap, count: max });

  useChangeHandler(ratingRef, { count: max, gap, onChange });

  return (
    <div ref={ratingRef} tabIndex="0">
      {children({currentRating: isHovered ? progress : value})}
    </div>
  );
};

export const RatingField = ({ gap, onChange, value, max, renderItem }) => (
  <RatingFieldController
    max={max}
    gap={gap}
    value={value}
    onChange={onChange}
  >
    {({ currentRating }) => (
      <Rating
        max={max}
        gap={gap}
        rating={currentRating}
        renderItem={renderItem}
      />
    )}
  </RatingFieldController>
);
