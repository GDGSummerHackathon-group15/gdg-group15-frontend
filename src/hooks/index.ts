import * as React from 'react';

export function useMedia(query: string) {
  const mediaQuery = matchMedia(query);

  const [isMatches, setIsMatches] = React.useState<boolean>(mediaQuery.matches);

  React.useEffect(() => {
    const updateListener = () => {
      setIsMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', updateListener);
    updateListener();

    return () => {
      mediaQuery.removeEventListener('change', updateListener);
    };
  }, [mediaQuery]);

  return isMatches;
}

export function useIsMobile() {
  const isMatches = useMedia('(min-width: 479px) and (max-width: 479px)');

  return isMatches;
}

export function useIsTablet() {
  const isMatches = useMedia('(min-width: 480px) and (max-width: 1023px)');

  return isMatches;
}

export function useIsDesktop() {
  const isMatches = useMedia('(min-width: 1024px)');

  return isMatches;
}
