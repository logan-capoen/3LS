import { getAllCharacters } from '$lib/api';

export async function load() {
  const characters = await getAllCharacters();

  return {
    characters
  };
}
