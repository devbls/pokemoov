import api from '.';
import { Pokemon } from '../../types/pokemon';

export async function getPokemons(order: string, takeNumber: number) {
  return api
    .get<{ data: Pokemon[]; total: number }>(
      `/pokemon?order=${order}&take=${takeNumber}`
    )
    .then(({ data }) => data);
}

export async function getPokemonById(id: string) {
  return api.get<Pokemon>(`/pokemon/${id}`).then(({ data }) => data);
}
