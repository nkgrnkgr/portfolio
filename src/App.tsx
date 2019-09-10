import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Toolbar } from '@material-ui/core';
import { PortFolioLayout } from './components/PortfolioLayout';
import { HomeLayout } from './components/HomeLayout';
import './App.css';
import { PageHeader } from './components/PageHeader';
import { ScrollTop } from './components/ScrollTop';

type AppProps = RouteComponentProps;

const App: React.FC<AppProps> = props => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const menuItems = ['home', 'portfolio', 'slide', 'links'];

  const handleOnClickMenu = (menuIndex: number) => {
    setActiveMenuIndex(menuIndex);
    props.history.push(menuItems[menuIndex]);
  };

  return (
    <div className="container">
      <PageHeader
        menuItems={menuItems}
        activeMenuIndex={activeMenuIndex}
        handleOnClickMenu={handleOnClickMenu}
      />
      <Toolbar id="back-to-top-anchor" />
      <Route path="/" exact component={HomeLayout} />
      <Route path="/home" exact component={HomeLayout} />
      <Route path="/portfolio" component={PortFolioLayout} />
      <ScrollTop {...props} />
    </div>
  );
};

export default withRouter(App);
