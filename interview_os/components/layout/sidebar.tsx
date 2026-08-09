"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  FileBarChart,
  ChevronsLeft,
  Settings,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/layout/sidebar-context";

const NAV_ITEMS = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard", label: "Candidates", icon: Users },
  { href: "/interview", label: "Interview", icon: MessagesSquare },
  { href: "/report", label: "Report", icon: FileBarChart },
] as const;

function NavLink({
  href,
  label,
  icon: Icon,
  collapsed,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  collapsed: boolean;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200",
        active
          ? "text-text-primary"
          : "text-text-muted hover:text-text-primary hover:bg-surface-raised/50"
      )}
    >
      {active && (
        <motion.span
          layoutId="sidebar-active-pill"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="absolute inset-0 rounded-lg bg-surface-raised/80 shadow-[0_0_0_1px_hsl(var(--line)/0.1)]"
        />
      )}
      <span
        className={cn(
          "absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signal to-pulse transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0"
        )}
      />
      <Icon className="relative z-10 h-4 w-4 shrink-0" />
      <span
        className={cn(
          "relative z-10 truncate transition-all duration-200",
          collapsed && "w-0 opacity-0"
        )}
      >
        {label}
      </span>
    </Link>
  );
}

function SidebarContents({
  collapsed,
  onNavigate,
  onToggle,
  showCloseButton,
}: {
  collapsed: boolean;
  onNavigate?: () => void;
  onToggle?: () => void;
  showCloseButton?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "flex h-16 shrink-0 items-center border-b border-line/8 px-4",
          collapsed ? "justify-center" : "justify-between"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5" onClick={onNavigate}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-signal to-pulse text-xs font-bold text-ink">
            iOS
          </span>
          {!collapsed && (
            <span className="text-sm font-semibold tracking-tight text-text-primary">
              InterviewOS
            </span>
          )}
        </Link>
        {showCloseButton && (
          <button
            onClick={onNavigate}
            aria-label="Close sidebar"
            className="rounded-md p-1.5 text-text-muted hover:bg-surface-raised/60 hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            {...item}
            collapsed={collapsed}
            active={pathname === item.href}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="space-y-1 border-t border-line/8 px-3 py-4">
        <NavLink
          href="/"
          label="Settings"
          icon={Settings}
          collapsed={collapsed}
          active={false}
        />
        {onToggle && (
          <button
            onClick={onToggle}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-raised/50 hover:text-text-primary"
          >
            <ChevronsLeft
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-300",
                collapsed && "rotate-180"
              )}
            />
            <span className={cn(collapsed && "w-0 opacity-0")}>Collapse</span>
          </button>
        )}
      </div>
    </div>
  );
}

export function Sidebar() {
  const { collapsed, toggle, mobileOpen, setMobileOpen } = useSidebar();

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 76 : 248 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="glass fixed inset-y-0 left-0 z-40 hidden border-r border-line/8 lg:block"
      >
        <SidebarContents collapsed={collapsed} onToggle={toggle} />
      </motion.aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 340, damping: 34 }}
            className="glass-strong relative z-10 h-full w-[264px] border-r border-line/10"
          >
            <SidebarContents
              collapsed={false}
              onNavigate={() => setMobileOpen(false)}
              showCloseButton
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
