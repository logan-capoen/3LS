import { getAllRicks } from '$lib/api';

export async function load() {
  const Ricks = await getAllRicks();

  const filteredRicks = Ricks.filter(rick =>
    rick && rick.name && rick.image && rick.name.toLowerCase().includes('rick')
  );

  return {
    Ricks: filteredRicks
  };
}
