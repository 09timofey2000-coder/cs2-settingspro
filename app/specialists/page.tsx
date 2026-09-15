"use client";

import { motion } from "framer-motion";
import { Send, Star, ExternalLink, Check } from "lucide-react";
import { specialists } from "@/lib/specialists";
import { YoutubeIcon } from "@/components/YoutubeIcon";

// Иконка Boosty (нет в lucide)
function BoostyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.964 1.855c.65-.004 1.19.503 1.194 1.13v.57c.3-.198.65-.31 1.02-.31 1.13 0 2.05.938 2.05 2.097 0 1.16-.92 2.098-2.05 2.098-.37 0-.72-.11-1.02-.31v2.14c.3-.198.65-.31 1.02-.31 1.13 0 2.05.94 2.05 2.1 0 1.16-.92 2.1-2.05 2.1-.37 0-.72-.11-1.02-.31v2.14c.3-.2.65-.31 1.02-.31 1.13 0 2.05.94 2.05 2.1 0 1.16-.92 2.1-2.05 2.1-.37 0-.72-.11-1.02-.31v.57c0 .63-.54 1.13-1.19 1.13-.66 0-1.19-.5-1.19-1.13V1.855h.2Zm9.87 2.91c-1.53 0-2.77 1.27-2.77 2.84v.1c.6-.5 1.37-.79 2.2-.79 1.9 0 3.44 1.58 3.44 3.53 0 1.95-1.54 3.53-3.44 3.53-.83 0-1.6-.3-2.2-.79v5.06c0 .63-.53 1.13-1.19 1.13-.65 0-1.19-.5-1.19-1.13V7.6c0-1.57 1.24-2.84 2.77-2.84h2.38Zm-.57 8.19c1.18 0 2.14-.98 2.14-2.2 0-1.21-.96-2.19-2.14-2.19-1.18 0-2.14.98-2.14 2.2 0 1.21.96 2.19 2.14 2.19ZM22.5 1.855c.65 0 1.19.503 1.19 1.13v18.9c0 .627-.54 1.13-1.19 1.13-.65 0-1.19-.503-1.19-1.13V2.985c0-.627.54-1.13 1.19-1.13Z" />
    </svg>
  );
}

const SPECIALTY_ICONS: Record<string, string> = {
  "Оптимизация Windows": "🪟",
  "Input Lag": "⚡",
  "FPS Boost": "🚀",
  "Разгон BIOS": "⚙️",
  "Custom драйверы": "🎮",
  "Сетевые настройки": "🌐",
};

export default function SpecialistsPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Оптимизаторы</h1>
        <p className="text-muted mt-2 max-w-2xl">
          Специалисты по оптимизации CS2: конфиги, настройка Windows, разгон железа, снижение Input Lag.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {specialists.map((spec, i) => (
          <motion.div
            key={spec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            {/* Шапка карточки */}
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center text-2xl font-bold shrink-0">
                {spec.nickname[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-semibold">{spec.nickname}</h2>
                  {spec.verified && (
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                      <Check size={12} className="text-bg" strokeWidth={3} />
                    </span>
                  )}
                </div>
                {spec.realName && <p className="text-sm text-muted mt-0.5">{spec.realName}</p>}
                <p className="text-xs text-subtle mt-0.5">{spec.country}</p>
              </div>
            </div>

            {/* Описание */}
            <p className="text-sm text-muted leading-relaxed mb-5">{spec.description}</p>

            {/* Специализация */}
            <div className="mb-5">
              <h3 className="text-xs uppercase tracking-wider text-subtle mb-2.5">Специализация</h3>
              <div className="flex flex-wrap gap-1.5">
                {spec.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-muted"
                  >
                    {SPECIALTY_ICONS[s] || "•"} {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Ссылки */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {spec.links.telegram && (
                <a
                  href={spec.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#229ED9]/15 text-[#229ED9] text-sm font-medium hover:bg-[#229ED9]/25 transition"
                >
                  <Send size={14} />
                  Telegram
                </a>
              )}
              {spec.links.youtube && (
                <a
                  href={spec.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#ff0000]/15 text-[#ff4444] text-sm font-medium hover:bg-[#ff0000]/25 transition"
                >
                  <YoutubeIcon size={14} />
                  YouTube
                </a>
              )}
              {spec.links.boosty && (
                <a
                  href={spec.links.boosty}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f15a24]/15 text-[#f15a24] text-sm font-medium hover:bg-[#f15a24]/25 transition"
                >
                  <BoostyIcon size={14} />
                  Boosty
                </a>
              )}
              {spec.links.twitch && (
                <a
                  href={spec.links.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#9146ff]/15 text-[#9146ff] text-sm font-medium hover:bg-[#9146ff]/25 transition"
                >
                  <ExternalLink size={14} />
                  Twitch
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {specialists.length === 0 && (
        <div className="glass rounded-2xl p-12 text-center">
          <Star size={28} className="text-accent mx-auto mb-3" />
          <h2 className="text-xl font-semibold mb-2">Раздел в разработке</h2>
          <p className="text-muted max-w-md mx-auto">
            Скоро здесь появятся специалисты по оптимизации CS2.
          </p>
        </div>
      )}

      {/* CTA — связь */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <h2 className="text-xl font-semibold mb-2">Знаешь кого-то ещё?</h2>
        <p className="text-muted text-sm max-w-xl mx-auto">
          Если ты или твой знакомый профессионально занимается оптимизацией CS2 — напиши нам, добавим в базу.
        </p>
      </motion.div>
    </div>
  );
}