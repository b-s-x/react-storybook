import React, { useState } from "react";
import { Star as StarComponent } from './Star';
import { Rating as RatingComponent } from './Rating';
import { RatingField } from './RatingField';

export default {
  title: 'Stars/StarsSimple',
  component: [ StarComponent, RatingComponent, RatingField],
  argTypes: {},
};

export const Star = args => {
  return (
    <div
      style={{
        paddingTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <StarComponent {...args} />
    </div>
  )
};

Star.args = {
  progress: 0.4,
  width: 56,
  height: 45,
  inactiveFill: "lightgrey",
  progressFill: "gold",
};


export const Rating = args => {
  return (
    <div
      style={{
        paddingTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <RatingComponent
        {...args}
        renderItem={({ key, progress }) => (
          <StarComponent
            key={key}
            progress={progress}
            width={56}
            height={45}
          />
        )}
      />
    </div>
  )
};

Rating.args = {
  max: 5,
  rating: 3.5,
  gap: 3,
  count: 5,

  progress: 0.4,
  width: 56,
  height: 45,
  inactiveFill: "lightgrey",
  progressFill: "gold",
};

export const RatingDynamic = args => {
  const [rating, setRating] = useState(0);
  return (
    <div
      style={{
        paddingTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <span>
        Selected: {rating}
      </span>
      <RatingField
          {...args}
          value={rating}
          onChange={setRating}
          renderItem={({ key, progress }) => (
            <Star
              key={key}
              progress={progress}
              width={56}
              height={45}
            />
          )}
        />
    </div>
  )
};

RatingDynamic.args = {
  max: 5,
  gap: 10,
  count: 5,
};