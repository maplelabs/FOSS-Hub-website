export interface SmallDragonProps {
  [k: string]: unknown;
  id?: string;
  address?: Address[];
  subSections?: SubSection[];
  copyRight: string;
  terms: SubSectionItems[];
  social: SubSection;
}

interface SubSection {
  title: string;
  list: SubSectionItems[];
}

interface SubSectionItems {
  text: string;
  url: string;
}

interface Address {
  name: string;
  address: string;
}

export interface SmallDragonSchema {
  id: string;
  template: 'SmallDragon';
  data?: Partial<SmallDragonProps>;
  dynamicData?: (context = {}) => Promise<Partial<SmallDragonProps>>;
}
