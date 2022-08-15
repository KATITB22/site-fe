import { Moment } from 'moment';

export interface Color {
  yellow: string;
  lightyellow: string;
  lighteryellow: string;
  orange: string;
  salmonred: string;
  cream: string;
  gray: string;
  black: string;
  green: string;
  lightgreen: string;
}

export interface AplikasiLainnyaData {
  name: string;
  src: string;
  date: Date | Moment;
  url: string;
}

export interface SponsorMedparData {
  name: string;
  src: string;
  size: string;
}
