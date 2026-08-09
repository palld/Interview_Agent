"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarProvider, useSidebar } from "@/components/layout/sidebar-context";
import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { Toaster } from "@/components/ui/toaster";
import { NeuralParticleField } from "@/components/visual/neural-particle-field";

function Content({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  const pathname = usePathname();
  const variant = pathname === "/dashboard" ? "dashboard" : pathname === "/interview" ? "interview" : "report";

  return (
    <main
      className={cn(
        "min-h-screen pt-16 transition-[padding] duration-300 ease-out",
        collapsed ? "lg:pl-[76px]" : "lg:pl-[248px]"
      )}
    >
      <NeuralParticleField variant={variant} className="fixed inset-0 z-0" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
        <PageTransition>{children}</PageTransition>
      </div>
    </main>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The public landing page deliberately sits outside the product workspace.
  // All application routes keep the existing navigation chrome below.
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <Sidebar />
      <Navbar />
      <Content>{children}</Content>
      <Toaster />
    </SidebarProvider>
  );
}
