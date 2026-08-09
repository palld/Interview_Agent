"use client";

import { useEffect, useMemo, useState, type ComponentType } from "react";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  CircleDashed,
  Clock3,
  Search,
  SlidersHorizontal,
  Target,
  Users,
  XCircle,
} from "lucide-react";

import candidateData from "../../candidates.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Mission = { day: number; title: string; passed?: boolean; skipped?: boolean; attempts?: number };
type Candidate = {
  member: { id: string; name: string; jobRole: string; yearsExperience: number; education: string; status: string };
  missions: Mission[];
  signals: { commitDays: number; missionsCompleted: number; missionsFirstTry: number };
};

const candidates = candidateData.candidates as Candidate[];
const fadeUp: Variants = { hidden: { opacity: 0, y: 12 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] } }) };

function initials(name: string) { return name.split(" ").map((part) => part[0]).join("").slice(0, 2); }
function stats(candidate: Candidate) {
  const passed = candidate.missions.filter((mission) => mission.passed).length;
  const failed = candidate.missions.filter((mission) => mission.passed === false).length;
  const skipped = candidate.missions.filter((mission) => mission.skipped).length;
  return { passed, failed, skipped, firstTry: Math.round((candidate.signals.missionsFirstTry / Math.max(candidate.signals.missionsCompleted, 1)) * 100) };
}
function experience(years: number) { return years === 0 ? "Early career" : `${years} ${years === 1 ? "year" : "years"} experience`; }

function Avatar({ name, large = false }: { name: string; large?: boolean }) {
  return <span className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-signal to-pulse font-semibold text-ink ${large ? "h-14 w-14 text-base" : "h-10 w-10 text-xs"}`}>{initials(name)}</span>;
}

function CandidateCard({ candidate, index, onSelect }: { candidate: Candidate; index: number; onSelect: () => void }) {
  const result = stats(candidate);
  return <motion.button variants={fadeUp} initial="hidden" animate="show" custom={index} whileHover={{ y: -3 }} onClick={onSelect} className="group w-full rounded-xl border border-line/10 bg-surface/70 p-5 text-left shadow-[0_12px_32px_-24px_rgba(0,0,0,0.8)] transition-colors hover:border-signal/35 hover:bg-surface-raised/70">
    <div className="flex items-start gap-3"><Avatar name={candidate.member.name} /><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><div><p className="truncate text-sm font-semibold text-text-primary">{candidate.member.name}</p><p className="mt-0.5 truncate text-xs text-text-muted">{candidate.member.jobRole}</p></div><Badge variant="signal" className="shrink-0 text-[10px]">{candidate.member.status.toLowerCase()}</Badge></div><p className="mt-3 text-xs text-text-faint">{experience(candidate.member.yearsExperience)} · {candidate.member.education}</p></div></div>
    <div className="mt-5 grid grid-cols-3 gap-2 border-y border-line/10 py-4 text-center"><div><p className="text-sm font-semibold">{candidate.signals.missionsCompleted}</p><p className="mt-0.5 text-[10px] text-text-faint">missions</p></div><div className="border-x border-line/10"><p className="text-sm font-semibold">{candidate.signals.commitDays}</p><p className="mt-0.5 text-[10px] text-text-faint">commit days</p></div><div><p className="text-sm font-semibold">{result.firstTry}%</p><p className="mt-0.5 text-[10px] text-text-faint">first try</p></div></div>
    <div className="mt-4 flex items-center justify-between"><div className="flex gap-3 text-[11px]"><span className="flex items-center gap-1 text-mint"><CheckCircle2 className="h-3.5 w-3.5" />{result.passed}</span><span className="flex items-center gap-1 text-danger"><XCircle className="h-3.5 w-3.5" />{result.failed}</span><span className="flex items-center gap-1 text-text-faint"><CircleDashed className="h-3.5 w-3.5" />{result.skipped}</span></div><ArrowRight className="h-4 w-4 text-text-faint transition-all group-hover:translate-x-1 group-hover:text-signal" /></div>
  </motion.button>;
}

function CandidateDetail({ candidate, open, onOpenChange }: { candidate: Candidate | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter();
  if (!candidate) return null;
  const result = stats(candidate);
  const start = () => { localStorage.setItem("interviewos.selectedCandidate", JSON.stringify(candidate)); router.push("/interview"); };
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto"><DialogHeader><div className="flex items-start gap-4"><Avatar name={candidate.member.name} large /><div><DialogTitle>{candidate.member.name}</DialogTitle><DialogDescription className="mt-1">{candidate.member.jobRole} · {experience(candidate.member.yearsExperience)}</DialogDescription><p className="mt-2 text-xs text-text-faint">{candidate.member.education}</p></div></div></DialogHeader>
    <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Completion", `${candidate.signals.missionsCompleted}/31`], ["Commitment", `${candidate.signals.commitDays} days`], ["First-try rate", `${result.firstTry}%`], ["Status", candidate.member.status.toLowerCase()]].map(([label, value]) => <div key={label} className="rounded-lg border border-line/10 bg-surface-raised/40 p-3"><p className="text-[10px] uppercase tracking-wide text-text-faint">{label}</p><p className="mt-1 text-sm font-semibold capitalize">{value}</p></div>)}</div>
    <div className="mt-6"><div className="flex items-center justify-between"><h3 className="text-sm font-semibold">Learning journey</h3><span className="text-xs text-text-muted">{candidate.missions.length} recorded missions</span></div><div className="mt-4 space-y-2">{candidate.missions.map((mission) => { const tone = mission.passed ? "text-mint bg-mint/10" : mission.skipped ? "text-text-muted bg-surface-raised" : "text-danger bg-danger/10"; const label = mission.passed ? "Passed" : mission.skipped ? "Skipped" : "Failed"; return <div key={`${mission.day}-${mission.title}`} className="flex items-center gap-3 rounded-lg border border-line/10 bg-surface/45 px-3 py-3"><span className="w-10 font-mono text-[11px] text-text-faint">Day {mission.day}</span><p className="min-w-0 flex-1 truncate text-xs text-text-primary">{mission.title}</p><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tone}`}>{label}{mission.attempts ? ` · ${mission.attempts} ${mission.attempts === 1 ? "try" : "tries"}` : ""}</span></div>; })}</div></div>
    <div className="sticky bottom-0 -mx-6 -mb-6 mt-6 border-t border-line/10 bg-surface/95 p-4 backdrop-blur"><Button onClick={start} className="w-full">Start Interview with {candidate.member.name.split(" ")[0]} <ArrowRight /></Button></div>
  </DialogContent></Dialog>;
}

