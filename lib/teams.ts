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
  { id: "mouz",     name: "MOUZ",          shortName: "MOUZ",   country: "🇪🇺", accent: "#e10600" },
  { id: "astralis", name: "Astralis",      shortName: "AST",    country: "🇩🇰", accent: "#ee3124" },
  { id: "liquid",   name: "Team Liquid",   shortName: "TL",     country: "🇺🇸", accent: "#0e1e2d" },
  { id: "heroic",   name: "HEROIC",        shortName: "HER",    country: "🇩🇰", accent: "#00a9e0" },
  { id: "c9",       name: "Cloud9",        shortName: "C9",     country: "🇷🇺", accent: "#00aeef" },
  { id: "ww",       name: "WW Team",       shortName: "WW",     country: "🇷🇺", accent: "#7c3aed" },
];