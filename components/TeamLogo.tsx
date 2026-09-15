"use client";

import type { IconType } from "react-icons";
import * as Si from "react-icons/si";

/**
 * Мапа официальных логотипов команд из react-icons/si.
 * Если иконки нет — вернётся undefined и отрисуется красивый fallback.
 * Обращение через (Si as any) защищает от ошибок сборки, если иконка не существует.
 */
const LOGO_MAP: Record<string, IconType | undefined> = {
  navi:     (Si as any).SiNatusvincere,
  c9:       (Si as any).SiCloud9,
  liquid:   (Si as any).SiTeamliquid,
  astralis: (Si as any).SiAstralis,
  g2:       (Si as any).SiG2,
  faze:     (Si as any).SiFazeclan,
  vitality: (Si as any).SiTeamvitality,
  mouz:     (Si as any).SiMousesports,
  vp:       (Si as any).SiVirtuspro,
  heroic:   (Si as any).SiHeroic,
  spirit:   (Si as any).SiTeamspirit,
  complexity: (Si as any).SiComplexity,
};

type TeamLogoProps = {
  teamId: string;
  shortName: string;
  accent: string;
  size?: number;
};

export function TeamLogo({ teamId, shortName, accent, size = 56 }: TeamLogoProps) {
  const Icon = LOGO_MAP[teamId];

  // Если есть официальный логотип — рендерим его на подложке с цветом команды
  if (Icon) {
    return (
      <div
        className="rounded-xl flex items-center justify-center border border-border shrink-0"
        style={{
          width: size,
          height: size,
          background: `${accent}15`,
        }}
      >
        <Icon size={size * 0.55} style={{ color: accent }} />
      </div>
    );
  }

  // Fallback — цветная буква
  return (
    <div
      className="rounded-xl flex items-center justify-center border border-border shrink-0 font-bold relative overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `${accent}15`,
        color: accent,
        fontSize: size * 0.42,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}40, transparent 70%)`,
        }}
      />
      <span className="relative">{shortName[0]}</span>
    </div>
  );
}