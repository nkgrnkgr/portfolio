import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { PortFolioLayout } from './components/PortfolioLayout';
import { HomeLayout } from './components/HomeLayout';
import './App.css';
import { PageHeader } from './components/PageHeader';

type AppProps = RouteComponentProps;

const App: React.FC<AppProps> = ({ history }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const menuItems = ['home', 'portfolio', 'slide', 'links'];

  const handleOnClickMenu = (menuIndex: number) => {
    setActiveMenuIndex(menuIndex);
    history.push(menuItems[menuIndex]);
  };

  return (
    <div className="container">
      <PageHeader
        menuItems={menuItems}
        activeMenuIndex={activeMenuIndex}
        handleOnClickMenu={handleOnClickMenu}
      />
      <Route path="/" exact component={HomeLayout} />
      <Route path="/home" exact component={HomeLayout} />
      <Route path="/portfolio" component={PortFolioLayout} />
    </div>
  );
};

export default withRouter(App);
