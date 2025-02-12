export enum GameList {
  ghost = "ghost",
  numbers = "numbers",
  russianAlphabet = "russianAlphabet",
  wordMatching = "wordMatching",
  syllableMatching = "syllableMatching",
  figure = "figure",
}

export const GAME_NAMES = {
  [GameList.ghost]: "Призраки и цвета",
  [GameList.numbers]: "Игра с числами",
  [GameList.russianAlphabet]: "Алфавит",
  [GameList.wordMatching]: "Сопоставление слов",
  [GameList.syllableMatching]: "Слоги",
  [GameList.figure]: "Фигуры",
};

export enum LangList {
  en = "en-US",
  ru = "ru-RU",
}

export enum VoiceList {
  en = "en-US-JennyNeural",
  ru = "ru-RU-SvetlanaNeural",
}

export const VIDEO_CATEGORIES = [
  {
    id: "masha",
    name: "Маша и Медведь",
    image: "https://i.ytimg.com/vi/ZcZVtt-baas/maxresdefault.jpg",
    videos: [
      { id: "ZcZVtt-baas", name: "Маша и Медведь - Сборник лучших серий" }
    ]
  },
  {
    id: "fixiki",
    name: "Фиксики",
    image: "https://i.ytimg.com/vi/To5yh3rDuRs/maxresdefault.jpg",
    videos: [
      { id: "To5yh3rDuRs", name: "Фиксики - Познавательные мультики" }
    ]
  },
  {
    id: "babybus",
    name: "BabyBus",
    image: "https://i.ytimg.com/vi/Wec8wGSOQ6A/maxresdefault.jpg",
    videos: [
      { id: "Wec8wGSOQ6A", name: "BabyBus - Безопасность в жизни" },
      { id: "ur3A8uT-l3E", name: "BabyBus - Спасатели и друзья" },
      { id: "vMuTrVbAOcs", name: "BabyBus - Развивающие песенки" },
      { id: "KZSMYjmL-4g", name: "BabyBus - Волшебные истории" },
      { id: "q-yhcaW_ZQk", name: "BabyBus - Песенки про машинки" }
    ]
  },
  {
    id: "blippi",
    name: "Blippi",
    image: "https://i.ytimg.com/vi/_pWhx7l_48g/maxresdefault.jpg",
    videos: [
      { id: "_pWhx7l_48g", name: "Blippi - Educational Videos for Kids" }
    ]
  }
];

// Оставляем старый VIDEOS для обратной совместимости
export const VIDEOS = [
  // Русские мультики
  { id: "ZcZVtt-baas", name: "Маша и Медведь - Сборник лучших серий" },
  { id: "kFoYNforU4Y", name: "Развивающие мультики - Большой Сборник" },
  { id: "To5yh3rDuRs", name: "Фиксики - Познавательные мультики" },
  { id: "ppOWBAxT-Eg", name: "Малышарики - Сборник весёлых серий" },
  { id: "HIcNKigvJy0", name: "Поезда и вагоны - Развивающие мультики" },
  { id: "1axK79unKEY", name: "Уроки тетушки Совы - Сборник мультфильмов" },
  { id: "OBjkNW11ujM", name: "МилаЛуна - Мультики для детей" },
  { id: "vrLu-gdkG6I", name: "Синий трактор - Песенки для детей" },
  { id: "jzZKgl_29bw", name: "Барбоскины - Новые серии" },
  { id: "KCJniIY2Uy4", name: "Котики, вперед! - Все серии" },
  { id: "NzCsLa_ec30", name: "Грузовичок Лева - Лучшие серии" },
  { id: "t6vApLGmp6E", name: "Смешарики Пин-код - Сборник серий" },
  { id: "Psuuom9ZS5A", name: "Три Кота - Сборник серий" },
  { id: "Wec8wGSOQ6A", name: "BabyBus - Безопасность в жизни" },
  { id: "ur3A8uT-l3E", name: "BabyBus - Спасатели и друзья" },
  { id: "vMuTrVbAOcs", name: "BabyBus - Развивающие песенки" },
  { id: "KZSMYjmL-4g", name: "BabyBus - Волшебные истории" },
  { id: "q-yhcaW_ZQk", name: "BabyBus - Песенки про машинки" },

  // Английские мультики
  { id: "qXcMNBQnQMM", name: "CoComelon - Kids Songs and Nursery Rhymes" },
  { id: "_pWhx7l_48g", name: "Blippi - Educational Videos for Kids" },
  { id: "fT-ciS7dk-U", name: "Paw Patrol - Rescue Episodes" },
  { id: "XqZsoesa55w", name: "Baby Shark Dance - Animal Songs" },
  { id: "6yklSe3Ud-A", name: "Little Baby Bum - Nursery Rhymes" },
  { id: "3FszkGtTCCw", name: "Mother Goose Club - Nursery Rhymes" },
  { id: "Hs0fNvQ0qaQ", name: "Sesame Street - Elmos World" },
  { id: "-Z95SxV8PZc", name: "ChuChu TV - Rain Rain Go Away" },
  { id: "ttinNltX1x4", name: "Numberblocks - Math Superpowers" },
  { id: "ptk68qC1woI", name: "Gracies Corner - Phonics Song" },
  { id: "bdNbUw5FIQo", name: "Baby Shark - Find Your Shark" },
  { id: "RIWRqjcbJcs", name: "Morphle - Magic Pet Adventures" },
  { id: "XhpGp9d9jSA", name: "Badanamu - Super Hits" },
  { id: "8deypue7SdQ", name: "Bounce Patrol - Kids Songs" },
  { id: "DoULakpoynA", name: "Talking Tom - Unusual Events" },
  { id: "eUs3h7-jKIk", name: "Caillou - School Adventures" },
  { id: "t2ycMgAW6u8", name: "Pocoyo - Learning Through Laughter" },
];

export const COLORS = {
  white: "#ffffff",
  lightGray: "#dacccc",
  gray: "#333",
  black: "#141414",
  green: "#1DCC64",
  yellow: "#f3f315",
  red: "#FF353F",
  lightBlue: "#bfe2ff",
  blue: "#337ab7",
  pink: "#fad0c4",
  darkPink: "#d81b60",
  orange: "#f6800d",
};

export const DEFAULT_SETTINGS = {
  exerciseCount: 1,
  showFrequency: 1,
  availableGames: {
    [GameList.ghost]: true,
    [GameList.wordMatching]: true,
    [GameList.numbers]: true,
    [GameList.syllableMatching]: true,
    [GameList.russianAlphabet]: true,
    [GameList.figure]: true,
  },
  showYoutubeControls: true,
  disableDuringSpeaking: true,
};

export const MIN_SHOW_FREQUENCY = 1;
export const MAX_SHOW_FREQUENCY = 10;
export const MIN_EXERCISE_COUNT = 1;
export const MAX_EXERCISE_COUNT = 10;
export const SETTINGS_LOCAL_STORAGE_KEY = "control_panel_settings";
