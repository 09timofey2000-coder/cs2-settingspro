"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PlayerCard } from "@/components/PlayerCard";
import { players } from "@/lib/players";
import clsx from "clsx";

const FILTERS = [
  { id: "all",      label: "Все" },
  { id: "pro",      label: "Про-игроки" },
  { id: "streamer", label: "Стримеры" },
];

export default function HomePage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = players.filter((p) => {
    if (filter === "pro" && p.teamId === "streamer") return false;
    if (filter === "streamer" && p.teamId !== "streamer") return false;
    if (search && !p.nickname.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Настройки про-игроков <span className="text-accent">CS2</span>
        </h1>
        <p className="text-muted mt-2 max-w-2xl">
          Конфиги, прицелы, девайсы и параметры запуска профессиональных игроков и стримеров.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
      >
        <div className="flex gap-1 p-1 bg-surface border border-border rounded-lg">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={clsx(
                "px-3 py-1.5 rounded-md text-xs font-medium transition",
                filter === f.id ? "bg-accent text-bg" : "text-muted hover:text-text"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 px-3 h-9 rounded-lg bg-surface border border-border text-sm w-full md:w-72">
          <Search size={15} className="text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск игрока..."
            className="flex-1 bg-transparent outline-none placeholder:text-subtle text-sm"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.04, duration: 0.4 }}
          >
            <PlayerCard player={p} />
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">Ничего не найдено</div>
      )}
    </div>
  );
}