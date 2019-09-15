import React, { useEffect } from 'react';
import { currentMenuIndex, NOT_EXSIT_IN_MENU } from '../hooks/ActiveMenu';

interface Props {
  setMenuIndex: (index: number) => void;
  path?: string;
}

export const LayoutContainer: React.FC<Props> = ({
  path,
  setMenuIndex,
  children,
}) => {
  useEffect(() => {
    const index = path ? currentMenuIndex(path) : NOT_EXSIT_IN_MENU;
    setMenuIndex(index);
  }, []);

  return <>{children}</>;
};
