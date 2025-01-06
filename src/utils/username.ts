const adjectives = ['Happy', 'Clever', 'Bright', 'Swift', 'Kind', 'Gentle'];
const nouns = ['Sprout', 'Leaf', 'Garden', 'Plant', 'Seed', 'Bloom'];

export function generateUsername(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 1000);
  return `${adjective}${noun}${number}`;
}