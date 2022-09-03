import React from "react";

export const Rating = ({ max: count, rating, gap, renderItem }) => {
  const normalizedCount = Math.floor(count);
  const normalizedRating = Math.min(rating, normalizedCount);
  const range = [...Array(normalizedCount).keys()];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${count}, auto)`,
        gridTemplateRows: "1fr",
        gridColumnGap: `${gap || 0}px`
      }}
    >
      {range.map(index => {
        const progress = Math.min(Math.max(normalizedRating - index, 0), 1);
        return renderItem({ key: index, progress });
      })}
    </div>
  );
};
