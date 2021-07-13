import * as React from 'react';

function LogoType1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={32} height={32} viewBox='0 0 32 32' fill='none' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.087 14.102c-.028.02.014-.036 0 0-.207.57-2.519 6.465.378 13.762a.21.21 0 00.14.123.192.192 0 00.176-.046 20.004 20.004 0 014.008-2.869c2.298-1.22 5.013-1.435 7.362-2.605 2.415-1.184 3.638-3.552 5.351-5.583 1.05-1.246 2.3-2.261 3.507-3.318.577-.51 1.2-1.149 1.906-1.457.149-.068.087-.32-.067-.37-2.351-.796-13.944-4.437-22.76 2.363z'
        fill='#f8cfd0'
      />
      <path
        d='M5.087 14.102c3.079-2.762 6.667-8.523 7.557-10.006a.204.216 0 01.361.044c.756 2.217 3.74 13.274-7.218 23.804a.2.212 0 01-.265.007.203.215 0 01-.057-.081c-1.078-2.73-2.477-8.455-.378-13.768.014-.033-.025.02 0 0z'
        fill='#29638b'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
    </svg>
  );
}

export default LogoType1;