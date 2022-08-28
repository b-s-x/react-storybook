import React from 'react';
import { WaveSimple } from '.';

export default {
  title: 'Waves/WaveSimple',
  component: WaveSimple,
  argTypes: {},
};

const Template = args => {
  return (
    <WaveSimple {...args} />
  );
};

export const Wave = Template.bind({});
Wave.args = {
  color: '0,0,0',
  config: {},
};
