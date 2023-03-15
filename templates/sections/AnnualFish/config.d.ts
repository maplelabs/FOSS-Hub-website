export interface AnnualFishProps {
  [k: string]: unknown;
  id: string;
  content: string;
  frontMatter: FrontMatter;
  recentBlogs: BlogItem[];
}

interface BlogItem {
  slug: string;
  thumbnail: string;
  title: string;
  date: string;
  path: string;
}

interface FrontMatter {
  thumbnail: string;
  title: string;
  date: string;
  featured?: boolean;
  starred?: boolean;
  author: string;
  authorAvatar: string;
}

interface RecentBlogCardProps {
  blog: BlogItem;
}

export interface AnnualFishSchema {
  id: string;
  template: 'AnnualFish';
  data?: Partial<AnnualFishProps>;
  dynamicData?: () => Partial<AnnualFishProps>;
}
