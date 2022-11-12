import BugTypeIcon from '../assets/icons/types/bug.png';
import BugTypeSmallIcon from '../assets/icons/types/bug-small.png';
import DarkTypeIcon from '../assets/icons/types/dark.png';
import DarkTypeSmallIcon from '../assets/icons/types/dark-small.png';
import DragonTypeIcon from '../assets/icons/types/dragon.png';
import DragonTypeSmallIcon from '../assets/icons/types/dragon-small.png';
import ElectricTypeIcon from '../assets/icons/types/electric.png';
import ElectricTypeSmallIcon from '../assets/icons/types/electric-small.png';
import FairyTypeIcon from '../assets/icons/types/fairy.png';
import FairyTypeSmallIcon from '../assets/icons/types/fairy-small.png';
import FightingTypeIcon from '../assets/icons/types/fighting.png';
import FightingTypeSmallIcon from '../assets/icons/types/fighting-small.png';
import FireTypeIcon from '../assets/icons/types/fire.png';
import FireTypeSmallIcon from '../assets/icons/types/fire-small.png';
import FlyingTypeIcon from '../assets/icons/types/flying.png';
import FlyingTypeSmallIcon from '../assets/icons/types/flying-small.png';
import GhostTypeIcon from '../assets/icons/types/ghost.png';
import GhostTypeSmallIcon from '../assets/icons/types/ghost-small.png';
import GrassTypeIcon from '../assets/icons/types/grass.png';
import GrassTypeSmallIcon from '../assets/icons/types/grass-small.png';
import GroundTypeIcon from '../assets/icons/types/ground.png';
import GroundTypeSmallIcon from '../assets/icons/types/ground-small.png';
import IceTypeIcon from '../assets/icons/types/ice.png';
import IceTypeSmallIcon from '../assets/icons/types/ice-small.png';
import NormalTypeIcon from '../assets/icons/types/normal.png';
import NormalTypeSmallIcon from '../assets/icons/types/normal-small.png';
import PoisonTypeIcon from '../assets/icons/types/poison.png';
import PoisonTypeSmallIcon from '../assets/icons/types/poison-small.png';
import PsychicTypeIcon from '../assets/icons/types/psychic.png';
import PsychicTypeSmallIcon from '../assets/icons/types/psychic-small.png';
import RockTypeIcon from '../assets/icons/types/rock.png';
import RockTypeSmallIcon from '../assets/icons/types/rock-small.png';
import SteelTypeIcon from '../assets/icons/types/steel.png';
import SteelTypeSmallIcon from '../assets/icons/types/steel-small.png';
import WaterTypeIcon from '../assets/icons/types/water.png';
import WaterTypeSmallIcon from '../assets/icons/types/water-small.png';

function handlePokemonTypeIcons(type: string) {
  switch (type) {
    case 'bug':
      return {
        img: BugTypeIcon,
        smallImg: BugTypeSmallIcon,
      };
    case 'dark':
      return {
        img: DarkTypeIcon,
        smallImg: DarkTypeSmallIcon,
      };
    case 'dragon':
      return {
        img: DragonTypeIcon,
        smallImg: DragonTypeSmallIcon,
      };
    case 'electric':
      return {
        img: ElectricTypeIcon,
        smallImg: ElectricTypeSmallIcon,
      };
    case 'fairy':
      return {
        img: FairyTypeIcon,
        smallImg: FairyTypeSmallIcon,
      };
    case 'fighting':
      return {
        img: FightingTypeIcon,
        smallImg: FightingTypeSmallIcon,
      };
    case 'fire':
      return {
        img: FireTypeIcon,
        smallImg: FireTypeSmallIcon,
      };
    case 'flying':
      return {
        img: FlyingTypeIcon,
        smallImg: FlyingTypeSmallIcon,
      };
    case 'ghost':
      return {
        img: GhostTypeIcon,
        smallImg: GhostTypeSmallIcon,
      };
    case 'grass':
      return {
        img: GrassTypeIcon,
        smallImg: GrassTypeSmallIcon,
      };
    case 'ground':
      return {
        img: GroundTypeIcon,
        smallImg: GroundTypeSmallIcon,
      };
    case 'ice':
      return {
        img: IceTypeIcon,
        smallImg: IceTypeSmallIcon,
      };
    case 'normal':
      return {
        img: NormalTypeIcon,
        smallImg: NormalTypeSmallIcon,
      };
    case 'poison':
      return {
        img: PoisonTypeIcon,
        smallImg: PoisonTypeSmallIcon,
      };
    case 'psychic':
      return {
        img: PsychicTypeIcon,
        smallImg: PsychicTypeSmallIcon,
      };
    case 'rock':
      return {
        img: RockTypeIcon,
        smallImg: RockTypeSmallIcon,
      };
    case 'steel':
      return {
        img: SteelTypeIcon,
        smallImg: SteelTypeSmallIcon,
      };
    default:
      return {
        img: WaterTypeIcon,
        smallImg: WaterTypeSmallIcon,
      };
  }
}

export { handlePokemonTypeIcons };
