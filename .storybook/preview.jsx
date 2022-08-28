import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ padding: '3rem' }}>
      <Story />
    </div>
  ),
];