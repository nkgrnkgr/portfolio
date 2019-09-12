import React from 'react';
import { portfolioData } from '../models/Portfolio';
import { ContensLayout } from './ContensLayout';

export const PortFolioLayout: React.FC = () => {
  return <ContensLayout pageTitle="Portfolit" contens={portfolioData} />;
};
