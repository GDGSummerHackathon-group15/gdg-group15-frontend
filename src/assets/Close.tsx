import * as React from 'react';

function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill={'none'}
      viewBox={'0 0 24 24'}
      stroke={'currentColor'}
      {...props}
    >
      <path
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={2}
        d={'M6 18L18 6M6 6l12 12'}
      />
    </svg>
  );
}

export default Close;
