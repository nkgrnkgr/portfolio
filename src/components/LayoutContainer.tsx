import React, { useEffect } from 'react';
import { currentMenuIndex } from '../hooks/ActiveMenu';

interface Props {
  setMenuIndex: (index: number) => void;
  path: string;
}

export const LayoutContainer: React.FC<Props> = ({
  path,
  setMenuIndex,
  children,
}) => {
  useEffect(() => {
    setMenuIndex(currentMenuIndex(path));
  }, []);

  return <>{children}</>;
};
