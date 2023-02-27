// SCHEMAS IMPORTS
import { GoodFoxSchema } from './templates/sections/GoodFox/config';
import { RainyCoralSchema } from './templates/sections/RainyCoral/config';

interface Config {
  render: 'static' | 'server' | 'client';
  header: HeadersTemplates;
  body: { sections: Array<SectionsTemplates> };
  footer: FootersTemplates;
  pages: Partial<Config>[];
}
type HeadersTemplates =
  // HEADERS SCHEMAS
  null;
type SectionsTemplates =
  // SECTIONS SCHEMAS
	GoodFoxSchema |
	RainyCoralSchema |
  null;
type FootersTemplates =
  // FOOTERS SCHEMAS
  null;
export default Config;
