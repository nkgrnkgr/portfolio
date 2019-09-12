import AccessibilityCheckList from '../images/AccessibilityCheckList.png';
import nkgrnkgr from '../images/nkgrnkgr.png';
import Webpack4ConfigGenerator from '../images/Webpack4ConfigGenerator.png';
import sql2csv from '../images/sql2csv.png';
import InHouseUse from '../images/inhouseUse.gif';

export const portfolioData = [
  {
    title: 'Google Tasks client',
    date: '2019/09/05',
    comment: 'Google Tasks Client Using React Redux TypeScript',
    linkUrl: 'https://tasks.nkgr.app/',
    githubUrl: 'https://github.com/nkgrnkgr/GoogleTask-ReactApp',
    image: {
      url:
        'https://cdn1.imggmi.com/uploads/2019/9/2/48e5eb2de6e851b367e18bac35d793b7-full.png',
      title: 'Google Tasks client',
    },
    chips: ['React', 'Hooks', 'Redux', 'TypeScript', 'Redux-Saga'],
  },
  {
    title: 'Google Tasks Client',
    date: '2019/03/08',
    comment: ' Where feedback to the speakers gather.',
    linkUrl: 'https://pyhu.nkgr.app',
    githubUrl: 'https://github.com/nkgrnkgr/put-your-hands-up',
    image: {
      url:
        'https://raw.githubusercontent.com/nkgrnkgr/put-your-hands-up/master/src/images/cap.png',
      title: 'PutYourHandsUp',
    },
    chips: ['React', 'Redux', 'TypeScript', 'Firebase'],
  },
  {
    title: 'expenses-automation',
    date: '2018/09/17',
    comment: 'Transportation expenses adjustment automation tool',
    linkUrl:
      'https://expenses-automation-app.firebaseapp.com/allowcalendaraccess',
    githubUrl: 'https://github.com/nkgrnkgr/expenses-automation',
    image: {
      url:
        'https://camo.githubusercontent.com/0a79468081911e994e658c20aa015d233156b9b4/68747470733a2f2f692e696d6775722e636f6d2f6878665831396e2e706e67',
      title: 'sql2csv',
    },
    chips: ['React', 'TypeScript', 'Kotlin', 'SpringBoot'],
  },
  {
    title: 'sql2csv',
    date: '2018/07/17',
    comment: 'MySQL Output Result to CSV or Clipboard',
    linkUrl:
      'https://9anx69nto8.execute-api.ap-northeast-1.amazonaws.com/prod/',
    githubUrl: 'https://github.com/nkgrnkgr/sql2csv/',
    image: {
      url: sql2csv,
      title: 'sql2csv',
    },
    chips: ['Node.js', 'Serverless-Express', 'lambda'],
  },
  {
    title: 'Webpack4 Config Generator',
    date: '2018/06/03',
    comment:
      'Generate a example of webpack config file by selecting some options.',
    linkUrl: 'https://nkgrnkgr.github.io/webpack-config-generator/',
    githubUrl: 'https://github.com/nkgrnkgr/webpack-config-generator',
    image: {
      url: Webpack4ConfigGenerator,
      title: 'Webpack4 Config Generator',
    },
    chips: ['React', 'Material-UI'],
  },
  {
    title: 'nkgrnkgr CLI',
    date: '2018/05/17',
    comment: 'BussinessCard CLI',
    linkUrl: 'https://www.npmjs.com/package/nkgrnkgr',
    githubUrl: 'https://github.com/nkgrnkgr/nkgrnkgr',
    image: {
      url: nkgrnkgr,
      title: 'nkgrngkr CLI',
    },
    chips: ['CLI', 'Javascript'],
  },
  {
    title: 'InHouseUse',
    date: '2016/12/30',
    comment:
      'レガシーエンジニアのためのフロントエンド社内勉強用のポータルサイト',
    linkUrl: 'https://inhouseuse.github.io/',
    githubUrl: 'https://github.com/inhouseuse/inhouseuse.github.io',
    image: {
      url: InHouseUse,
      title: 'InHouseUse',
    },
    chips: ['Vue 1.x'],
  },
  {
    title: 'AccessibilityCheckList',
    date: '2017/04/05',
    comment: 'デザイニングWebアクセシビリティを実践するためのチェックリスト',
    linkUrl: 'https://accessibilitychecklist.github.io/',
    githubUrl:
      'https://github.com/AccessibilityCheckList/AccessibilityCheckList.github.io',
    image: {
      url: AccessibilityCheckList,
      title: 'AccessibilityCheckList',
    },
    chips: ['jQuery'],
  },
];

export default portfolioData;
