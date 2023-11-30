import React, { useState, useEffect, useMemo} from 'react';

export function useMediaQuery(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
};

export const useMediaQueries = () => {
  const mobile = useMediaQuery("(min-width: 580px)");
  const tablet = useMediaQuery("(min-width: 830px)");
  const laptop = useMediaQuery("(min-width: 1200px)");

  return { mobile , tablet , laptop };
};
