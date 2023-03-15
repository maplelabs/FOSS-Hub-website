// SCHEMAS IMPORTS
import { GitHubServiceSchema } from './services/GitHub/config';
import { SmallDragonSchema } from './templates/footers/SmallDragon/config';
import { ElectricGorillaSchema } from './templates/headers/ElectricGorilla/config';
import { AggressiveClownfishSchema } from './templates/sections/AggressiveClownfish/config';
import { AnnualFishSchema } from './templates/sections/AnnualFish/config';
import { GoodFoxSchema } from './templates/sections/GoodFox/config';
import { MiniatureAardwolfSchema } from './templates/sections/MiniatureAardwolf/config';
import { RainyCoralSchema } from './templates/sections/RainyCoral/config';
import { SpotlessAntelopeSchema } from './templates/sections/SpotlessAntelope/config';
import { UltimateCardinalSchema } from './templates/sections/UltimateCardinal/config';

interface Config {
  render: 'static' | 'server' | 'client';
  meta?: Meta;
  header: HeadersTemplates;
  body: { sections: Array<SectionsTemplates> };
  footer: FootersTemplates;
  pages:
    | { [k: string]: Partial<Config> }
    | (() => Promise<{ [k: string]: Partial<Config> }>);
}
type Meta ={
  title?: string;
  description?: string;
  robots?: string;
  favicon?: string;
}
export interface ServiceConfig // eslint-disable-line
  extends GitHubServiceSchema{}

type HeadersTemplates =
  // HEADERS SCHEMAS
	ElectricGorillaSchema |
  null;
type SectionsTemplates =
  // SECTIONS SCHEMAS
	AnnualFishSchema |
	UltimateCardinalSchema |
	SpotlessAntelopeSchema |
	AggressiveClownfishSchema |
	GoodFoxSchema |
	MiniatureAardwolfSchema |
	RainyCoralSchema |
  null;
type FootersTemplates =
  // FOOTERS SCHEMAS
	SmallDragonSchema |
  null;
export default Config;
