import { getAllMortys } from '$lib/api';

export async function load() {
  const Mortys = await getAllMortys();

  const filteredMortys = Mortys.filter(morty =>
    morty && morty.name && morty.image && morty.name.toLowerCase().includes('morty')
  );

  return {
    Mortys: filteredMortys
  };
}