export default function DashboardPage() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All roles");
  const [selected, setSelected] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 280); return () => window.clearTimeout(timer); }, []);
  const roles = useMemo(() => ["All roles", ...Array.from(new Set(candidates.map((candidate) => candidate.member.jobRole))).sort()], []);
  const filtered = useMemo(() => candidates.filter((candidate) => candidate.member.name.toLowerCase().includes(query.toLowerCase()) && (role === "All roles" || candidate.member.jobRole === role)), [query, role]);
  const cohortStats = useMemo(() => ({ total: candidates.length, completed: candidates.filter((candidate) => candidate.member.status === "COMPLETED").length, averageCommit: Math.round(candidates.reduce((sum, candidate) => sum + candidate.signals.commitDays, 0) / candidates.length), firstTry: Math.round(candidates.reduce((sum, candidate) => sum + stats(candidate).firstTry, 0) / candidates.length) }), []);
  return <div className="space-y-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">Cohort intelligence</p><h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Candidate dashboard</h1><p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">Review learning signal, select a candidate, then begin a focused interview session.</p></div><Badge variant="outline" className="w-fit"><Users className="mr-1.5 h-3.5 w-3.5" />ABTalks AI Cohort</Badge></div>
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[[Users, cohortStats.total, "candidates in cohort"], [Award, cohortStats.completed, "completed journey"], [Clock3, `${cohortStats.averageCommit}d`, "avg. commitment"], [Target, `${cohortStats.firstTry}%`, "avg. first-try rate"]].map(([Icon, value, label]) => { const StatIcon = Icon as ComponentType<{ className?: string }>; return <div key={label as string} className="glass rounded-xl p-4"><div className="flex items-center justify-between"><span className="text-xs text-text-muted">{label as string}</span><StatIcon className="h-4 w-4 text-signal" /></div><p className="mt-4 text-2xl font-semibold tracking-tight">{value as string | number}</p></div>; })}</section>
    <section className="glass rounded-xl p-3 sm:p-4"><div className="flex flex-col gap-3 lg:flex-row"><div className="relative flex-1"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-faint" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search candidates by name..." className="pl-9" /></div><div className="flex items-center gap-2"><SlidersHorizontal className="h-4 w-4 text-text-faint" /><label htmlFor="role-filter" className="sr-only">Filter by role</label><select id="role-filter" value={role} onChange={(event) => setRole(event.target.value)} className="h-10 min-w-0 flex-1 rounded-md border border-line/10 bg-surface px-3 text-sm text-text-primary outline-none focus:border-signal/50 lg:w-60">{roles.map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div></section>
    <div className="flex items-center justify-between"><p className="text-sm text-text-muted">{loading ? "Loading candidates..." : `${filtered.length} ${filtered.length === 1 ? "candidate" : "candidates"} found`}</p><div className="hidden items-center gap-3 text-[11px] text-text-faint sm:flex"><span className="flex items-center gap-1 text-mint"><CheckCircle2 className="h-3 w-3" />Passed</span><span className="flex items-center gap-1 text-danger"><XCircle className="h-3 w-3" />Failed</span><span className="flex items-center gap-1"><CircleDashed className="h-3 w-3" />Skipped</span></div></div>
    {loading ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-64 animate-pulse rounded-xl border border-line/10 bg-surface-raised/40" />)}</div> : filtered.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((candidate, index) => <CandidateCard key={candidate.member.id} candidate={candidate} index={index} onSelect={() => setSelected(candidate)} />)}</div> : <div className="glass flex min-h-72 flex-col items-center justify-center rounded-xl px-5 text-center"><Search className="h-8 w-8 text-text-faint" /><h2 className="mt-4 text-lg font-semibold">No candidates found</h2><p className="mt-2 max-w-sm text-sm text-text-muted">Try a different name or reset the role filter to see the full cohort.</p><Button variant="secondary" size="sm" className="mt-5" onClick={() => { setQuery(""); setRole("All roles"); }}>Reset filters</Button></div>}
    <CandidateDetail candidate={selected} open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)} />
  </div>;
}
