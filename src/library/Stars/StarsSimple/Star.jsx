import React, { useState, useEffect } from "react";
import SvgContainer from '@/components/SvgContainer';

let index = 0;

export const useId = (prefix = '') => {
  const [id, setId] = useState(null);
  const genId = prefix => `${prefix}${++index}`;
  useEffect(() => setId(genId(prefix)), [prefix]);
  return id;
};

export const Star = ({
  progress,
  inactiveFill,
  progressFill,
  width,
  height,
}) => {
  const maskId = useId();
  const normalizedProgress = Math.min(Math.max(0, progress), 1);
  const maskWidth = normalizedProgress * 100;

  return (
    <SvgContainer
      width={width}
      height={height}
      viewBox="0 0 30 27"
    >
      <mask id={maskId}>
        <rect
          width={maskWidth + "%"}
          height="100%"
          fill="white"
        />
      </mask>
      <path
        d="M15.0025 1.57384L17.8939 10.1596L18.0085 10.5H18.3677H27.7938L20.1446 16.3739L19.8734 16.5822L19.9691 16.9104L22.4556 25.4419L15.2868 20.4237L15 20.223L14.7133 20.4237L7.54445 25.4419L10.031 16.9104L10.1265 16.5828L9.85623 16.3745L2.23607 10.5H11.6667H12.0271L12.141 10.1581L15.0025 1.57384Z"
        fill={inactiveFill}
      />
      <path
        d="M15.0025 1.57384L17.8939 10.1596L18.0085 10.5H18.3677H27.7938L20.1446 16.3739L19.8734 16.5822L19.9691 16.9104L22.4556 25.4419L15.2868 20.4237L15 20.223L14.7133 20.4237L7.54445 25.4419L10.031 16.9104L10.1265 16.5828L9.85623 16.3745L2.23607 10.5H11.6667H12.0271L12.141 10.1581L15.0025 1.57384Z"
        fill={progressFill}
        stroke={progressFill}
        mask={`url(#${maskId})`}
      />
    </SvgContainer>
  );
};

Star.defaultProps = {
  inactiveFill: "lightgrey",
  progressFill: "gold",
  progress: 0
};
