const API_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const firstRes = await fetch(`${API_URL}/character`);
  const firstData = await firstRes.json();

  const totalPages = firstData.info.pages;

  // Requête pour les pages 2 à totalPages
  const promises = [];
  for (let i = 2; i <= totalPages; i++) {
    promises.push(fetch(`${API_URL}/character?page=${i}`));
  }

  const results = await Promise.all(promises);
  const restData = await Promise.all(results.map(res => res.json()));

  // Combine tous les personnages
  const allCharacters = [
    ...firstData.results,
    ...restData.flatMap(data => data.results)
  ];

  return allCharacters;
}

// Nettoyage des chaînes
/**
 * @param {string} str
 */
export function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')              // sépare les accents
    .replace(/[\u0300-\u036f]/g, '') // supprime les accents
    .replace(/[^a-z0-9]/g, '');      // enlève espaces, ponctuations
}

// Distance de Levenshtein (mesure d’erreur)
/**
 * @param {string | any[]} a
 * @param {string | any[]} b
 */
export function levenshtein(a, b) {
  const matrix = [];

  const lenA = a.length;
  const lenB = b.length;

  for (let i = 0; i <= lenB; i++) matrix[i] = [i];
  for (let j = 0; j <= lenA; j++) matrix[0][j] = j;

  for (let i = 1; i <= lenB; i++) {
    for (let j = 1; j <= lenA; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // suppression
        );
      }
    }
  }

  return matrix[lenB][lenA];
}

export async function getAllRicks() {
  const firstRes = await fetch(`${API_URL}/character`);
  const firstData = await firstRes.json();

  const totalPages = firstData.info.pages;

  // Requête pour les pages 2 à totalPages
  const promises = [];
  for (let i = 2; i <= totalPages; i++) {
    promises.push(fetch(`${API_URL}/character?page=${i}&name=rick`));
  }

  const results = await Promise.all(promises);
  const restData = await Promise.all(results.map(res => res.json()));

  // Combine tous les personnages
  const allRicks = [
    ...firstData.results,
    ...restData.flatMap(data => data.results)
  ];

  return allRicks;
}