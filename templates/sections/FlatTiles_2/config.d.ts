/**
 * Files generated using template generator
 */

import FlatTiles_2 from './';

export interface FlatTiles_2Props {
  title: string
  videos?: Videos[]
  [k: string]: unknown;
}

export interface Videos {
  url?: string
  text?: string
  thumbnail?: string | any
}

export interface FlatTiles_2Schema {
  template: typeof FlatTiles_2;
  data: Partial<FlatTiles_2Props>;
  dynamicData: () => Partial<FlatTiles_2Props>;
}