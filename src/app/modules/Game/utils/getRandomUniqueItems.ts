export const getRandomUniqueItems = <T>(array: T[], count: number): T[] => {
  if (count > array.length) {
    throw new Error("Запрошено больше элементов, чем есть в массиве");
  }

  return [...array].sort(() => Math.random() - 0.5).slice(0, count);
};
