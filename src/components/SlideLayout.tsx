import React from 'react';
import { SlideData } from '../models/Slide';
import { ContensLayout } from './ContensLayout';

export const SlideLayout: React.FC = () => {
  return <ContensLayout pageTitle="Slide" contens={SlideData} />;
};
