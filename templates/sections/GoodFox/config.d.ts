/**
 * Files generated using template generator
 */
export interface GoodFoxProps {
  [k: string]: unknown;
  id: string;
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
  icon?: Icon;
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

interface Icon {
  icon: number;
  color: { fg: string; bg: string };
}

interface TableProps {
  columns: ColumnHeader[],
  data: ListItems[]
}

interface CardProps {
  data: ListItems
}
export interface GoodFoxSchema {
  id: string;
  template: 'GoodFox';
  data?: Partial<GoodFoxProps>;
  dynamicData?: (context = {}) => Promise<Partial<GoodFoxProps>>;
}
