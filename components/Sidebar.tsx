"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Target, Zap, Wrench } from "lucide-react";
import clsx from "clsx";

const NAV = [
  { href: "/",             icon: Target, label: "Настройки" },
  { href: "/optimization", icon: Zap,    label: "Оптимизация" },
  { href: "/specialists",  icon: Wrench, label: "Оптимизаторы" },
];

export function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[72px] border-r border-border bg-bg-soft/60 backdrop-blur-md flex flex-col items-center py-5 z-40">
      <Link
        href="/"
        className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-bold text-bg text-[12px] mb-8 shadow-[0_0_24px_rgba(255,92,26,0.35)] hover:scale-105 transition-transform"
      >
        CS2
      </Link>

      <nav className="flex flex-col gap-2">
        {NAV.map((item) => {
          const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all",
                active ? "bg-accent-soft text-accent" : "text-muted hover:text-text hover:bg-surface"
              )}
            >
              <Icon size={20} strokeWidth={1.8} />
              {active && (
                <span className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r" />
              )}
              <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-md bg-surface border border-border text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}