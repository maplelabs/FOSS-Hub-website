/**
 * Files generated using template generator
 */
export interface AggressiveClownfishProps {
  title1: string;
  title2: string;
  description: string;
  button?: {
    text: string;
    icon: string;
    url: string;
  };
  backgroundImage: string;
}

export interface AggressiveClownfishSchema {
  template: 'AggressiveClownfish';
  data?: Partial<AggressiveClownfishProps>;
  dynamicData?: () => Partial<AggressiveClownfishProps>;
}
