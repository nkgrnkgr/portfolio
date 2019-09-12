import aws from '../images/aws.png';
import es6 from '../images/es6.png';
import kt from '../images/kt.png';
import fb from '../images/fb.png';
import scrum from '../images/scrum.png';
import react1 from '../images/react1.png';
import react from '../images/react.png';
import { ContensModel } from './Contens';

export const SlideData: ContensModel[] = [
  {
    published: '2019/03/24',
    linkUrl:
      'https://speakerdeck.com/undefined_name/does-react-redux-firebase-spark-joy-6bb3b8fc-1e75-4c00-a9b8-78ad08546cf1',
    imageUrl: fb,
    tags: ['Firebase', 'React', 'TypeScript'],
  },
  {
    published: '2019/01/16',
    linkUrl:
      'https://speakerdeck.com/undefined_name/kotlin-plus-springboottesahisuwozuo-tutekotlinwohao-kininatutafalsetesofalseliang-sawoshao-jie-suru',
    imageUrl: kt,
    tags: ['Kotlin', 'SpringBoot'],
  },
  {
    published: '2018/11/25',
    linkUrl:
      'https://speakerdeck.com/undefined_name/xiao-sakuhasimerusukuramukai-fa',
    imageUrl: scrum,
    tags: ['Scrum', 'TeamBuilding'],
  },
  {
    published: '2018/11/01',
    linkUrl:
      'https://speakerdeck.com/undefined_name/typescriptahurifalse-zuo-cheng-tede-tazhi-jian-wogong-you-sisitutu-you-shi-zhe-nimasakaritesutasutanisaretai',
    imageUrl: react1,
    tags: ['React', 'TypeScript', 'WebService'],
  },
  {
    published: '2018/08/03',
    linkUrl:
      'https://speakerdeck.com/undefined_name/aws-serverless-express-ru-men',
    imageUrl: aws,
    tags: ['Lambda', 'Express', 'Node.js'],
  },
  {
    published: '2017/06/12',
    linkUrl: 'https://speakerdeck.com/undefined_name/es2015-es6-ru-men',
    imageUrl: es6,
    tags: ['es6', 'JavaScript'],
  },
  {
    published: '2017/04/16',
    linkUrl: 'https://speakerdeck.com/undefined_name/bu-kunaireact',
    imageUrl: react,
    tags: ['React'],
  },
];