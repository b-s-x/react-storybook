import React, { useEffect, useCallback } from "react";
import { useKey } from "react-use";
import { calculateProgress } from "@/utils";

export const useChangeHandler = (ref, { count, gap, onChange }) => {
  const keyPressPredicate = useCallback(
    event => {
      const val = Number(event.key);
      return (
        event.target === ref.current &&
        !Number.isNaN(val) &&
        val <= count &&
        val > 0
      );
    },
    [count, ref]
  );

  const handleKeyPress = useCallback(event => onChange(Number(event.key)), [
    onChange
  ]);

  useKey(keyPressPredicate, handleKeyPress, { event: "keyup" });

  const onClick = useCallback(
    event => {
      const { left, width: elW } = ref.current.getBoundingClientRect();
      const elX = event.pageX - left - window.scrollX;
      const progress = calculateProgress({ elW, elX, count, gap });
      onChange(progress);
    },
    [ref, count, gap, onChange]
  );

  useEffect(() => {
    const { current } = ref;
    if (current) current.addEventListener("click", onClick);
    return () => current.removeEventListener("click", onClick);
  }, [ref, onClick]);

  return;
};