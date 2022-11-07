import BugTypedIcon from '../assets/icons/types/bug.png';
import DarkTypedIcon from '../assets/icons/types/dark.png';
import DragonTypedIcon from '../assets/icons/types/dragon.png';
import ElectricTypedIcon from '../assets/icons/types/electric.png';
import FairyTypedIcon from '../assets/icons/types/fairy.png';
import FightingTypedIcon from '../assets/icons/types/fighting.png';
import FireTypedIcon from '../assets/icons/types/fire.png';
import FlyingTypedIcon from '../assets/icons/types/flying.png';
import GhostTypedIcon from '../assets/icons/types/ghost.png';
import GrassTypedIcon from '../assets/icons/types/grass.png';
import GroundTypedIcon from '../assets/icons/types/ground.png';
import IceTypedIcon from '../assets/icons/types/ice.png';
import NormalTypedIcon from '../assets/icons/types/normal.png';
import PoisonTypedIcon from '../assets/icons/types/poison.png';
import PsychicTypedIcon from '../assets/icons/types/psychic.png';
import RockTypedIcon from '../assets/icons/types/rock.png';
import SteelTypedIcon from '../assets/icons/types/steel.png';
import WaterTypedIcon from '../assets/icons/types/water.png';

function handlePokemonTypeIcons(type: string) {
  switch (type) {
    case 'bug':
      return BugTypedIcon;
    case 'dark':
      return DarkTypedIcon;
    case 'dragon':
      return DragonTypedIcon;
    case 'electric':
      return ElectricTypedIcon;
    case 'fairy':
      return FairyTypedIcon;
    case 'fighting':
      return FightingTypedIcon;
    case 'fire':
      return FireTypedIcon;
    case 'flying':
      return FlyingTypedIcon;
    case 'ghost':
      return GhostTypedIcon;
    case 'grass':
      return GrassTypedIcon;
    case 'ground':
      return GroundTypedIcon;
    case 'ice':
      return IceTypedIcon;
    case 'normal':
      return NormalTypedIcon;
    case 'poison':
      return PoisonTypedIcon;
    case 'psychic':
      return PsychicTypedIcon;
    case 'rock':
      return RockTypedIcon;
    case 'steel':
      return SteelTypedIcon;
    case 'water':
      return WaterTypedIcon;
    default:
      return WaterTypedIcon;
  }
}

export { handlePokemonTypeIcons };
