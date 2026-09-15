"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { useState } from "react";
import { getPlayer } from "@/lib/players";
import clsx from "clsx";

export default function PlayerPage() {
  const params = useParams();
  const player = getPlayer(String(params.nick));
  const [copied, setCopied] = useState<string | null>(null);

  if (!player) {
    return (
      <div className="text-center py-20">
        <p className="text-muted mb-4">Игрок не найден</p>
        <Link href="/" className="text-accent hover:underline">← На главную</Link>
      </div>
    );
  }

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition">
        <ArrowLeft size={16} /> Назад
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8"
      >
        <div className="flex flex-wrap items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-surface border border-border flex items-center justify-center text-3xl font-bold text-accent">
            {player.nickname[0].toUpperCase()}
          </div>
          <div className="flex-1 min-w-[240px]">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-semibold tracking-tight">{player.nickname}</h1>
              {player.verified && (
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs text-bg font-bold">✓</span>
              )}
            </div>
            <p className="text-muted">{player.realName}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border">
                {player.country} {player.team}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent border border-accent/30">
                {player.role}
              </span>
            </div>
          </div>
        </div>
        {player.bio && <p className="text-muted text-sm mt-6 leading-relaxed">{player.bio}</p>}
      </motion.div>

      <Section title="Мышь и чувствительность" delay={0.1}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="DPI" value={player.dpi} />
          <Stat label="Sensitivity" value={player.sens} />
          <Stat label="eDPI" value={player.edpi} accent />
          <Stat label="Polling Rate" value={`${player.hz} Hz`} />
        </div>
      </Section>

      <Section title="Видео" delay={0.15}>
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Разрешение" value={player.resolution} />
          <Stat label="Aspect Ratio" value={player.aspect} />
        </div>
      </Section>

      <Section title="Девайсы" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Device label="Мышь" value={player.mouse} />
          <Device label="Коврик" value={player.mousepad} />
          <Device label="Клавиатура" value={player.keyboard} />
          <Device label="Монитор" value={player.monitor} />
          <Device label="Наушники" value={player.headset} />
        </div>
      </Section>

      {player.crosshairCode !== "—" && (
        <Section title="Прицел" delay={0.25}>
          <button
            onClick={() => copy(player.crosshairCode, "crosshair")}
            className="w-full text-left p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition group"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted mb-1">Crosshair Code — клик чтобы скопировать</div>
                <code className="text-sm text-accent break-all">{player.crosshairCode}</code>
              </div>
              {copied === "crosshair" ? (
                <Check size={18} className="text-success shrink-0" />
              ) : (
                <Copy size={18} className="text-muted group-hover:text-accent transition shrink-0" />
              )}
            </div>
          </button>
        </Section>
      )}

      <Section title="Параметры запуска" delay={0.3}>
        <button
          onClick={() => copy(player.launchOptions.join(" "), "launch")}
          className="w-full text-left p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-xs text-muted mb-2">Launch Options — клик чтобы скопировать</div>
              <code className="text-sm text-accent break-all">{player.launchOptions.join(" ")}</code>
            </div>
            {copied === "launch" ? (
              <Check size={18} className="text-success shrink-0" />
            ) : (
              <Copy size={18} className="text-muted group-hover:text-accent transition shrink-0" />
            )}
          </div>
        </button>
      </Section>

      <Section title="Viewmodel" delay={0.35}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="FOV" value={player.viewmodel.fov} />
          <Stat label="Offset X" value={player.viewmodel.offsetX} />
          <Stat label="Offset Y" value={player.viewmodel.offsetY} />
          <Stat label="Offset Z" value={player.viewmodel.offsetZ} />
        </div>
      </Section>

      {player.binds.length > 0 && (
        <Section title="Ключевые бинды" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {player.binds.map((b, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-surface border border-border">
                <span className="text-sm font-medium text-accent">{b.key}</span>
                <span className="text-sm text-muted">{b.action}</span>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="glass rounded-2xl p-5">{children}</div>
    </motion.section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div className="p-3 rounded-xl bg-surface border border-border">
      <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{label}</div>
      <div className={clsx("font-semibold", accent ? "text-accent" : "text-text")}>{value}</div>
    </div>
  );
}

function Device({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-surface border border-border">
      <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{label}</div>
      <div className="font-medium text-sm">{value}</div>
    </div>
  );
}