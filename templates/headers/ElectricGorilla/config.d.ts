/**
 * Files generated using template generator
 */
export interface ElectricGorillaProps {
  [k: string]: unknown;
  id: string;
  scrollSpySelector: string;
  logo: LogoProps;
  menu?: Menu[];
}

interface Menu {
  title: string;
  path: string;
}

interface LogoProps {
  lightMode: string;
  darkMode: string;
}

interface ElectricGorillaSchema {
  id: string;
  template: 'ElectricGorilla';
  data?: Partial<ElectricGorillaProps>;
  dynamicData?: (context = {}) => Promise<Partial<ElectricGorillaProps>>;
}
