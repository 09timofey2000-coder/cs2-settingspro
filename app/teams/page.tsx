"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { teams } from "@/lib/teams";
import { players } from "@/lib/players";
import { TeamLogo } from "@/components/TeamLogo";

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Команды <span className="text-accent">CS2</span>
        </h1>
        <p className="text-muted mt-2 max-w-2xl">
          Профессиональные команды и их составы. Кликни на команду, чтобы увидеть настройки игроков.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {teams.map((team, i) => {
          const roster = players.filter((p) => p.teamId === team.id);
          if (roster.length === 0) return null;

          return (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
            >
              <Link href={`/teams/${team.id}`}>
                <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <TeamLogo
                      teamId={team.id}
                      shortName={team.shortName}
                      accent={team.accent}
                      size={56}
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-lg truncate">{team.name}</h3>
                      <p className="text-xs text-muted">{team.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
                    <span className="text-muted">{roster.length} игроков</span>
                    <span className="text-accent">Перейти →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}