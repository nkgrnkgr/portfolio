import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { MENU_ITEMS } from '../contexts/ActiveMenuProvider';

interface Props {
  activeMenuIndex: number;
  handleOnClickMenu: (index: number) => void;
}

export const TabLayout: React.FC<Props> = ({
  activeMenuIndex,
  handleOnClickMenu,
}) => {
  const handleOnChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    handleOnClickMenu(newIndex);
  };

  return (
    <Tabs centered value={activeMenuIndex} onChange={handleOnChange}>
      {MENU_ITEMS.map(item => (
        <Tab key={item} label={item} />
      ))}
    </Tabs>
  );
};
