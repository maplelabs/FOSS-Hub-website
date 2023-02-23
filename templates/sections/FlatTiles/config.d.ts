/**
 * Files generated using template generator
 */

import FlatTiles from './';

export interface FlatTilesProps {
  title: string;
  description?: string;
  tiles?: Tiles[];
}
/**
 * Card/Tile title
 */
interface Tiles {
  id: string | number;
  title?: string;
  subtitle?: string;
  avatar?: string;
  link?: {
    icon?: string;
    text?: string | (() => any);
    url?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface FlatTilesSchema {
  template: typeof FlatTiles;
  data: Partial<FlatTilesProps>;
  dynamicData: () => Partial<FlatTilesProps>;
}
