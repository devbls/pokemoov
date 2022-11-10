interface Pokemon {
  id: string;
  name: string;
  number: number;
  mainType: string;
  baseFriendship: number;
  baseExp: number;
  catchRate: number;
  eggSteps: number;
  growthRate: string;
  height: string;
  weight: string;
  image: string;
  species: string;
  pokedexEntry: string;
  types: {
    id: string;
    name: string;
  }[];
  abilities: {
    id: string;
    name: string;
    hidden: boolean;
  }[];
  weaknesses: {
    id: string;
    name: string;
    effectiveness: string;
  }[];
  effortValues: {
    id: string;
    name: string;
    value: number;
  }[];
  eggGroups: {
    id: string;
    name: string;
  }[];
  stats: {
    id: string;
    name: string;
    value: number;
    min: number;
    max: number;
  }[];
  genders: {
    id: string;
    name: string;
    value: string;
  }[];
}

export type { Pokemon };
