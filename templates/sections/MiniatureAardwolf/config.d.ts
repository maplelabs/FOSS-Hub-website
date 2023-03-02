/**
 * Files generated using template generator
 */
export interface MiniatureAardwolfProps {
  [k: string]: unknown;
  title: string;
  medias?: Media[];
}

interface Media {
  url?: string;
  text?: string;
  thumbnail?: string;
}

export interface MiniatureAardwolfSchema {
  id: string;
  template: 'MiniatureAardwolf';
  data?: Partial<MiniatureAardwolfProps>;
  dynamicData?: (context = {}) => Promise<Partial<MiniatureAardwolfProps>>;
}
