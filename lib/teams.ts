export type Team = {
  id: string;
  name: string;
  shortName: string;
  country: string;
  accent: string;
};

export const teams: Team[] = [
  { id: "spirit",   name: "Team Spirit",   shortName: "SPIRIT", country: "🇷🇺", accent: "#00b5e2" },
  { id: "navi",     name: "Natus Vincere", shortName: "NAVI",   country: "🇺🇦", accent: "#ffd700" },
  { id: "g2",       name: "G2 Esports",    shortName: "G2",     country: "🇪🇺", accent: "#ea1a41" },
  { id: "vp",       name: "Virtus.pro",    shortName: "VP",     country: "🇷🇺", accent: "#ee8620" },
  { id: "faze",     name: "FaZe Clan",     shortName: "FAZE",   country: "🇺🇸", accent: "#e41d2c" },
  { id: "vitality", name: "Team Vitality", shortName: "VIT",    country: "🇫🇷", accent: "#fcde00" },
];