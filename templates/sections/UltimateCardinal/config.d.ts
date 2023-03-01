/**
 * Files generated using template generator
 */
export interface UltimateCardinalProps {
  title: string;
  cards?: CardItem[];
}

interface CardItem {
  author: string;
  authorAvatar: string;
  thumbnail: string;
  title: string;
  slug: string;
}

export interface UltimateCardinalSchema {
  template: 'UltimateCardinal';
  data?: Partial<UltimateCardinalProps>;
  dynamicData?: (context = {}) => Promise<Partial<UltimateCardinalProps>>;
}
