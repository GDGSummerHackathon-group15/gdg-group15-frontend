import * as React from 'react';

function Heart(props: React.SVGProps<SVGSVGElement>) {
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
        d={
          'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        }
      />
    </svg>
  );
}

export default Heart;
