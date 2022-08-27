
const SvgContainer = ({
  width,
  height,
  color,
  className,
  style,
  viewBox,
  children,
  params,
}) => {
  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      width={`${width}px`}
      height={`${height}px`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...params}
    >
      {children}
    </svg>
  );
}

SvgContainer.defaultProps = {
  width: 34,
  height: 34,
  color: "#000000",
  viewBox: "0 0 34 34",
  style: {},
  className: "",
};

export default SvgContainer;