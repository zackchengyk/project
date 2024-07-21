/**
 * Shuffles an array in place, then returns that array.
 *
 * @param array the array to be shuffled
 * @returns the same array, shuffled in place
 */
export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
