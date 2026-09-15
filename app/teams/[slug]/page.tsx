"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTeam } from "@/lib/teams";
import { getPlayersByTeam } from "@/lib/players";
import { PlayerCard } from "@/components/PlayerCard";

export default function TeamPage() {
  const params = useParams();
  const team = getTeam(String(params.slug));

  if (!team) {
    return (
      <div className="text-center py-20">
        <p className="text-muted mb-4">Команда не найдена</p>
        <Link href="/teams" className="text-accent hover:underline">← К списку команд</Link>
      </div>
    );
  }

  const roster = getPlayersByTeam(team.id);

  return (
    <div className="space-y-8">
      <Link href="/teams" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition">
        <ArrowLeft size={16} /> Все команды
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${team.accent}, transparent 70%)` }}
        />
        <div className="relative flex flex-wrap items-center gap-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold border border-border"
            style={{ background: `${team.accent}15`, color: team.accent }}
          >
            {team.shortName[0]}
          </div>
          <div className="flex-1 min-w-[240px]">
            <h1 className="text-3xl font-semibold tracking-tight">{team.name}</h1>
            <p className="text-muted mt-1">{team.country}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-semibold text-accent">{roster.length}</div>
            <div className="text-xs text-muted uppercase tracking-wider mt-1">Игроков</div>
          </div>
        </div>
      </motion.div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Состав</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {roster.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            >
              <PlayerCard player={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}