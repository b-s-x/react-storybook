import SvgContainer from '@/components/SvgContainer';

const d = 'M39.5,58.8l-6.6,8.8l5,6.7l-2.8,2.1c-3-3.9-7.9-10.5-7.9-10.5l-10.5,14h38.6L39.5,58.8z'
const IconMountain = props => {
  return (
    <SvgContainer
      {...props}
      viewBox="0 0 100 100"
    >
      <path
        d={d}
        stroke={props.color}
      />
    </SvgContainer>
  )
}

IconMountain.d = d;

export { IconMountain };
