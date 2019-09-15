import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { menuItems } from '../hooks/ActiveMenu';

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
      {menuItems.map(item => (
        <Tab key={item} label={item} />
      ))}
    </Tabs>
  );
};
