import * as React from 'react';
import { Global, css } from '@emotion/react';
import Header from './Header';

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Global
        styles={css`
          html {
            background: linear-gradient(
              to right bottom,
              var(--placid-blue),
              var(--lavender),
              var(--prism-pink)
            );
          }

          body {
            overflow: hidden;
            background: linear-gradient(
              to right bottom,
              var(--placid-blue),
              var(--lavender),
              var(--prism-pink)
            );
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #root {
            background-color: rgba(255, 255, 255, 0.18);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 10px;
            margin: 8px;
            width: calc(100% - 1rem);
            height: calc(100% - 1rem);

            @media (min-width: 360px) and (min-height: 720px) {
              margin: 0;
              width: 360px;
              height: 720px;
            }
          }
        `}
      />
      <Header />
      {children}
    </>
  );
}

export default Layout;
