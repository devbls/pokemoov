import api from '.';
import { Pokemon } from '../../types/pokemon';

export async function getPokemons() {
  return api.get<Pokemon[]>('/pokemon').then(({ data }) => data);
}

export async function getPokemonById(id: string) {
  return api.get<Pokemon>(`/pokemon/${id}`).then(({ data }) => data);
}
