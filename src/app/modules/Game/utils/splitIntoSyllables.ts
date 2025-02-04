export const splitIntoSyllables = (word: string) => {
  const match = word.match(/.{1,2}/g);
  return match || [word];
};
