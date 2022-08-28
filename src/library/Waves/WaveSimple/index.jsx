import styles from './index.module.scss';

const configDefault = [
  {
    x: 48,
    y: 0,
    opacity: .7,
  },
  {
    x: 48,
    y: .3,
    opacity: .5,
  },
  {
    x: 48,
    y: .5,
    opacity: .3,
  },
  {
    x: 48,
    y: .7,
    opacity: 'none',
  },
];

export const WaveSimple = ({ color, config }) => {
  const CONFIG = (config && Object.keys(config).length > 0) || configDefault;

  return (
    <svg
      className={styles.waves}
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>

      <g className={styles.parallax}>
        {CONFIG.map(({ x, y, opacity }, index) => {
          return (
            <use
              key={index}
              xlinkHref="#wave"
              x={x}
              y={y}
              fill={`rgba(${color}, ${opacity})`}
            />
          )
        })}
      </g>
    </svg>
  )
}