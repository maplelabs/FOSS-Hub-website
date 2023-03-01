/**
 * Files generated using template generator
 */
export interface UltimateCardinalProps {
  title: string;
  Cards?: CardItem[];
}

interface CardItem {
  author: string;
  author_avatar: string;
  thumbnail: string;
  title: string;
  slug: string;
}

export interface UltimateCardinalSchema {
  template: 'UltimateCardinal';
  data?: Partial<UltimateCardinalProps>;
  dynamicData?: () => Partial<UltimateCardinalProps>;
}
