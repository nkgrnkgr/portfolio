import React from 'react';
import { RouteComponentProps } from 'react-router';

type Props = RouteComponentProps;

export const ApplicationContext = React.createContext(({} as unknown) as Props);
export const ApplicationMenuProvider: React.FC<Props> = ({
  children,
  history,
  match,
  location,
  staticContext,
}) => {
  return (
    <ApplicationContext.Provider
      value={{ history, location, match, staticContext }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
