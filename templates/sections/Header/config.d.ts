/**
 * Files generated using template generator
 */

import Header from ".";
export interface HeaderProps {
    [k: string]: unknown;
    title: string;
    text: string;
    logo: HeaderLogoProps;
    show: Boolean;
    menu?: Menu[];
}

export interface Menu {
  title: string;
  path: string
}
export interface HeaderLogoProps {
    alternateText: string;
    lightMode: string;
    darkMode: string;
}
export interface HeaderSchema {
  template: typeof Header;
  data: Partial<HeaderProps>;
  dynamicData: () => Partial<HeaderProps>;
}