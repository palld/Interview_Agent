"use client";

import { Menu, Search, Bell, ChevronsLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/layout/sidebar-context";
import { StatusReadout } from "@/components/shared/status-readout";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { collapsed, toggle, setMobileOpen } = useSidebar();

  return (
    <header
      className={cn(
        "glass fixed inset-x-0 top-0 z-30 flex h-16 items-center gap-3 border-b border-line/8 px-4 transition-[padding] duration-300 lg:px-6",
        collapsed ? "lg:pl-[92px]" : "lg:pl-[264px]"
      )}
    >
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
        className="rounded-md p-2 text-text-muted hover:bg-surface-raised/50 hover:text-text-primary lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <button
        onClick={toggle}
        aria-label="Toggle sidebar"
        className="hidden rounded-md p-2 text-text-muted hover:bg-surface-raised/50 hover:text-text-primary lg:flex"
      >
        <ChevronsLeft
          className={cn("h-4 w-4 transition-transform duration-300", collapsed && "rotate-180")}
        />
      </button>

      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-faint" />
        <input
          type="text"
          placeholder="Search sessions, candidates, reports…"
          className="h-9 w-full rounded-md border border-line/10 bg-surface/60 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-faint focus-visible:outline-none focus-visible:border-signal/50 focus-visible:ring-2 focus-visible:ring-signal/20"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <StatusReadout label="System ready" className="hidden sm:inline-flex" tone="mint" />

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2 rounded-full border border-line/10 bg-surface-raised/50 py-1 pl-1 pr-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-signal to-pulse text-[11px] font-semibold text-ink">
            JR
          </span>
          <span className="hidden text-xs font-medium text-text-primary sm:inline">
            Jordan Reyes
          </span>
        </div>
      </div>
    </header>
  );
}
