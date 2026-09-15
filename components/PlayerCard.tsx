import Link from "next/link";
import { TwitchIcon } from "./TwitchIcon";
import type { Player } from "@/lib/players";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/players/${player.id}`}>
      <div className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 h-full relative">
        {player.twitch && (
          <span className="absolute top-3 right-3 w-6 h-6 rounded-md bg-[#9146ff]/20 text-[#9146ff] flex items-center justify-center">
            <TwitchIcon size={13} />
            </span>
        )}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center font-bold text-accent text-lg">
            {player.nickname[0].toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold truncate">{player.nickname}</h3>
              {player.verified && <span className="text-accent text-xs">✓</span>}
            </div>
            <p className="text-xs text-muted truncate">
              {player.country} {player.team}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs pt-3 border-t border-border">
          <span className="text-muted">DPI {player.dpi} / {player.sens}</span>
          <span className="text-accent font-medium">{player.edpi} eDPI</span>
        </div>
      </div>
    </Link>
  );
}