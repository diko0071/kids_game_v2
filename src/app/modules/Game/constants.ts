// Game related enums and constants
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

// Language and voice settings
export enum LangList {
  en = "en-US",
  ru = "ru-RU",
}

export enum VoiceList {
  en = "en-US-JennyNeural",
  ru = "ru-RU-SvetlanaNeural",
}

// Colors
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

// Settings
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

// Video interfaces
export interface VideoItem {
  title: string;
  url: string;
  language: 'ru' | 'en';
}

export interface CategoryVideos {
  name: string;
  videos: VideoItem[];
}

// Video library
export const VIDEO_LIBRARY: CategoryVideos[] = [
  {
    name: 'Английский для малышей',
    videos: [
      { title: 'Английский язык для малышей - Мяу-Мяу - сборник серий - 1- 5 серии - учим английский', url: 'https://www.youtube.com/watch?v=C6NrFzJwj_I', language: 'ru' },
      { title: 'Английский язык для малышей - Мяу-Мяу - сборник серий - 6 - 10 серии - учим английский', url: 'https://www.youtube.com/watch?v=Y_zJqo7Zepw', language: 'ru' },
      { title: 'Gogo Loves English', url: 'https://www.youtube.com/watch?v=l0YKZzmP2e8', language: 'en' }
    ]
  },
  {
    name: 'Избранные танцы',
    videos: [
      { title: 'Zombie Dance with New DB Heroes + MORE D Billions Kids Songs', url: 'https://www.youtube.com/watch?v=Avr4Dz0tKYE', language: 'en' },
      { title: 'Настя меняет наряды и просит косметику у папы', url: 'https://www.youtube.com/watch?v=QmyjivY8HRk', language: 'ru' },
      { title: 'Zombie Dance | Kids Fun Halloween Songs | CocoBerry - Nursery Rhymes & Kids Songs', url: 'https://www.youtube.com/watch?v=IyfkFWyx3t0', language: 'en' },
      { title: 'Freeze Dance Song | DJ Raphi | Dance Party for kids', url: 'https://www.youtube.com/watch?v=02H502iplUU', language: 'en' }
    ]
  },
  {
    name: 'Маша и Медведь',
    videos: [
      { title: 'Маша плюс каша', url: 'https://www.youtube.com/watch?v=AqYsbttfgaQ', language: 'ru' },
      { title: 'Следы невиданных зверей', url: 'https://www.youtube.com/watch?v=zFr0egXs2eE', language: 'ru' },
      { title: 'Большая стирка', url: 'https://www.youtube.com/watch?v=zqhbZHvxYdE', language: 'ru' },
      { title: 'До весны не будить!', url: 'https://www.youtube.com/watch?v=o6wdh1KZeW0', language: 'ru' },
      { title: 'День варенья', url: 'https://www.youtube.com/watch?v=Cv93i0FHnNk', language: 'ru' },
      { title: 'Recipe for Disaster (Episode 17)', url: 'https://www.youtube.com/watch?v=qBp1rCz_yQU', language: 'en' },
      { title: 'Laundry Day (Episode 18)', url: 'https://www.youtube.com/watch?v=X6Hur8jbfNo', language: 'en' },
      { title: 'Hocus Pocus (Episode 26)', url: 'https://www.youtube.com/watch?v=wNPiBW5DMKk', language: 'en' },
      { title: 'The Foundling (Episode 23)', url: 'https://www.youtube.com/watch?v=uPTjYnBpwLY', language: 'en' },
      { title: 'Bon Appétit (Episode 29)', url: 'https://www.youtube.com/watch?v=8OEbzH9qpKY', language: 'en' }
    ]
  },
  {
    name: 'Фиксики',
    videos: [
      { title: 'Фиксики – Шарик', url: 'https://www.youtube.com/watch?v=XDKFCk4f6YA', language: 'ru' },
      { title: 'Фиксики – Термос', url: 'https://www.youtube.com/watch?v=0CYeVJqG-lM', language: 'ru' },
      { title: 'Фиксики – Будильник', url: 'https://www.youtube.com/watch?v=i-BgRcucdqU', language: 'ru' },
      { title: 'Фиксики – Пылесос', url: 'https://www.youtube.com/watch?v=0avphhl-VAU', language: 'ru' },
      { title: 'Фиксики – Гирлянда', url: 'https://www.youtube.com/watch?v=0xSwHmtKICM', language: 'ru' },
      { title: 'The Fixies – The Thermometer', url: 'https://www.youtube.com/watch?v=DugsQ0Mo7v8', language: 'en' },
      { title: 'The Fixies – The Remote', url: 'https://www.youtube.com/watch?v=LLEiFnOEHRA', language: 'en' },
      { title: 'The Fixies – The Light Bulb', url: 'https://www.youtube.com/watch?v=cBUZZ0EvvUk', language: 'en' },
      { title: 'The Fixies – The Computer', url: 'https://www.youtube.com/watch?v=YdlQRrk615c', language: 'en' },
      { title: 'The Fixies – The Cartoon', url: 'https://www.youtube.com/watch?v=gsH1-7FHiLU', language: 'en' }
    ]
  },
  {
    name: 'Три кота',
    videos: [
      { title: 'Три кота – Мороженое', url: 'https://www.youtube.com/watch?v=m8KALaCmYgY', language: 'ru' },
      { title: 'Три кота – Королевство чистоты', url: 'https://www.youtube.com/watch?v=sYXFV9owltU', language: 'ru' },
      { title: 'Три кота – Лунный праздник', url: 'https://www.youtube.com/watch?v=F2Z7xSLl6PI', language: 'ru' },
      { title: 'Три кота – Игра в прятки', url: 'https://www.youtube.com/watch?v=b-dYZOVEuqo', language: 'ru' },
      { title: 'Три кота – День варенья', url: 'https://www.youtube.com/watch?v=Kpa-T_dEiBM', language: 'ru' },
      { title: 'Kid-E-Cats – A Rainy Day', url: 'https://www.youtube.com/watch?v=pEP7TgQmeSc', language: 'en' },
      { title: 'Kid-E-Cats – Musical Chair', url: 'https://www.youtube.com/watch?v=YhaSC8QkJLk', language: 'en' },
      { title: 'Kid-E-Cats – Treasure Hunt', url: 'https://www.youtube.com/watch?v=BAyU7rT3Auk', language: 'en' },
      { title: 'Kid-E-Cats – A New Friend', url: 'https://www.youtube.com/watch?v=pEP7TgQmeSc', language: 'en' },
      { title: 'Kid-E-Cats – Camping Trip', url: 'https://www.youtube.com/watch?v=rc0w683WQIE', language: 'en' }
    ]
  },
  {
    name: 'Свинка Пеппа',
    videos: [
      { title: 'Свинка Пеппа – Сборник «Школа»', url: 'https://www.youtube.com/watch?v=LnwusXUy3zE', language: 'ru' },
      { title: 'Свинка Пеппа – День рождения', url: 'https://www.youtube.com/watch?v=BRYfdM4Ey0g', language: 'ru' },
      { title: 'Свинка Пеппа – Поход', url: 'https://www.youtube.com/watch?v=pKSdlTwSQxg', language: 'ru' },
      { title: 'Свинка Пеппа – Подводная лодка', url: 'https://www.youtube.com/watch?v=HoZYmkAPoCE', language: 'ru' },
      { title: 'Свинка Пеппа – Зубная фея', url: 'https://www.youtube.com/watch?v=x-FUMALXhJk', language: 'ru' },
      { title: "Peppa Pig – Peppa's Christmas Special", url: 'https://www.youtube.com/watch?v=rnAsh-0mWYA', language: 'en' },
      { title: "Peppa Pig – Peppa's First Sleepover", url: 'https://www.youtube.com/watch?v=K4S4bmwkpOw', language: 'en' },
      { title: 'Peppa Pig – Pumpkin Party', url: 'https://www.youtube.com/watch?v=sBe4-UcwTPM', language: 'en' },
      { title: "Peppa Pig – Danny's Pirate Party", url: 'https://www.youtube.com/watch?v=cDRYELo0DEk', language: 'en' },
      { title: "Peppa Pig – Peppa's Holiday", url: 'https://www.youtube.com/watch?v=RM4MU1WjglI', language: 'en' }
    ]
  },
  {
    name: 'Щенячий патруль',
    videos: [
      { title: 'Щенячий патруль – Щенки спасают поезд', url: 'https://www.youtube.com/watch?v=J63FWb3_Lvg', language: 'ru' },
      { title: 'Щенячий патруль – Щенки и таинственный след', url: 'https://www.youtube.com/watch?v=OY8fb9yyw48', language: 'ru' },
      { title: 'Щенячий патруль – Щенки спасают авиашоу', url: 'https://www.youtube.com/watch?v=5_C-z1FB-UI', language: 'ru' },
      { title: 'Щенячий патруль – Щенки спасают цирк', url: 'https://www.youtube.com/watch?v=4hxoHD0LBy4', language: 'ru' },
      { title: 'Щенячий патруль – Щенки и страшный грузовик', url: 'https://www.youtube.com/watch?v=d9o0RZTUL_Y', language: 'ru' },
      { title: 'PAW Patrol – Pups Save Christmas', url: 'https://www.youtube.com/watch?v=QxLYkmd6f9o', language: 'en' },
      { title: 'PAW Patrol – Mighty Pups vs. Thief', url: 'https://www.youtube.com/watch?v=lM3jYVziHI8', language: 'en' },
      { title: 'PAW Patrol – Sea Patrol: Pirate Adventure', url: 'https://www.youtube.com/watch?v=7zNsKnQzoBg', language: 'en' },
      { title: 'PAW Patrol – Ultimate Rescue: Pups Save the Tigers', url: 'https://www.youtube.com/watch?v=xn_SzuKf8Dw', language: 'en' },
      { title: 'PAW Patrol – Dino Rescue', url: 'https://www.youtube.com/watch?v=rENqpPG2tPA', language: 'en' }
    ]
  },
  {
    name: 'Робокар Поли',
    videos: [
      { title: 'Робокар Поли – Опасный перекрёсток', url: 'https://www.youtube.com/watch?v=V4z4XcuyRmk', language: 'ru' },
      { title: 'Робокар Поли – Пожар на заправке', url: 'https://www.youtube.com/watch?v=A2IG4cgEufw', language: 'ru' },
      { title: 'Робокар Поли – День рождения', url: 'https://www.youtube.com/watch?v=ZHuIy0LHw90', language: 'ru' },
      { title: 'Робокар Поли – Пропавший щенок', url: 'https://www.youtube.com/watch?v=kOzIXrHy7ts', language: 'ru' },
      { title: 'Робокар Поли – Урок безопасности', url: 'https://www.youtube.com/watch?v=UNXGLjUAWfc', language: 'ru' },
      { title: 'Robocar Poli – Treasure Hunt', url: 'https://www.youtube.com/watch?v=Go4gVfTr7e8', language: 'en' },
      { title: 'Robocar Poli – Circus Adventure', url: 'https://www.youtube.com/watch?v=fSUq-NQrrbw', language: 'en' },
      { title: "Robocar Poli – Cleany's Concert", url: 'https://www.youtube.com/watch?v=ANrR_aPP_LM', language: 'en' },
      { title: 'Robocar Poli – The Missing Tire', url: 'https://www.youtube.com/watch?v=Q0FyaXiu5ek', language: 'en' },
      { title: 'Robocar Poli – Snowball Fight', url: 'https://www.youtube.com/watch?v=Y3brVRuYJpY', language: 'en' }
    ]
  },
  {
    name: 'Смешарики',
    videos: [
      { title: 'Смешарики – Новый друг', url: 'https://www.youtube.com/watch?v=UPV_bGAcY48', language: 'ru' },
      { title: 'Смешарики – Бабушка', url: 'https://www.youtube.com/watch?v=v65fC78NkZo', language: 'ru' },
      { title: 'Смешарики – Путешествие', url: 'https://www.youtube.com/watch?v=AlR0fQsm83Y', language: 'ru' },
      { title: 'Смешарики – День варенья', url: 'https://www.youtube.com/watch?v=m67bhyqOWpo', language: 'ru' },
      { title: 'Смешарики – Забытое празднество', url: 'https://www.youtube.com/watch?v=fP7Ewhgkq0M', language: 'ru' },
      { title: 'Kikoriki – The Collector', url: 'https://www.youtube.com/watch?v=c7cWIEGJ5Lo', language: 'en' },
      { title: 'Kikoriki – Teamwork', url: 'https://www.youtube.com/watch?v=dt1LxEBzQKk', language: 'en' },
      { title: 'Kikoriki – The Launch', url: 'https://www.youtube.com/watch?v=Z0o5A81TORQ', language: 'en' },
      { title: 'Kikoriki – The Ghost', url: 'https://www.youtube.com/watch?v=mhf0nQ8VtoA', language: 'en' },
      { title: 'Kikoriki – Recipe for Disaster', url: 'https://www.youtube.com/watch?v=z6R-qGz2RaI', language: 'en' }
    ]
  },
  {
    name: 'Барбоскины',
    videos: [
      { title: 'Барбоскины – Усатый нянь', url: 'https://www.youtube.com/watch?v=ItokDe6WWq4', language: 'ru' },
      { title: 'Барбоскины – Талант шоу', url: 'https://www.youtube.com/watch?v=fMLoMnqvGpY', language: 'ru' },
      { title: 'Барбоскины – Секрет Гены', url: 'https://www.youtube.com/watch?v=yGkcOwpt22k', language: 'ru' },
      { title: 'Барбоскины – Билет на Юг', url: 'https://www.youtube.com/watch?v=K8SiIAroVzI', language: 'ru' },
      { title: 'Барбоскины – Дедушкин метод', url: 'https://www.youtube.com/watch?v=0raCKyauKto', language: 'ru' },
      { title: "The Barkers – Mom's Birthday", url: 'https://www.youtube.com/watch?v=02Da2wd6NKI', language: 'en' },
      { title: 'The Barkers – Talent Contest', url: 'https://www.youtube.com/watch?v=AHkasqCKFhI', language: 'en' },
      { title: 'The Barkers – Magic Wand', url: 'https://www.youtube.com/watch?v=02Da2wd6NKI', language: 'en' },
      { title: 'The Barkers – Detective', url: 'https://www.youtube.com/watch?v=OY64fKFLauc', language: 'en' },
      { title: 'The Barkers – New Friend', url: 'https://www.youtube.com/watch?v=7PDfCfQFS4s', language: 'en' }
    ]
  },
  {
    name: 'Лунтик',
    videos: [
      { title: 'Лунтик – Первая встреча', url: 'https://www.youtube.com/watch?v=icdSZKq9-sM', language: 'ru' },
      { title: 'Лунтик – Умывание', url: 'https://www.youtube.com/watch?v=qJkr-DRDmwM', language: 'ru' },
      { title: 'Лунтик – Сказка на ночь', url: 'https://www.youtube.com/watch?v=lPxNE1X-Eko', language: 'ru' },
      { title: 'Лунтик – Новые друзья', url: 'https://www.youtube.com/watch?v=E4mrSaO_mVg', language: 'ru' },
      { title: 'Лунтик – Путешественник', url: 'https://www.youtube.com/watch?v=FVJlo9RVkwY', language: 'ru' },
      { title: 'Moonzy – A New Friend', url: 'https://www.youtube.com/watch?v=9FRe7VOEDHQ', language: 'en' },
      { title: "Moonzy – Caterpillars' Tricks", url: 'https://www.youtube.com/watch?v=T-mojXTlO8U', language: 'en' },
      { title: 'Moonzy – The Rainbow', url: 'https://www.youtube.com/watch?v=FjjeFsVsX_c', language: 'en' },
      { title: 'Moonzy – Starry Sky', url: 'https://www.youtube.com/watch?v=uuaDo7vM9jM', language: 'en' },
      { title: 'Moonzy – The Best Friend', url: 'https://www.youtube.com/watch?v=8iKOlFY11mU', language: 'en' }
    ]
  },
  {
    name: 'Малышарики',
    videos: [
      { title: 'Малышарики – Прятки', url: 'https://www.youtube.com/watch?v=2mS0ZiNxXmY', language: 'ru' },
      { title: 'Малышарики – Кто как говорит', url: 'https://www.youtube.com/watch?v=l_qrcFZO8CM', language: 'ru' },
      { title: 'Малышарики – Мыльные пузыри', url: 'https://www.youtube.com/watch?v=QfWChUSG0S0', language: 'ru' },
      { title: 'Малышарики – Буквы', url: 'https://www.youtube.com/watch?v=LtKe3KD1F4U', language: 'ru' },
      { title: 'Малышарики – Считалочка', url: 'https://www.youtube.com/watch?v=QJ1fHLOodWI', language: 'ru' },
      { title: 'BabyRiki – Hide and Seek', url: 'https://www.youtube.com/watch?v=-WBCECGuSzc', language: 'en' },
      { title: 'BabyRiki – Magical Paints', url: 'https://www.youtube.com/watch?v=7WOySvZBXNk', language: 'en' },
      { title: 'BabyRiki – Traffic Light', url: 'https://www.youtube.com/watch?v=7WOySvZBXNk', language: 'en' },
      { title: 'BabyRiki – Snowy Adventures', url: 'https://www.youtube.com/watch?v=zmsJWRA6GT0', language: 'en' },
      { title: 'BabyRiki – Birthday Cake', url: 'https://www.youtube.com/watch?v=QLT6A3VIXK8', language: 'en' }
    ]
  },
  {
    name: 'Ми-ми-мишки',
    videos: [
      { title: 'Ми-ми-мишки – Все по порядку', url: 'https://www.youtube.com/watch?v=glaiaZaJDsg', language: 'ru' },
      { title: 'Ми-ми-мишки – Поиск сокровищ', url: 'https://www.youtube.com/watch?v=rFHIu33P_0I', language: 'ru' },
      { title: 'Ми-ми-мишки – Лучшая погода', url: 'https://www.youtube.com/watch?v=_xrkfhv0XBc', language: 'ru' },
      { title: 'Ми-ми-мишки – Привет, зима!', url: 'https://www.youtube.com/watch?v=1n8wV-bJ-EU', language: 'ru' },
      { title: 'Ми-ми-мишки – Лесной концерт', url: 'https://www.youtube.com/watch?v=_h1ODm-r2-0', language: 'ru' },
      { title: 'Be-Be-Bears – The Best Weather', url: 'https://www.youtube.com/watch?v=lncF8r7d7sg', language: 'en' },
      { title: 'Be-Be-Bears – A Journey to Mars', url: 'https://www.youtube.com/watch?v=622feG3PVpk', language: 'en' },
      { title: 'Be-Be-Bears – Sleepless Night', url: 'https://www.youtube.com/watch?v=tvYk5j1Sj10', language: 'en' },
      { title: 'Be-Be-Bears – Harvest Day', url: 'https://www.youtube.com/watch?v=11yCWA7f394', language: 'en' },
      { title: 'Be-Be-Bears – A New Friend', url: 'https://www.youtube.com/watch?v=MTLvCTEnEwk', language: 'en' }
    ]
  },
  {
    name: 'Буба',
    videos: [
      { title: 'Буба – Бумажный самолетик', url: 'https://www.youtube.com/watch?v=tHN2aC-tVJo', language: 'ru' },
      { title: 'Буба – Пекарня', url: 'https://www.youtube.com/watch?v=JnDtdxQ6EfU', language: 'ru' },
      { title: 'Буба – Обед в музее', url: 'https://www.youtube.com/watch?v=0akPPVmtkiQ', language: 'ru' },
      { title: 'Буба – Гараж', url: 'https://www.youtube.com/watch?v=0m9zgKBsLx4', language: 'ru' },
      { title: 'Буба – Новые технологии', url: 'https://www.youtube.com/watch?v=zL2MoPl3zUs', language: 'ru' },
      { title: 'Booba – Bakery', url: 'https://www.youtube.com/watch?v=11UveEuESyw', language: 'en' },
      { title: 'Booba – Circus', url: 'https://www.youtube.com/watch?v=WBIzrQNV_tY', language: 'en' },
      { title: 'Booba – Nursery', url: 'https://www.youtube.com/watch?v=OwMpN3h5IVQ', language: 'en' },
      { title: 'Booba – Train Adventure', url: 'https://www.youtube.com/watch?v=yIj_O9vIaVg', language: 'en' },
      { title: 'Booba – Ice Cream', url: 'https://www.youtube.com/watch?v=vrqkeUhw2Hk', language: 'en' }
    ]
  },
  {
    name: 'Синий трактор',
    videos: [
      { title: 'Синий трактор – Песенка про трактор', url: 'https://www.youtube.com/watch?v=LbOve_UZZ54', language: 'ru' },
      { title: 'Синий трактор – Фрукты', url: 'https://www.youtube.com/watch?v=_GMU5-zo2iw', language: 'ru' },
      { title: 'Синий трактор – Алфавит', url: 'https://www.youtube.com/watch?v=PNQt6bu2MtE', language: 'ru' },
      { title: 'Синий трактор – Едем на море', url: 'https://www.youtube.com/watch?v=3S8-r7bMZXU', language: 'ru' },
      { title: 'Синий трактор – Паровозик', url: 'https://www.youtube.com/watch?v=HaEPiIuRdck', language: 'ru' },
      { title: 'Blippi – Explore a Tractor', url: 'https://www.youtube.com/watch?v=I4BbyVV2kxc', language: 'en' },
      { title: "Gecko's Garage – Baby Truck Song", url: 'https://www.youtube.com/watch?v=LNHSfdkS1lM', language: 'en' },
      { title: 'Little Baby Bum – The Tractor Song', url: 'https://www.youtube.com/watch?v=7R84WQzC9hs', language: 'en' },
      { title: 'Super Simple – The Animals On The Farm', url: 'https://www.youtube.com/watch?v=zXEq-QO3xTg', language: 'en' },
      { title: 'Blippi – Fire Truck Song', url: 'https://www.youtube.com/watch?v=J0DvF-LkprU', language: 'en' }
    ]
  },
  {
    name: 'Грузовичок Лёва',
    videos: [
      { title: 'Грузовичок Лёва – Экскаватор', url: 'https://www.youtube.com/watch?v=F9630uYbALk', language: 'ru' },
      { title: 'Грузовичок Лёва – Самолёт', url: 'https://www.youtube.com/watch?v=heqpRIu7B8E', language: 'ru' },
      { title: 'Грузовичок Лёва – Паровоз', url: 'https://www.youtube.com/watch?v=P6G02t2JV-M', language: 'ru' },
      { title: 'Грузовичок Лёва – Башенный кран', url: 'https://www.youtube.com/watch?v=cRU7YrVMZVU', language: 'ru' },
      { title: 'Грузовичок Лёва – Машинки', url: 'https://www.youtube.com/watch?v=QqZJVJ455cA', language: 'ru' },
      { title: 'Leo the Truck – Building a Fire Truck', url: 'https://www.youtube.com/watch?v=gP8lG6r2hKA', language: 'en' },
      { title: 'Leo the Truck – Building a Helicopter', url: 'https://www.youtube.com/watch?v=-2ftMDDJ5cM', language: 'en' },
      { title: 'Leo the Truck – Learn Numbers', url: 'https://www.youtube.com/watch?v=b-T5jkqet9U', language: 'en' },
      { title: 'Leo the Truck – Carwash Adventure', url: 'https://www.youtube.com/watch?v=BdmmcbEHBTA', language: 'en' },
      { title: 'Leo the Truck – Colorful Eggs', url: 'https://www.youtube.com/watch?v=VUCSpCLg0PQ', language: 'en' }
    ]
  },
  {
    name: 'Котики, вперед!',
    videos: [
      { title: 'Котики, вперед! – Начни сначала', url: 'https://www.youtube.com/watch?v=Q6sfboHcAmc', language: 'ru' },
      { title: 'Котики, вперед! – Робопони', url: 'https://www.youtube.com/watch?v=3VPsDUqNtKw', language: 'ru' },
      { title: 'Котики, вперед! – Новые друзья', url: 'https://www.youtube.com/watch?v=iLGTObXkukg', language: 'ru' },
      { title: 'Котики, вперед! – Волшебная шляпа', url: 'https://www.youtube.com/watch?v=d0-Jp1pqHpg', language: 'ru' },
      { title: 'Котики, вперед! – День рождения', url: 'https://www.youtube.com/watch?v=D3gzT4ywRiM', language: 'ru' },
      { title: 'Kit ^n^ Kate – The Treasure Island', url: 'https://www.youtube.com/watch?v=ZY1FUG49BRc', language: 'en' },
      { title: "Kit ^n^ Kate – Daddy's Little Helpers", url: 'https://www.youtube.com/watch?v=BbgP1GDe_ak', language: 'en' },
      { title: 'Kit ^n^ Kate – The Kitty Express', url: 'https://www.youtube.com/watch?v=00uBuj4ujos', language: 'en' },
      { title: 'Kit ^n^ Kate – Super Katya', url: 'https://www.youtube.com/watch?v=VdbE9FwlHQI', language: 'en' },
      { title: 'Kit ^n^ Kate – Holiday in Sunnyland', url: 'https://www.youtube.com/watch?v=si6mUI2TBNs', language: 'en' }
    ]
  },
  {
    name: 'Принцесса Аленка',
    videos: [
      { title: 'Сказочный патруль – Неугомонная Алёнка', url: 'https://www.youtube.com/watch?v=JTssUGVxAeo', language: 'ru' },
      { title: 'Сказочный патруль – Первый бал', url: 'https://www.youtube.com/watch?v=HXiz9P1v9HQ', language: 'ru' },
      { title: 'Сказочный патруль – История Алёнки', url: 'https://www.youtube.com/watch?v=Qj5hvT80IUo', language: 'ru' },
      { title: 'Сказочный патруль – Принцесса для друга', url: 'https://www.youtube.com/watch?v=Jm48EHFpMlA', language: 'ru' },
      { title: 'Сказочный патруль – Королева вечеринок', url: 'https://www.youtube.com/watch?v=DvqKlt6J0NI', language: 'ru' },
      { title: 'Fantasy Patrol – How to Be a Princess', url: 'https://www.youtube.com/watch?v=xiLjI4zIR3s', language: 'en' },
      { title: 'Fantasy Patrol – The First Ball', url: 'https://www.youtube.com/watch?v=WuXGjdW54bg', language: 'en' },
      { title: 'Fantasy Patrol – Save Alyonka!', url: 'https://www.youtube.com/watch?v=4njYcDeFg9o', language: 'en' },
      { title: 'Fantasy Patrol – The Reluctant Princess', url: 'https://www.youtube.com/watch?v=BhaYvzONM58', language: 'en' },
      { title: "Fantasy Patrol – A Princess's Lesson", url: 'https://www.youtube.com/watch?v=DA_b_mh7qI0', language: 'en' }
    ]
  },
  {
    name: 'Команда Флоры',
    videos: [
      { title: 'Команда Флоры – Зелёный Новый год', url: 'https://www.youtube.com/watch?v=YJFPJFzvbj0', language: 'ru' },
      { title: 'Команда Флоры – Премьера Нарцисса', url: 'https://www.youtube.com/watch?v=AInLcU-V3NM', language: 'ru' },
      { title: 'Команда Флоры – Нарушенный баланс', url: 'https://www.youtube.com/watch?v=AkPrBKHoKsc', language: 'ru' },
      { title: 'Команда Флоры – Чудо в лесу', url: 'https://www.youtube.com/watch?v=6_7BnyPuZJ4', language: 'ru' },
      { title: 'Команда Флоры – Экопатруль', url: 'https://www.youtube.com/watch?v=Gk-DstWR7O4', language: 'ru' },
      { title: 'Octonauts – The Giant Kelp Forest', url: 'https://www.youtube.com/watch?v=XiL-WSYd0ek', language: 'en' },
      { title: 'Wild Kratts – The Last Largest Lobster', url: 'https://www.youtube.com/watch?v=JkIv9Xow68s', language: 'en' },
      { title: 'Nature Cat – Forest Adventure', url: 'https://www.youtube.com/watch?v=e-XUeKtlHSw', language: 'en' },
      { title: 'Octonauts – The Great Penguin Race', url: 'https://www.youtube.com/watch?v=Ub7M4kSpoGA', language: 'en' },
      { title: 'Wild Kratts – Mystery of the North Pole Penguins', url: 'https://www.youtube.com/watch?v=7I6ELBMeh3I', language: 'en' }
    ]
  },
  {
    name: 'Тима и Тома',
    videos: [
      { title: 'Тима и Тома – Прятки', url: 'https://www.youtube.com/watch?v=5ACQu1VXDCA', language: 'ru' },
      { title: 'Тима и Тома – Полезное мороженое', url: 'https://www.youtube.com/watch?v=ZSW-zsPfybE', language: 'ru' },
      { title: 'Тима и Тома – Волшебное слово', url: 'https://www.youtube.com/watch?v=ZSW-zsPfybE', language: 'ru' },
      { title: 'Тима и Тома – День рождения', url: 'https://www.youtube.com/watch?v=acrgyq2SsYk', language: 'ru' },
      { title: 'Тима и Тома – Мыльные пузыри', url: 'https://www.youtube.com/watch?v=tkPA7ywc9uo', language: 'ru' },
      { title: 'Tina & Tony – All for One', url: 'https://www.youtube.com/watch?v=gJ2bn-mB7BI', language: 'en' },
      { title: 'Tina & Tony – Best Friends', url: 'https://www.youtube.com/watch?v=nPPGREJAzO4', language: 'en' },
      { title: 'Tina & Tony – The Big Parade', url: 'https://www.youtube.com/watch?v=hgTpjB5WTlA', language: 'en' },
      { title: 'Tina & Tony – The Lost Kite', url: 'https://www.youtube.com/watch?v=V4r1lBYugkY', language: 'en' },
      { title: 'Tina & Tony – Camping Trip', url: 'https://www.youtube.com/watch?v=9WW1V-Thfh8', language: 'en' }
    ]
  },
  {
    name: 'Царевны',
    videos: [
      { title: 'Царевны – Начало истории', url: 'https://www.youtube.com/watch?v=mb3QMKbxzdA', language: 'ru' },
      { title: 'Царевны – Испытание для принцесс', url: 'https://www.youtube.com/watch?v=mb3QMKbxzdA', language: 'ru' },
      { title: 'Царевны – Секретная комната', url: 'https://www.youtube.com/watch?v=eIm4jxtzX18', language: 'ru' },
      { title: 'Царевны – Урок волшебства', url: 'https://www.youtube.com/watch?v=l07CUWeebBg', language: 'ru' },
      { title: 'Царевны – Выпускной бал', url: 'https://www.youtube.com/watch?v=wrHze4XCWi4', language: 'ru' },
      { title: 'Little Tiaras – Girl Wizards', url: 'https://www.youtube.com/watch?v=Usp6nGqtPi0', language: 'en' },
      { title: 'Little Tiaras – School for Princesses', url: 'https://www.youtube.com/watch?v=rMgRzvDCuiA', language: 'en' },
      { title: 'Little Tiaras – The Stolen Crown', url: 'https://www.youtube.com/watch?v=oVHvWolwcyE', language: 'en' },
      { title: 'Little Tiaras – Magical Talent', url: 'https://www.youtube.com/watch?v=PIBqA9wN0ws', language: 'en' },
      { title: 'Little Tiaras – Dragon Lessons', url: 'https://www.youtube.com/watch?v=Usp6nGqtPi0', language: 'en' }
    ]
  },
  {
    name: 'Простоквашино (новый)',
    videos: [
      { title: 'Новое Простоквашино – Таинственный бульдог', url: 'https://www.youtube.com/watch?v=JDC8jAwizC0', language: 'ru' },
      { title: 'Новое Простоквашино – Звёзды в Простоквашино', url: 'https://www.youtube.com/watch?v=CkH2-BO2Ch8', language: 'ru' },
      { title: 'Новое Простоквашино – Машина времени', url: 'https://www.youtube.com/watch?v=2AH987Y0yVs', language: 'ru' },
      { title: 'Новое Простоквашино – Опасный Шарик', url: 'https://www.youtube.com/watch?v=yjrjBtLk1Ss', language: 'ru' },
      { title: 'Новое Простоквашино – Похищенный трактор', url: 'https://www.youtube.com/watch?v=1vyuMrDsfqo', language: 'ru' },
      { title: 'Bluey – Magic Xylophone', url: 'https://www.youtube.com/watch?v=P1nydF443xM', language: 'en' },
      { title: 'Bluey – Camping', url: 'https://www.youtube.com/watch?v=PUb3sYmMOcs', language: 'en' },
      { title: 'Bluey – Ice Cream', url: 'https://www.youtube.com/watch?v=Kf0jwCmNKfU', language: 'en' },
      { title: 'Bluey – Sleepytime', url: 'https://www.youtube.com/watch?v=TxoqJ0Pmux0', language: 'en' },
      { title: 'Bluey – The Creek', url: 'https://www.youtube.com/watch?v=dmaNzUuyNZo', language: 'en' }
    ]
  },
  {
    name: 'Развивающие песенки и потешки',
    videos: [
      { title: 'Кукутики – Песенка про цвета', url: 'https://www.youtube.com/watch?v=SNgvt8xAtZ4', language: 'ru' },
      { title: 'Теремок ТВ – Антошка', url: 'https://www.youtube.com/watch?v=9-rIgUtfwyo', language: 'ru' },
      { title: 'Мизяка Дизяка – Песенка про алфавит', url: 'https://www.youtube.com/watch?v=JzLsBWQglzA', language: 'ru' },
      { title: 'Котёнок Котэ – Песенка про дождик', url: 'https://www.youtube.com/watch?v=y7B6lQQtHQA', language: 'ru' },
      { title: 'Свинки Пеппа – Песенка Bing Bong', url: 'https://www.youtube.com/watch?v=fKC5wCttLcc', language: 'ru' },
      { title: 'Pinkfong – Baby Shark Dance', url: 'https://www.youtube.com/watch?v=XqZsoesa55w', language: 'en' },
      { title: 'Cocomelon – Wheels on the Bus', url: 'https://www.youtube.com/watch?v=e_04ZrNroTo', language: 'en' },
      { title: 'Little Baby Bum – Johny Johny Yes Papa', url: 'https://www.youtube.com/watch?v=X0CKaJlSRKE', language: 'en' },
      { title: 'Super Simple Songs – Twinkle Twinkle Little Star', url: 'https://www.youtube.com/watch?v=yCjJyiqpAuU', language: 'en' },
      { title: 'ChuChu TV – Phonics Song with Two Words', url: 'https://www.youtube.com/watch?v=EBYsx1QWF9A', language: 'en' }
    ]
  },
  {
    name: "masha",
    videos: [
      { title: 'Маша и Медведь', url: 'https://www.youtube.com/watch?v=AqYsbttfgaQ', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Страх темноты', url: 'https://www.youtube.com/watch?v=RQ9RWHu9NLw', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' },
      { title: 'Маша и Медведь – Машины страшилки: Про монстров', url: 'https://www.youtube.com/watch?v=R4zBjs3ToMg', language: 'ru' }
    ]
  }
];

// Helper functions
export const CATEGORIES = VIDEO_LIBRARY.map(category => category.name);

export function getVideosByCategory(categoryName: string): VideoItem[] {
  const category = VIDEO_LIBRARY.find(c => c.name === categoryName);
  return category ? category.videos : [];
}

export function getVideosByLanguage(language: 'ru' | 'en'): VideoItem[] {
  return VIDEO_LIBRARY.flatMap(category => 
    category.videos.filter(video => video.language === language)
  );
}

export function getRandomVideoFromCategory(categoryName: string): VideoItem | null {
  const videos = getVideosByCategory(categoryName);
  return videos.length > 0 ? videos[Math.floor(Math.random() * videos.length)] : null;
}

// Flat list of all videos for backward compatibility
export const VIDEOS = VIDEO_LIBRARY.flatMap(category => 
  category.videos.map(video => ({
    id: video.url.split('v=')[1],
    name: video.title
  }))
);

export const VIDEO_CATEGORIES = [
  {
    id: "english_for_kids",
    name: "Английский для малышей",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Английский для малышей')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Английский для малышей')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "favorite_dances",
    name: "Избранные танцы",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Избранные танцы')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Избранные танцы')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "fixiki",
    name: "Фиксики",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Фиксики')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Фиксики')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "tri_kota",
    name: "Три кота",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Три кота')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Три кота')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "peppa",
    name: "Свинка Пеппа",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Свинка Пеппа')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Свинка Пеппа')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "paw_patrol",
    name: "Щенячий патруль",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Щенячий патруль')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Щенячий патруль')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "robocar",
    name: "Робокар Поли",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Робокар Поли')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Робокар Поли')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "smeshariki",
    name: "Смешарики",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Смешарики')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Смешарики')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "barboskiny",
    name: "Барбоскины",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Барбоскины')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Барбоскины')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "luntik",
    name: "Лунтик",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Лунтик')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Лунтик')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "malyshariki",
    name: "Малышарики",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Малышарики')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Малышарики')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "mi_mi_mishki",
    name: "Ми-ми-мишки",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Ми-ми-мишки')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Ми-ми-мишки')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "buba",
    name: "Буба",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Буба')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Буба')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "siniy_traktor",
    name: "Синий трактор",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Синий трактор')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Синий трактор')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "gruzovichok_leva",
    name: "Грузовичок Лёва",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Грузовичок Лёва')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Грузовичок Лёва')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "kotiki_vpered",
    name: "Котики, вперед!",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Котики, вперед!')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Котики, вперед!')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "princessa_alenka",
    name: "Принцесса Аленка",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Принцесса Аленка')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Принцесса Аленка')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "komanda_flory",
    name: "Команда Флоры",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Команда Флоры')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Команда Флоры')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "tima_i_toma",
    name: "Тима и Тома",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Тима и Тома')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Тима и Тома')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "tsarevny",
    name: "Царевны",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Царевны')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Царевны')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "prostokvashino",
    name: "Простоквашино (новый)",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Простоквашино (новый)')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Простоквашино (новый)')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "razvivayushchie",
    name: "Развивающие песенки и потешки",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Развивающие песенки и потешки')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Развивающие песенки и потешки')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  },
  {
    id: "masha",
    name: "Маша и Медведь",
    image: `https://i.ytimg.com/vi/${VIDEO_LIBRARY.find(c => c.name === 'Маша и Медведь')?.videos[0]?.url.split('v=')[1]}/maxresdefault.jpg`,
    videos: VIDEO_LIBRARY.find(c => c.name === 'Маша и Медведь')?.videos.map(v => ({
      id: v.url.split('v=')[1],
      name: v.title
    })) || []
  }
];
