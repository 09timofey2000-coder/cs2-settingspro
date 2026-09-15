import { Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="px-6 md:px-8 h-16 max-w-[1500px] mx-auto flex items-center gap-4">
        <div className="text-sm font-medium">CS2 Settings</div>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-lg bg-surface border border-border text-sm text-subtle w-72">
          <Search size={15} />
          <span>Поиск игрока...</span>
        </div>
      </div>
    </header>
  );
}