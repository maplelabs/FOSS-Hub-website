/**
 * Files generated using template generator
 */
export interface SmallDragonProps {
    [k: string]: unknown;
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
  template: 'SmallDragon';
  data: Partial<SmallDragonProps>;
  dynamicData: () => Partial<SmallDragonProps>;
}