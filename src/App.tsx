import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Container, makeStyles } from '@material-ui/core';
import { PortFolioLayout } from './components/PortfolioLayout';
import { HomeLayout } from './components/HomeLayout';
import './App.css';
import { PageHeader } from './components/PageHeader';
import { ScrollTop } from './components/ScrollTop';
import { SlideLayout } from './components/SlideLayout';

type AppProps = RouteComponentProps;

const useStyles = makeStyles({
  app: {
    height: '140px',
  },
});

const App: React.FC<AppProps> = ({ history }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const menuItems = ['home', 'portfolio', 'slide', 'links'];

  const handleOnClickMenu = (menuIndex: number) => {
    setActiveMenuIndex(menuIndex);
    history.push(menuItems[menuIndex]);
  };

  const classes = useStyles();

  return (
    <div className="container">
      <PageHeader
        menuItems={menuItems}
        activeMenuIndex={activeMenuIndex}
        handleOnClickMenu={handleOnClickMenu}
      />
      <Container>
        <div id="back-to-top-anchor" className={classes.app}>
          {' '}
        </div>
        <Route path="/" exact component={HomeLayout} />
        <Route path="/home" component={HomeLayout} />
        <Route path="/portfolio" component={PortFolioLayout} />
        <Route path="/slide" component={SlideLayout} />
        <ScrollTop />
      </Container>
    </div>
  );
};

export default withRouter(App);
