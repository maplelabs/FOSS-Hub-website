/**
 * Files generated using template generator
 */

import Footer from ".";
export interface FooterProps {
    [k: string]: unknown;
    address?: Address[]; 
    subSections?: SubSection[];
    copyRight: string;
    terms: SubSectionItems[];
    social: SubSection;
}

export interface SubSection {
  title: string;
  list: SubSectionItems[];
}

export interface SubSectionItems {
  text: string;
  url: string;
}

export interface Address {
  name: string;
  address: string;
}

export interface FooterSchema {
  template: typeof Footer;
  data: Partial<FooterProps>;
  dynamicData: () => Partial<FooterProps>;
}