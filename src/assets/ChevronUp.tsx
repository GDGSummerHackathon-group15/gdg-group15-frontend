import * as React from 'react';

function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill={'none'}
      viewBox={'0 0 24 24'}
      stroke={'currentColor'}
      {...props}
    >
      <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={2} d={'M5 15l7-7 7 7'} />
    </svg>
  );
}

export default ChevronUp;
