export const calculateProgress = ({ elW, elX, count, gap }) => {
  const itemW = (elW - (count - 1) * gap) / count + gap;
  return Math.ceil(elX / itemW);
};
