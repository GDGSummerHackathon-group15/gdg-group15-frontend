import * as React from 'react';

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill={'none'}
      viewBox={'0 0 24 24'}
      stroke={'currentColor'}
      {...props}
    >
      <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={2} d={'M9 5l7 7-7 7'} />
    </svg>
  );
}

export default ChevronRight;
