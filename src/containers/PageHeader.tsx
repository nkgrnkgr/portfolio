import React, { useContext } from 'react';
import { PageHeader as PageHeaderComponent } from '../components/PageHeader';
import { ActiveMenuContext, MENU_ITEMS } from '../contexts/ActiveMenuProvider';
import { ApplicationContext } from '../contexts/ApplicationProvider';

export const PageHeader: React.FC = () => {
  const { activeMenuIndex, setActiveMenuIndex } = useContext(ActiveMenuContext);
  const { history } = useContext(ApplicationContext);

  const handleOnClickMenu = (index: number) => {
    setActiveMenuIndex(index);
    history.push(MENU_ITEMS[index]);
  };

  return (
    <PageHeaderComponent
      activeMenuIndex={activeMenuIndex}
      handleOnClickMenu={handleOnClickMenu}
    />
  );
};
