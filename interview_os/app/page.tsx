"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  ChevronDown,
  CircleCheck,
  Layers3,
  MessageSquareMore,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NeuralParticleField } from "@/components/visual/neural-particle-field";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const steps = [
  ["01", "Analyze", "We map your cohort, role and experience into a focused interview brief."],
  ["02", "Interview", "A natural technical conversation begins with questions built for you."],
  ["03", "Adapt", "The next question responds to your answer, not a scripted checklist."],
  ["04", "Evaluate", "Leave with a clear signal on strengths, gaps and your next best move."],
] as const;

const features = [
  { icon: Target, title: "Personalized Questions", body: "A starting point calibrated to your skills, target role and the ABTalks AI Cohort curriculum." },
  { icon: MessageSquareMore, title: "Intelligent Follow-ups", body: "Thoughtful probes uncover how you reason, not just what you have memorized." },
  { icon: Layers3, title: "Context-Aware Interviews", body: "Every prompt remembers what you have said, so the conversation keeps its thread." },
  { icon: BarChart3, title: "Actionable Feedback", body: "A concise debrief turns the session into practical preparation for what comes next." },
] as const;

const faqs = [
  ["What is InterviewOS?", "InterviewOS is a practice environment for technical interviews. It creates a focused, adaptive conversation and an evidence-based recap so you can prepare with intent."],
  ["How does it relate to the ABTalks AI Cohort?", "The experience is shaped around the learning outcomes and technical context of the ABTalks AI Cohort, helping each participant practice the skills most relevant to their journey."],
  ["Does the interview really adapt as I answer?", "Yes. Each response informs the direction and depth of the conversation, allowing the interview to spend time where it is most useful."],
  ["What will I receive after an interview?", "You will see a structured readout of the signals observed in the session, including strengths, areas to revisit, and suggested next steps."],
] as const;

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.045em] text-text-primary sm:text-4xl lg:text-5xl">{title}</h2>
      {body && <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-text-muted">{body}</p>}
    </motion.div>
  );
}

function WorkspacePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto mt-12 max-w-5xl [perspective:1000px]"
    >
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-signal/15 blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-line/15 bg-[#111117] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="flex h-12 items-center justify-between border-b border-line/10 px-4 sm:px-5">
          <div className="flex items-center gap-2 text-xs font-medium text-text-muted"><span className="h-2 w-2 rounded-full bg-mint" />Live practice session</div>
          <div className="rounded-full border border-line/10 bg-surface-raised/60 px-2.5 py-1 font-mono text-[10px] text-text-faint">17:42</div>
        </div>
        <div className="grid min-h-[390px] md:grid-cols-[1.4fr_0.8fr]">
          <div className="flex flex-col border-b border-line/10 p-4 sm:p-6 md:border-b-0 md:border-r">
            <div className="flex items-center gap-2 text-xs text-text-muted"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-signal/15 text-signal"><Bot className="h-3.5 w-3.5" /></span>InterviewOS</div>
            <div className="mt-5 max-w-[92%] rounded-2xl rounded-tl-sm border border-line/10 bg-surface-raised/60 px-4 py-3 text-sm leading-relaxed text-text-primary">You mentioned using retrieval augmentation. How would you evaluate whether it is improving answer quality?</div>
            <div className="ml-auto mt-5 max-w-[85%] rounded-2xl rounded-tr-sm border border-signal/20 bg-signal/10 px-4 py-3 text-sm leading-relaxed text-text-muted">I&apos;d define a representative evaluation set, then measure groundedness and task success against a baseline.</div>
            <div className="mt-auto flex items-center gap-3 pt-7"><div className="h-10 flex-1 rounded-lg border border-line/10 bg-surface/80" /><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal text-white"><ArrowRight className="h-4 w-4" /></span></div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between"><p className="text-xs font-medium text-text-muted">Session signals</p><span className="text-[10px] font-medium text-mint">Updating</span></div>
            <div className="mt-5 rounded-xl border border-line/10 bg-surface/60 p-4">
              <div className="flex items-end justify-between"><div><p className="text-2xl font-semibold tracking-tight">84</p><p className="mt-1 text-[11px] text-text-faint">Reasoning signal</p></div><div className="flex h-10 items-end gap-1">{[35, 52, 42, 76, 58, 88, 72].map((height, i) => <span key={i} style={{ height: `${height}%` }} className="w-1.5 rounded-full bg-gradient-to-t from-signal to-pulse" />)}</div></div>
            </div>
            <div className="mt-4 space-y-3">{[["Structured thinking", "Strong"], ["Technical depth", "Exploring"], ["Communication", "Clear"]].map(([label, status]) => <div key={label} className="flex items-center justify-between text-xs"><span className="text-text-muted">{label}</span><span className="flex items-center gap-1 text-text-primary"><CircleCheck className="h-3 w-3 text-mint" />{status}</span></div>)}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <div className="mt-10 divide-y divide-line/10 border-y border-line/10">
    {faqs.map(([question, answer], index) => <div key={question}>
      <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-medium text-text-primary sm:text-lg"><span>{question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-text-muted transition-transform ${open === index ? "rotate-180" : ""}`} /></button>
      <motion.div initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} transition={{ duration: 0.22 }} className="overflow-hidden"><p className="max-w-2xl pb-5 text-sm leading-relaxed text-text-muted sm:text-base">{answer}</p></motion.div>
    </div>)}
  </div>;
}

