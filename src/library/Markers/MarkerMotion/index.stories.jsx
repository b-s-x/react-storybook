import React from 'react';
import { IconBeach } from '@/icons/Beach';
import { IconMountain } from '@/icons/Mountain';
import { IconCity } from '@/icons/City';
import { IconJungle } from '@/icons/Jungle';
import { MarkerMotion } from '@/library/Markers/MarkerMotion';

const markers = [
  {
    imageUrl: "https://c1.staticflickr.com/5/4241/35467523155_346b08810f_q.jpg",
    textName: 'San Blas',
    textPlace: 'Islands',
    iconD: IconBeach.d,
    width: '36',
    color: 'black',
    colorText: 'black'
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1615189663012-94d7be1a2687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    textName: 'New York',
    textPlace: 'City',
    iconD: IconCity.d,
    width: '36',
    color: 'black',
    colorText: 'black'
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1606318621597-c057f7d4926e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    textName: 'SMeili Snow',
    textPlace: 'Mountain',
    iconD: IconMountain.d,
    width: '36',
    color: 'black',
    colorText: 'black'
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1645313214465-38a3a40181d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    textName: 'Faridpur',
    textPlace: 'Jungle',
    iconD: IconJungle.d,
    width: '36',
    color: 'black',
    colorText: 'black'
  },
]

export default {
  title: 'Markers/MarkerMotion',
  component: MarkerMotion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Marker = args => {
  return (
    <div style={{ paddingTop: '3rem' }}>
      <MarkerMotion {...args} />
    </div>
  )
};

export const OneMarker = Marker.bind({});
OneMarker.args = {
  imageUrl: "https://c1.staticflickr.com/5/4241/35467523155_346b08810f_q.jpg",
  textName: 'San Blas',
  textPlace: 'Islands',
  iconD: IconBeach.d,
  width: '36',
  color: 'black',
  colorText: 'black'
};

const Markers = args => {
  return (
    <div
      style={{
        paddingTop: '3rem',
        display: 'flex',
        width: '500px',
        justifyContent: 'space-between'
      }}
    >
      {markers.map((marker, index) => {
        return (
          <MarkerMotion
            key={index}
            {...marker}
          />
        )
      })}
    </div>
  )
};

export const MultiplyMarker = Markers.bind({});
MultiplyMarker.args = {
  markers,
};
