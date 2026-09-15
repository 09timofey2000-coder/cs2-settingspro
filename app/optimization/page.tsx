"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, Monitor, Settings, ChevronDown, Copy, Check } from "lucide-react";
import clsx from "clsx";

const GUIDES = [
  { id: "launch",  icon: <Rocket size={18} />,   title: "Параметры запуска CS2", description: "Оптимальные launch options для максимального FPS", content: <LaunchOptions /> },
  { id: "fps",     icon: <Zap size={18} />,      title: "Оптимизация FPS",        description: "Как выжать максимум кадров из CS2", content: <FpsGuide /> },
  { id: "windows", icon: <Monitor size={18} />,  title: "Настройка Windows",      description: "Отключение лишнего, Game Mode, приоритеты", content: <WindowsGuide /> },
  { id: "nvidia",  icon: <Settings size={18} />, title: "Настройки NVIDIA / AMD", description: "Панель управления, драйверы, latency", content: <NvidiaGuide /> },
];

export default function OptimizationPage() {
  const [open, setOpen] = useState<string | null>("launch");

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Оптимизация CS2</h1>
        <p className="text-muted mt-2 max-w-2xl">
          Гайды по максимальной производительности: параметры запуска, Windows, драйверы.
        </p>
      </motion.div>

      <div className="space-y-3">
        {GUIDES.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === g.id ? null : g.id)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface/40 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
                {g.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold">{g.title}</h3>
                <p className="text-sm text-muted truncate">{g.description}</p>
              </div>
              <ChevronDown size={18} className={clsx("text-muted shrink-0 transition-transform", open === g.id && "rotate-180")} />
            </button>
            {open === g.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border"
              >
                <div className="p-5 space-y-4 text-sm text-muted leading-relaxed">{g.content}</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CodeBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="w-full flex items-center justify-between gap-3 p-3 rounded-lg bg-surface border border-border hover:border-accent/50 transition text-left group"
    >
      <code className="text-xs text-accent break-all">{text}</code>
      {copied ? <Check size={14} className="text-success shrink-0" /> : <Copy size={14} className="text-muted group-hover:text-accent shrink-0" />}
    </button>
  );
}

function LaunchOptions() {
  return (
    <>
      <p>Steam → CS2 → Свойства → Параметры запуска:</p>
      <CodeBlock text="-novid -console -freq 360 -tickrate 128 +fps_max 0 -allow_third_party_software" />
      <ul className="space-y-2 mt-2">
        <li><b className="text-text">-novid</b> — пропускает вступительное видео</li>
        <li><b className="text-text">-console</b> — открывает консоль при старте</li>
        <li><b className="text-text">-freq 360</b> — герцовка монитора (замени на свою: 144, 240, 360)</li>
        <li><b className="text-text">-tickrate 128</b> — макс. tickrate для локальных серверов</li>
        <li><b className="text-text">+fps_max 0</b> — убирает лимит FPS</li>
        <li><b className="text-text">-allow_third_party_software</b> — для оверлеев (Discord, Faceit)</li>
      </ul>
    </>
  );
}

function FpsGuide() {
  return (
    <>
      <p>Настройки графики в игре:</p>
      <ul className="space-y-2">
        <li>Разрешение — <b className="text-text">1280×960 (4:3 stretched)</b> — буст FPS</li>
        <li>Графика — <b className="text-text">всё на минимум</b></li>
        <li>Multicore Rendering — <b className="text-text">Вкл</b></li>
        <li>V-Sync — <b className="text-text">Выкл</b></li>
        <li>Anti-Aliasing — <b className="text-text">2x MSAA</b> или Off</li>
        <li>Shader Detail — <b className="text-text">Low</b></li>
      </ul>
      <p className="mt-3">Отключи оверлей Steam: Steam → Настройки → В игре → «Использовать оверлей Steam» — выкл.</p>
    </>
  );
}

function WindowsGuide() {
  return (
    <>
      <p><b className="text-text">1. Отключи Xbox Game Bar</b> — Параметры → Игры → Xbox Game Bar → Выкл</p>
      <p><b className="text-text">2. Включи Game Mode</b> — Параметры → Игры → Режим игры → Вкл</p>
      <p><b className="text-text">3. Схема электропитания — «Максимальная производительность»</b></p>
      <CodeBlock text="powercfg -setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c" />
      <p><b className="text-text">4. Приоритет CS2</b> — Ctrl+Shift+Esc → cs2.exe → Высокий</p>
    </>
  );
}

function NvidiaGuide() {
  return (
    <>
      <p><b className="text-text">NVIDIA Control Panel:</b></p>
      <ul className="space-y-1.5">
        <li>Режим электропитания — <b className="text-text">Макс. производительность</b></li>
        <li>Вертикальная синхронизация — <b className="text-text">Выкл</b></li>
        <li>Low Latency Mode — <b className="text-text">Ultra</b></li>
        <li>Texture filtering — <b className="text-text">Performance</b></li>
        <li>Потоковая оптимизация — <b className="text-text">Выкл</b></li>
      </ul>
      <p className="mt-3"><b className="text-text">AMD:</b> Anti-Lag — Вкл, Radeon Boost — Выкл.</p>
    </>
  );
}