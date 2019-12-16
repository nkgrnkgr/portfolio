import React, { useContext, useEffect } from 'react';
import {
  ActiveMenuContext,
  currentMenuIndex,
  NOT_EXSIT_IN_MENU,
} from '../contexts/ActiveMenuProvider';

interface Props {
  path?: string;
}

export const LayoutWrapper: React.FC<Props> = ({ children, path }) => {
  const { setActiveMenuIndex } = useContext(ActiveMenuContext);

  useEffect(() => {
    const index = path ? currentMenuIndex(path) : NOT_EXSIT_IN_MENU;
    setActiveMenuIndex(index);
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
