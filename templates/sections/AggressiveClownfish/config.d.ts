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
  id: string;
  template: 'AggressiveClownfish';
  data?: Partial<AggressiveClownfishProps>;
  dynamicData?: (context = {}) => Promise<Partial<AggressiveClownfishProps>>;
}
