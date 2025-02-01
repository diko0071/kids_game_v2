interface GameSettings {
  exerciseCount: number;
  showFrequency: number;
  availableGames: Record<string, boolean>;
  showYoutubeControls: boolean;
}

export const getRandomGames = (settings: GameSettings): string[] => {
  const { exerciseCount, availableGames } = settings;
  const games = Object.keys(availableGames).filter(
    (game) => availableGames[game]
  );

  if (games.length === 0) {
    throw new Error("Нет доступных игр.");
  }

  return Array.from(
    { length: exerciseCount },
    () => games[Math.floor(Math.random() * games.length)]
  );
};
