import { useMouseHovered } from "react-use";
import { calculateProgress } from "@/utils";

export const useProgress = (ref, { gap, count }) => {
  const { elX, elW } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true
  });

  return calculateProgress({ elW, elX, count, gap });
};