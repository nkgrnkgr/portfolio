import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Container, makeStyles } from '@material-ui/core';
import { PortFolioLayout } from './components/PortfolioLayout';
import { HomeLayout } from './components/HomeLayout';
import { PageHeader } from './components/PageHeader';
import { ScrollTop } from './components/ScrollTop';
import { SlideLayout } from './components/SlideLayout';
import { LinkLayout } from './components/LinksLayout';
import { menuItems, useGetActiveMenuIndex } from './hooks/ActiveMenu';
import { LayoutContainer } from './components/LayoutContainer';

import './App.css';
import { PageFooter } from './components/PageFooter';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';

type AppProps = RouteComponentProps;

const useStyles = makeStyles({
  app: {
    height: '140px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '99vh',
  },
});

const App: React.FC<AppProps> = ({ history }) => {
  const [activeMenuIndex, setMenuIndex] = useGetActiveMenuIndex();

  const handleOnClickMenu = (menuIndex: number) => {
    setMenuIndex(menuIndex);
    history.push(menuItems[menuIndex]);
  };

  const classes = useStyles();

  return (
    <>
      <PageHeader
        activeMenuIndex={activeMenuIndex}
        handleOnClickMenu={handleOnClickMenu}
      />
      <Container className={classes.root}>
        <div id="back-to-top-anchor" className={classes.app} />
        <Route
          path="/"
          exact
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex} path="home">
              <HomeLayout />
            </LayoutContainer>
          )}
        />
        <Route
          path="/home"
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex} path="home">
              <HomeLayout />
            </LayoutContainer>
          )}
        />
        <Route
          path="/portfolio"
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex} path="portfolio">
              <PortFolioLayout />
            </LayoutContainer>
          )}
        />
        <Route
          path="/slide"
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex} path="slide">
              <SlideLayout />
            </LayoutContainer>
          )}
        />
        <Route
          path="/links"
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex} path="links">
              <LinkLayout />
            </LayoutContainer>
          )}
        />
        <Route
          path="/privacypolicy"
          render={() => (
            <LayoutContainer setMenuIndex={setMenuIndex}>
              <PrivacyPolicyPage />
            </LayoutContainer>
          )}
        />
        <ScrollTop />
        <PageFooter />
      </Container>
    </>
  );
};

export default withRouter(App);
