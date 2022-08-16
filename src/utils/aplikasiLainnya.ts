import moment from 'moment';
import Samitra from '../assets/img/aplikasi_lainnya/Samitra.png';
import Dashboard from '../assets/img/aplikasi_lainnya/Dashboard.png';
import Blog from '../assets/img/aplikasi_lainnya/Blog.png';
import OHU from '../assets/img/aplikasi_lainnya/OHU.png';
import Insight from '../assets/img/aplikasi_lainnya/Insight.png';
import { AplikasiLainnyaData } from '../interfaces';
import 'moment/dist/locale/id';

moment.locale('id');
export const aplikasiLainnya: AplikasiLainnyaData[] = [
  {
    name: 'Samitra',
    src: Samitra,
    date: moment('20220818', 'YYYYMMDD'),
    url: 'https://samitra.katitb22.com',
  },
  {
    name: 'Dashboard',
    src: Dashboard,
    date: moment('20220815', 'YYYYMMDD'),
    url: 'https://dashboard.katitb22.com',
  },
  {
    name: 'Blog',
    src: Blog,
    date: moment('20220817', 'YYYYMMDD'),
    url: 'https://blog.katitb22.com',
  },
  {
    name: 'OHU',
    src: OHU,
    date: moment('20220827', 'YYYYMMDD'),
    url: 'https://ohu.katitb22.com',
  },
  {
    name: 'Insight',
    src: Insight,
    date: moment('20220828', 'YYYYMMDD'),
    url: 'https://insight.katitb22.com',
  },
];
