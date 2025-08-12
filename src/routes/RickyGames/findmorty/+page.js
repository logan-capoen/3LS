import { getAllMortys } from '$lib/api';

export async function load() {
  const Mortys = await getAllMortys();

  return {
    Mortys
  };
}
