/**
 * Files generated using template generator
 */
export interface GoodFoxProps {
  [k: string]: unknown;
  title: string;
  listItems: ListItems[];
  columnHeaders: ColumnHeader[];
}

interface ColumnHeader {
  name: string;
  className?: string;
}

interface ListItems {
  title: string;
  description?: string;
  link?: string;
  icon?: any;
  tags?: string[];
  languages?: string[];
  categories?: string[];
  contributors?: Avatar[];
}

interface Avatar {
  name?: string;
  src?: string;
  link?: string;
}

export interface GoodFoxSchema {
  template: 'GoodFox';
  data?: Partial<GoodFoxProps>;
  dynamicData?: (context = {}) => Promise<Partial<GoodFoxProps>>;
}