export default function LandingPage() {
  return (
    <div className="landing-page relative isolate overflow-hidden">
      <NeuralParticleField variant="hero" className="fixed inset-0 -z-10 opacity-80" />
      <div aria-hidden className="landing-grid pointer-events-none fixed inset-0 -z-20 opacity-50" />
      <div aria-hidden className="pointer-events-none fixed left-1/2 top-[-20rem] -z-10 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-signal/20 blur-[130px]" />
      <div aria-hidden className="pointer-events-none fixed right-[-18rem] top-1/3 -z-10 h-[34rem] w-[34rem] rounded-full bg-pulse/10 blur-[120px]" />

      <header className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal to-pulse text-xs font-bold text-ink">iO</span><span className="text-sm font-semibold tracking-tight">InterviewOS</span></Link>
        <div className="hidden items-center gap-7 text-sm text-text-muted md:flex"><a href="#how-it-works" className="transition-colors hover:text-text-primary">How it works</a><a href="#features" className="transition-colors hover:text-text-primary">Features</a><a href="#faq" className="transition-colors hover:text-text-primary">FAQ</a></div>
        <Button asChild size="sm" className="h-9 px-4"><Link href="/interview">Start an Interview <ArrowRight className="h-3.5 w-3.5" /></Link></Button>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 text-center sm:px-8 sm:pb-28 sm:pt-28 lg:pt-32">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="inline-flex items-center gap-2 rounded-full border border-line/15 bg-surface-raised/50 px-3 py-1.5 text-xs text-text-muted"><Sparkles className="h-3.5 w-3.5 text-pulse" />Built for the ABTalks AI Cohort</motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.08} className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-8xl">Technical interviews <span className="signal-gradient-text">that adapt to you.</span></motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.16} className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg">Practice the interview that fits your journey. InterviewOS turns the ABTalks AI Cohort context into a personalized AI conversation that follows your thinking, challenges your depth, and helps you improve.</motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.24} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/interview">Start an Interview <ArrowRight /></Link></Button><Button asChild variant="secondary" size="lg"><a href="#how-it-works">Explore How It Works</a></Button></motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.32} className="mt-5 text-xs text-text-faint">A focused practice session takes about 20 minutes.</motion.p>
          <WorkspacePreview />
        </section>

        <section className="border-y border-line/10 bg-surface/35"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-line/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-y-0">{[["20 min", "average focused session"], ["4 signals", "captured in every debrief"], ["1:1", "adaptive conversation flow"], ["100%", "built around your context"]].map(([value, label]) => <div key={label} className="px-4 py-7 sm:px-7 sm:py-9"><p className="text-2xl font-semibold tracking-tight sm:text-3xl">{value}</p><p className="mt-1.5 text-xs text-text-muted sm:text-sm">{label}</p></div>)}</div></section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><SectionHeading eyebrow="The experience" title="A better loop for getting interview ready." body="No generic question bank. Just a structured conversation that meets you where you are and makes every minute useful." /><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 md:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, body], i) => <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} custom={i * 0.06} className="group min-h-60 bg-surface/80 p-6 transition-colors hover:bg-surface-raised/70 sm:p-7"><span className="font-mono text-xs text-signal">{number}</span><h3 className="mt-12 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-text-muted">{body}</p></motion.div>)}</div></section>

        <section id="features" className="border-y border-line/10 bg-surface/25"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><SectionHeading eyebrow="Designed for depth" title="Signals you can use. Conversations that feel human." /><div className="mt-14 grid gap-4 md:grid-cols-2">{features.map(({ icon: Icon, title, body }, i) => <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} custom={i * 0.06} whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-2xl border border-line/10 bg-surface/70 p-6 transition-colors hover:border-signal/30 hover:bg-surface-raised/70 sm:p-8"><div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-signal/0 blur-3xl transition-colors duration-500 group-hover:bg-signal/15" /><span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 text-signal"><Icon className="h-5 w-5" /></span><h3 className="relative mt-10 text-xl font-semibold tracking-tight">{title}</h3><p className="relative mt-3 max-w-sm text-sm leading-relaxed text-text-muted">{body}</p><ArrowRight className="relative mt-8 h-4 w-4 text-text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-signal" /></motion.div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20"><div aria-hidden className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 bg-signal/15 blur-[90px]" /><div className="relative"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Practice with purpose</p><h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">The next interview should tell you something new.</h2><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-muted">Walk in with a clearer picture of what you know, how you think, and where to focus next.</p><Button asChild size="lg" className="mt-8"><Link href="/interview">Start an Interview <ArrowRight /></Link></Button></div></div></section>

        <section id="faq" className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 lg:pb-32"><SectionHeading eyebrow="FAQ" title="A few good questions." /><FAQ /></section>
      </main>

      <footer className="border-t border-line/10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between"><div><Link href="/" className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-signal to-pulse text-[10px] font-bold text-ink">iO</span><span className="text-sm font-semibold">InterviewOS</span></Link><p className="mt-3 text-sm text-text-muted">Technical interview practice, made personal.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted"><a href="#how-it-works" className="hover:text-text-primary">How it works</a><a href="#features" className="hover:text-text-primary">Features</a><a href="#faq" className="hover:text-text-primary">FAQ</a><Link href="/interview" className="hover:text-text-primary">Start an Interview</Link></div></div><div className="mx-auto max-w-7xl border-t border-line/10 px-5 py-5 text-xs text-text-faint sm:px-8">© 2026 InterviewOS · Built for the ABTalks AI Cohort</div></footer>
    </div>
  );
}
