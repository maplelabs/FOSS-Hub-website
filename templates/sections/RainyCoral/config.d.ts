/**
 * Files generated using template generator
 */
export interface RainyCoralProps {
  id: string;
  title: string;
  description?: string;
  tiles?: Tiles[];
}

interface Tiles {
  id: string | number;
  title?: string;
  subtitle?: string;
  avatar?: string;
  link?: {
    icon?: string;
    text?: string;
    url?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface RainyCoralSchema {
  id: string;
  template: 'RainyCoral';
  data?: Partial<RainyCoralProps>;
  dynamicData?: () => Promise<Partial<RainyCoralProps>>;
}
