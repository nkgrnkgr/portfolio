import AccessibilityCheckList from '../images/AccessibilityCheckList.png';
import nkgrnkgr from '../images/nkgrnkgr.png';
import Webpack4ConfigGenerator from '../images/Webpack4ConfigGenerator.png';
import sql2csv from '../images/sql2csv.png';
import InHouseUse from '../images/inhouseUse.gif';
import googletaskclient from '../images/googletaskclient.png';
import { ContensModel } from './Contens';

export const portfolioData: ContensModel[] = [
  {
    title: 'Google Tasks client',
    published: '2019/09/05',
    description: 'Google Tasks Client Using React Redux TypeScript',
    linkUrl: 'https://tasks.nkgr.app/',
    githubUrl: 'https://github.com/nkgrnkgr/GoogleTask-ReactApp',
    imageUrl: googletaskclient,
    tags: ['React', 'Hooks', 'Redux', 'TypeScript', 'Redux-Saga'],
  },
  {
    title: 'PutYourHandsUp',
    published: '2019/03/08',
    description: ' Where feedback to the speakers gather.',
    linkUrl: 'https://pyhu.nkgr.app',
    githubUrl: 'https://github.com/nkgrnkgr/put-your-hands-up',
    imageUrl:
      'https://raw.githubusercontent.com/nkgrnkgr/put-your-hands-up/master/src/images/cap.png',
    tags: ['React', 'Redux', 'TypeScript', 'Firebase'],
  },
  {
    title: 'expenses-automation',
    published: '2018/09/17',
    description: 'Transportation expenses adjustment automation tool',
    linkUrl:
      'https://expenses-automation-app.firebaseapp.com/allowcalendaraccess',
    githubUrl: 'https://github.com/nkgrnkgr/expenses-automation',
    imageUrl:
      'https://camo.githubusercontent.com/0a79468081911e994e658c20aa015d233156b9b4/68747470733a2f2f692e696d6775722e636f6d2f6878665831396e2e706e67',
    tags: ['React', 'TypeScript', 'Kotlin', 'SpringBoot'],
  },
  {
    title: 'sql2csv',
    published: '2018/07/17',
    description: 'MySQL Output Result to CSV or Clipboard',
    linkUrl:
      'https://9anx69nto8.execute-api.ap-northeast-1.amazonaws.com/prod/',
    githubUrl: 'https://github.com/nkgrnkgr/sql2csv/',
    imageUrl: sql2csv,
    tags: ['Node.js', 'Serverless-Express', 'lambda'],
  },
  {
    title: 'Webpack4 Config Generator',
    published: '2018/06/03',
    description:
      'Generate a example of webpack config file by selecting some options.',
    linkUrl: 'https://nkgrnkgr.github.io/webpack-config-generator/',
    githubUrl: 'https://github.com/nkgrnkgr/webpack-config-generator',
    imageUrl: Webpack4ConfigGenerator,
    tags: ['React', 'Material-UI'],
  },
  {
    title: 'nkgrnkgr CLI',
    published: '2018/05/17',
    description: 'BussinessCard CLI',
    linkUrl: 'https://www.npmjs.com/package/nkgrnkgr',
    githubUrl: 'https://github.com/nkgrnkgr/nkgrnkgr',
    imageUrl: nkgrnkgr,
    tags: ['CLI', 'Javascript'],
  },
  {
    title: 'InHouseUse',
    published: '2016/12/30',
    description:
      'レガシーエンジニアのためのフロントエンド社内勉強用のポータルサイト',
    linkUrl: 'https://inhouseuse.github.io/',
    githubUrl: 'https://github.com/inhouseuse/inhouseuse.github.io',
    imageUrl: InHouseUse,
    tags: ['Vue 1.x'],
  },
  {
    title: 'AccessibilityCheckList',
    published: '2017/04/05',
    description:
      'デザイニングWebアクセシビリティを実践するためのチェックリスト',
    linkUrl: 'https://accessibilitychecklist.github.io/',
    githubUrl:
      'https://github.com/AccessibilityCheckList/AccessibilityCheckList.github.io',
    imageUrl: AccessibilityCheckList,
    tags: ['jQuery'],
  },
];

export default portfolioData;
