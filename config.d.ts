// SCHEMAS IMPORTS
import { AnnualFishSchema } from './templates/sections/AnnualFish/config';
import { UltimateCardinalSchema } from './templates/sections/UltimateCardinal/config';
import { SpotlessAntelopeSchema } from './templates/sections/SpotlessAntelope/config';
import { AggressiveClownfishSchema } from './templates/sections/AggressiveClownfish/config';
import { GoodFoxSchema } from './templates/sections/GoodFox/config';
import { MiniatureAardwolfSchema } from './templates/sections/MiniatureAardwolf/config';
import { SmallDragonSchema } from './templates/footers/SmallDragon/config';
import { ElectricGorillaSchema } from './templates/headers/ElectricGorilla/config';
import { AggressiveClownfishSchema } from './templates/sections/AggressiveClownfish/config';
import { GoodFoxSchema } from './templates/sections/GoodFox/config';
import { RainyCoralSchema } from './templates/sections/RainyCoral/config';
import { SpotlessAntelopeSchema } from './templates/sections/SpotlessAntelope/config';

interface Config {
  render: 'static' | 'server' | 'client';
  header: HeadersTemplates;
  body: { sections: Array<SectionsTemplates> };
  footer: FootersTemplates;
  pages: Partial<Config>[];
}
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
