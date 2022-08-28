import SvgContainer from '@/components/SvgContainer';

const d = 'M38.3,74.8l2.9-2.9L54,84.8l-2.9,2.9L38.3,74.8z M46.8,63.3l5.7-5.7c-7.9-7.9-20.7-7.9-28.6,0C31.8,55,40.6,57.1,46.8,63.3z M23.9,57.6c-7.9,7.9-7.9,20.7,0,28.6l5.7-5.7C23.4,74.2,21.3,65.5,23.9,57.6z M23.9,57.6L23.9,57.6c-0.8,6,2.3,13.8,8.6,20.1 L44,66.2C37.7,59.9,30,56.8,23.9,57.6z';
const IconBeach = props => {
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
};

IconBeach.d = d;

export { IconBeach };

