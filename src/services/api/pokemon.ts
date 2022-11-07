import api from '.';
import { Pokemon } from '../../types/pokemon';

export async function getPokemons() {
  return api.get<Pokemon[]>('/pokemon').then(({ data }) => data);
}
