import { useState } from 'react';

export const menuItems = ['home', 'portfolio', 'slide', 'links'];

export const useGetActiveMenuIndex = (
  initialValue = 0,
): [number, (menuIndex: number) => void] => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(initialValue);
  const setMenuIndex = (menuIndex: number) => {
    setActiveMenuIndex(menuIndex);
  };

  return [activeMenuIndex, setMenuIndex];
};

export const currentMenuIndex = (path: string) => {
  return menuItems.indexOf(path.replace('/', ''));
};
