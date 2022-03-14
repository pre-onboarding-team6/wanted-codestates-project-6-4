import React from 'react';

export default function Share({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '2.2rem'}
      height={height || '2.2rem'}
      viewBox="3 -3 20 27"
      fill="none"
      stroke="#909090"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="16" />
    </svg>
  );
}
