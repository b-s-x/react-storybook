import React from 'react';


export const decorators = [
  (Story) => (
    <div style={{ width: '100vw', height: '100vh', padding: '4rem' }}>
      <Story />
    </div>
  ),
];