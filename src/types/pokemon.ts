interface Pokemon {
  id: string;
  name: string;
  number: number;
  baseFriendship: number;
  catchRate: number;
  eggSteps: number;
  growthRate: string;
  height: string;
  weight: string;
  image: string;
  species: string;
  types: {
    id: string;
    name: string;
  }[];
}

export type { Pokemon };
