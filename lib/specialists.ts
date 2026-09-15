export type Specialist = {
  id: string;
  nickname: string;
  realName?: string;
  country: string;
  description: string;
  specialties: string[];
  links: {
    telegram?: string;
    youtube?: string;
    boosty?: string;
    twitch?: string;
    discord?: string;
  };
  verified: boolean;
};

export const specialists: Specialist[] = [
  {
    id: "igromanoff",
    nickname: "Igromanoff",
    country: " ",
    description:
      "Называет себя «отцом Input Laga». Автор легендарного плейбука Igromanoff OS для настройки Windows в один клик. Специализируется на глубокой оптимизации системы под CS2: отключение CFG, твики электропитания, настройка BIOS, разгон CPU/GPU/RAM. Его методы используют тысячи игроков, а сам он делает платные настройки ПК под ключ.",
    specialties: [
      "Оптимизация Windows",
      "Input Lag",
      "FPS Boost",
      "Разгон BIOS",
      "Custom драйверы",
      "Сетевые настройки",
    ],
    links: {
      telegram: "https://t.me/igromanofff",
      youtube: "https://youtube.com/@igromanoff",
      boosty: "https://boosty.to/igromanoff",
    },
    verified: true,
  },
];