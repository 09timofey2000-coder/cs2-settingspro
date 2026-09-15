export type Player = {
  id: string;
  nickname: string;
  realName: string;
  country: string;
  teamId: string;
  team: string;
  role: "AWPer" | "Rifler" | "IGL" | "Support" | "Стример";
  verified: boolean;
  bio?: string;

  dpi: number;
  sens: number;
  edpi: number;
  hz: number;

  resolution: string;
  aspect: string;

  mouse: string;
  mousepad: string;
  keyboard: string;
  monitor: string;
  headset: string;

  crosshairCode: string;
  launchOptions: string[];
  viewmodel: { fov: number; offsetX: number; offsetY: number; offsetZ: number };
  binds: { key: string; action: string }[];
};

export const players: Player[] = [
  {
    id: "donk", nickname: "donk", realName: "Данил Крышковец", country: "🇷🇺",
    teamId: "spirit", team: "Team Spirit", role: "Rifler", verified: true,
    bio: "Лучший rifler 2024 года. Молодой, дерзкий, агрессивный.",
    dpi: 800, sens: 1.25, edpi: 1000, hz: 4000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight 2", mousepad: "Artisan Zero XL Soft",
    keyboard: "Logitech G Pro X TKL", monitor: "Zowie XL2566K", headset: "HyperX Cloud II",
    crosshairCode: "CSGO-2w3SK-HasGr-BYazP-JL2Sv-o8veM",
    launchOptions: ["-novid", "-console", "-freq 360", "-tickrate 128", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [
      { key: "MOUSE4", action: "C4" },
      { key: "MOUSE5", action: "Flashbang" },
      { key: "Q", action: "Switch last weapon" },
      { key: "V", action: "Smoke" },
    ],
  },
  {
    id: "sh1ro", nickname: "sh1ro", realName: "Дмитрий Соколов", country: "🇷🇺",
    teamId: "spirit", team: "Team Spirit", role: "AWPer", verified: true,
    dpi: 400, sens: 1.5, edpi: 600, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2566K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "chopper", nickname: "chopper", realName: "Леонид Вишняков", country: "🇷🇺",
    teamId: "spirit", team: "Team Spirit", role: "IGL", verified: true,
    dpi: 400, sens: 1.7, edpi: 680, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "s1mple", nickname: "s1mple", realName: "Александр Костылев", country: "🇺🇦",
    teamId: "navi", team: "Natus Vincere", role: "AWPer", verified: true,
    bio: "Легенда CS. Самый титулованный игрок в истории.",
    dpi: 400, sens: 3.09, edpi: 1236, hz: 4000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Zowie EC2-CW", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2566K", headset: "HyperX Cloud II",
    crosshairCode: "CSGO-uCiX4-K9rbx-MVbTM-n3wDU-Gjj5P",
    launchOptions: ["-novid", "-console", "-freq 360", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [
      { key: "Q", action: "Switch last weapon" },
      { key: "MOUSE4", action: "C4" },
    ],
  },
  {
    id: "b1t", nickname: "b1t", realName: "Валерий Ваховский", country: "🇺🇦",
    teamId: "navi", team: "Natus Vincere", role: "Rifler", verified: true,
    dpi: 400, sens: 1.65, edpi: 660, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "m0nesy", nickname: "m0NESY", realName: "Илья Осипов", country: "🇷🇺",
    teamId: "g2", team: "G2 Esports", role: "AWPer", verified: true,
    bio: "Один из лучших AWP-игроков мира.",
    dpi: 400, sens: 2.0, edpi: 800, hz: 4000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight 2", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X TKL", monitor: "Zowie XL2566K", headset: "Logitech G Pro X",
    crosshairCode: "CSGO-ODtx8-wadQE-6iaxz-YPZA2-KS8SA",
    launchOptions: ["-novid", "-console", "-freq 360", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [{ key: "Q", action: "Switch last weapon" }],
  },
  {
    id: "niko", nickname: "NiKo", realName: "Никола Ковач", country: "🇧🇦",
    teamId: "g2", team: "G2 Esports", role: "Rifler", verified: true,
    bio: "Один из лучших рифлеров мира.",
    dpi: 400, sens: 1.55, edpi: 620, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight 2", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2566K", headset: "Logitech G Pro X",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "jame", nickname: "Jame", realName: "Джами Али", country: "🇷🇺",
    teamId: "vp", team: "Virtus.pro", role: "AWPer", verified: true,
    bio: "Снайпер и капитан Virtus.pro.",
    dpi: 400, sens: 2.2, edpi: 880, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Zowie EC2-CW", mousepad: "Zowie G-SR",
    keyboard: "HyperX Alloy FPS", monitor: "Zowie XL2566K", headset: "HyperX Cloud II",
    crosshairCode: "CSGO-jE9Nv-aYMWG-yCuYW-DNTur-zYYwP",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "electroNic", nickname: "electroNic", realName: "Денис Шарипов", country: "🇷🇺",
    teamId: "vp", team: "Virtus.pro", role: "Rifler", verified: true,
    dpi: 400, sens: 2.0, edpi: 800, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "CSGO-jE9Nv-aYMWG-yCuYW-DNTur-zYYwP",
    launchOptions: ["-novid", "-console", "-freq 360", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "karrigan", nickname: "karrigan", realName: "Финн Андерсен", country: "🇩🇰",
    teamId: "faze", team: "FaZe Clan", role: "IGL", verified: true,
    bio: "Легендарный IGL.",
    dpi: 400, sens: 1.8, edpi: 720, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "Logitech G Pro X",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "ropz", nickname: "ropz", realName: "Робин Коль", country: "🇪🇪",
    teamId: "faze", team: "FaZe Clan", role: "Rifler", verified: true,
    dpi: 400, sens: 1.65, edpi: 660, hz: 4000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight 2", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2566K", headset: "Logitech G Pro X",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console", "-freq 360"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "zywoo", nickname: "ZywOo", realName: "Матьё Эрбо", country: "🇫🇷",
    teamId: "vitality", team: "Team Vitality", role: "AWPer", verified: true,
    bio: "Лучший игрок мира 2019, 2020, 2023.",
    dpi: 400, sens: 2.0, edpi: 800, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2566K", headset: "Logitech G Pro X",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "buster", nickname: "Buster", realName: "Владислав Иванов", country: "🇷🇺",
    teamId: "streamer", team: "Стример", role: "Стример", verified: true,
    bio: "Бывший про-игрок, теперь популярный стример CS2.",
    dpi: 400, sens: 2.0, edpi: 800, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Zowie EC2", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console", "+fps_max 0"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "bratishkin", nickname: "Bratishkin", realName: "—", country: "🇷🇺",
    teamId: "streamer", team: "Стример", role: "Стример", verified: true,
    bio: "Популярный русскоязычный стример CS2.",
    dpi: 800, sens: 1.4, edpi: 1120, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "strogo", nickname: "Строго", realName: "—", country: "🇷🇺",
    teamId: "streamer", team: "Стример", role: "Стример", verified: true,
    bio: "Известный русскоязычный стример CS2.",
    dpi: 400, sens: 2.4, edpi: 960, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
  {
    id: "shadowkekw", nickname: "ShadowKekw", realName: "—", country: "🇷🇺",
    teamId: "streamer", team: "Стример", role: "Стример", verified: true,
    bio: "Популярный стример CS2.",
    dpi: 800, sens: 1.6, edpi: 1280, hz: 1000,
    resolution: "1280×960", aspect: "4:3 Stretched",
    mouse: "Logitech G Pro X Superlight", mousepad: "Logitech G640",
    keyboard: "Logitech G Pro X", monitor: "Zowie XL2546K", headset: "HyperX Cloud II",
    crosshairCode: "—",
    launchOptions: ["-novid", "-console"],
    viewmodel: { fov: 68, offsetX: 2.5, offsetY: 0, offsetZ: -1.5 },
    binds: [],
  },
];

export const getPlayer = (id: string) => players.find((p) => p.id === id);
export const getPlayersByTeam = (teamId: string) => players.filter((p) => p.teamId === teamId);