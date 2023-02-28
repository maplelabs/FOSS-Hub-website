/**
 * Files generated using template generator
 */
export interface ElectricGorillaProps {
    [k: string]: unknown;
    title: string;
    text: string;
    logo: LogoProps;
    favicon: string;
    show: Boolean;
    menu?: Menu[];
}

interface Menu {
  title: string;
  path: string
}

interface LogoProps {
    alternateText: string;
    lightMode: string;
    darkMode: string;
}

interface ElectricGorillaSchema {
  template: 'ElectricGorilla';
  data: Partial<ElectricGorillaProps>;
  dynamicData: () => Partial<ElectricGorillaProps>;
}