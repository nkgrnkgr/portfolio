import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import { Route, withRouter } from 'react-router-dom';
import { HomeLayout } from './components/HomeLayout';
import { LinkLayout } from './components/LinksLayout';
import { PageFooter } from './components/PageFooter';
import { PortFolioLayout } from './components/PortfolioLayout';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ScrollTop } from './components/ScrollTop';
import { SlideLayout } from './components/SlideLayout';
import { LayoutWrapper } from './containers/LayoutWrapper';
import { PageHeader } from './containers/PageHeader';
import { ActiveMenuProvider } from './contexts/ActiveMenuProvider';
import { ApplicationMenuProvider } from './contexts/ApplicationProvider';
import './App.css';

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

const App: React.FC<AppProps> = props => {
  const classes = useStyles();

  return (
    <ApplicationMenuProvider {...props}>
      <ActiveMenuProvider>
        <PageHeader />
        <Container className={classes.root}>
          <div id="back-to-top-anchor" className={classes.app} />
          <Route
            path="/"
            exact
            render={() => (
              <LayoutWrapper path="home">
                <HomeLayout />
              </LayoutWrapper>
            )}
          />
          <Route
            path="/home"
            render={() => (
              <LayoutWrapper path="home">
                <HomeLayout />
              </LayoutWrapper>
            )}
          />
          <Route
            path="/portfolio"
            render={() => (
              <LayoutWrapper path="portfolio">
                <PortFolioLayout />
              </LayoutWrapper>
            )}
          />
          <Route
            path="/slide"
            render={() => (
              <LayoutWrapper path="slide">
                <SlideLayout />
              </LayoutWrapper>
            )}
          />
          <Route
            path="/links"
            render={() => (
              <LayoutWrapper path="links">
                <LinkLayout />
              </LayoutWrapper>
            )}
          />
          <Route
            path="/privacypolicy"
            render={() => (
              <LayoutWrapper>
                <PrivacyPolicyPage />
              </LayoutWrapper>
            )}
          />
          <ScrollTop />
          <PageFooter />
        </Container>
      </ActiveMenuProvider>
    </ApplicationMenuProvider>
  );
};

export default withRouter(App);
