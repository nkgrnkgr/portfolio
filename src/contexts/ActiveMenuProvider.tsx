import React, { useState } from 'react';

export const MENU_ITEMS = ['home', 'portfolio', 'slide', 'links'];

export const NOT_EXSIT_IN_MENU = -1;

interface ContextProps {
  activeMenuIndex: number;
  setActiveMenuIndex: React.Dispatch<React.SetStateAction<number>>;
}

const initialValue = {
  activeMenuIndex: 0,
};

export const ActiveMenuContext = React.createContext(
  ({} as unknown) as ContextProps,
);
export const ActiveMenuProvider: React.FC = ({ children }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(
    initialValue.activeMenuIndex,
  );

  return (
    <ActiveMenuContext.Provider value={{ activeMenuIndex, setActiveMenuIndex }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};

export const currentMenuIndex = (path: string) => {
  return MENU_ITEMS.indexOf(path.replace('/', ''));
};
