import { getAllCharacters } from '$lib/api';

export async function load() {
  const Characters = await getAllCharacters();

  return {
    Characters
  };
}
