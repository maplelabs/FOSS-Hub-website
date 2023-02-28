/**
 * Files generated using template generator
 */
export interface MiniatureAardwolfProps {
    [k: string]: unknown;
    title: string
    videos?: Videos[]
}

interface Videos {
  url?: string
  text?: string
  thumbnail?: string | any
}

export interface MiniatureAardwolfSchema {
  template: 'MiniatureAardwolf';
  data: Partial<MiniatureAardwolfProps>;
  dynamicData: () => Partial<MiniatureAardwolfProps>;
}