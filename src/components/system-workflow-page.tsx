import { useState, type ReactNode } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Cpu,
  Database,
  FileCheck2,
  Gauge,
  HardHat,
  History,
  LockKeyhole,
  Network,
  PackageCheck,
  Radio,
  RefreshCw,
  Route,
  ShieldCheck,
  TrainFront,
  TriangleAlert,
  UserCheck,
  Users,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tone = "data" | "ai" | "optimization" | "simulation" | "execution" | "exception";

type Detail = {
  purpose: string;
  inputs: string;
  process: string;
  output: string;
};

const toneClasses: Record<Tone, { border: string; bg: string; text: string; line: string }> = {
  data: { border: "border-data/30", bg: "bg-data-soft", text: "text-data", line: "bg-data" },
  ai: { border: "border-ai/30", bg: "bg-ai-soft", text: "text-ai", line: "bg-ai" },
  optimization: {
    border: "border-optimization/35",
    bg: "bg-optimization-soft",
    text: "text-optimization",
    line: "bg-optimization",
  },
  simulation: {
    border: "border-simulation/30",
    bg: "bg-simulation-soft",
    text: "text-simulation",
    line: "bg-simulation",
  },
  execution: {
    border: "border-execution/30",
    bg: "bg-execution-soft",
    text: "text-execution",
    line: "bg-execution",
  },
  exception: {
    border: "border-exception/30",
    bg: "bg-exception-soft",
    text: "text-exception",
    line: "bg-exception",
  },
};

const navItems = [
  "Corridor",
  "Asset Intelligence",
  "Planning",
  "System Workflow",
  "Digital Twin",
  "Work Orders",
  "Crew",
  "Analytics",
];

const technologySummary: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
}> = [
  { title: "Data input", description: "Asset + Train + Sensor + Maintenance Data", icon: Database, tone: "data" },
  { title: "AI / ML", description: "Risk Prediction + Asset Intelligence", icon: BrainCircuit, tone: "ai" },
  { title: "Optimization", description: "CP-SAT + Constraint-Based Planning", icon: Cpu, tone: "optimization" },
  { title: "Simulation", description: "Digital Twin + What-if Analysis", icon: Blocks, tone: "simulation" },
  { title: "Execution", description: "Work Order + Crew + Feedback", icon: Wrench, tone: "execution" },
];

const stageDetails: Record<number, Detail> = {
  1: {
    purpose: "Establish trusted access and unify operational asset context.",
    inputs: "User request, identity, role, selected asset, condition and operational history.",
    process: "The backend validates access before assembling the selected asset data.",
    output: "Authorized, planning-ready asset condition data.",
  },
  2: {
    purpose: "Translate asset evidence into a prioritized maintenance need.",
    inputs: "Condition, defects, sensors, age, failures, criticality and maintenance history.",
    process: "Risk assessment produces a class and probability used with engineering context.",
    output: "A traceable maintenance requirement for planning.",
  },
  3: {
    purpose: "Find feasible windows while respecting railway and resource constraints.",
    inputs: "Maintenance need, timetable, traffic, resources, duration, mode and location.",
    process: "Conflicts are checked; CP-SAT ranks feasible alternatives when required.",
    output: "Ranked plan alternatives ready for validation.",
  },
  4: {
    purpose: "Validate plan behavior in simulation and keep authorization with people.",
    inputs: "Selected alternative, corridor state, train movement and available resources.",
    process: "The digital twin evaluates interactions before an authorized review decision.",
    output: "Approved plan or a revision returned to optimization.",
  },
  5: {
    purpose: "Turn an approved plan into a safe, resourced execution package.",
    inputs: "Approved plan, execution mode, contracts, crew skills, equipment and materials.",
    process: "Readiness is checked before qualified crew assignment and targeted notification.",
    output: "A crew-ready work order with instructions and safeguards.",
  },
  6: {
    purpose: "Capture delivery evidence to improve future recommendations.",
    inputs: "Actual duration, outcome, execution observations and simulated expectations.",
    process: "Predicted and actual results are compared and retained as feedback.",
    output: "Historical evidence for future planning and recommendation improvement.",
  },
};

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 text-muted-foreground" aria-hidden="true">
      {label ? <span className="mb-1 text-[10px] font-bold uppercase text-ink-soft">{label}</span> : null}
      <ArrowDown className="size-5" strokeWidth={1.7} />
    </div>
  );
}

function ProcessBox({
  children,
  tone = "data",
  icon: Icon,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: LucideIcon | undefined;
  className?: string;
}) {
  const colors = toneClasses[tone];
  return (
    <div className={cn("flex min-h-12 items-center justify-center gap-2 rounded-md border px-3 py-2.5 text-center text-xs font-semibold leading-5", colors.border, colors.bg, className)}>
      {Icon ? <Icon className={cn("size-4 shrink-0", colors.text)} strokeWidth={1.8} /> : null}
      <span>{children}</span>
    </div>
  );
}

function Decision({ children, tone = "optimization" }: { children: ReactNode; tone?: Tone }) {
  const colors = toneClasses[tone];
  return (
    <div className="flex justify-center py-4">
      <div className={cn("flex size-24 rotate-45 items-center justify-center border bg-card shadow-sm", colors.border)}>
        <span className="-rotate-45 text-center text-[11px] font-extrabold uppercase leading-4 text-foreground">{children}</span>
      </div>
    </div>
  );
}

function TagList({ items, tone = "data" }: { items: string[]; tone?: Tone }) {
  const colors = toneClasses[tone];
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {items.map((item) => (
        <span key={item} className={cn("rounded border px-2 py-1 text-[10px] font-semibold text-ink-soft", colors.border, colors.bg)}>
          {item}
        </span>
      ))}
    </div>
  );
}

function DetailPanel({ detail, tone }: { detail: Detail; tone: Tone }) {
  const colors = toneClasses[tone];
  return (
    <div className={cn("mt-5 grid gap-3 rounded-md border p-4 sm:grid-cols-2 xl:grid-cols-4", colors.border, colors.bg)}>
      {Object.entries(detail).map(([key, value]) => (
        <div key={key}>
          <p className={cn("text-[10px] font-extrabold uppercase", colors.text)}>{key}</p>
          <p className="mt-1 text-xs leading-5 text-ink-soft">{value}</p>
        </div>
      ))}
    </div>
  );
}

function StageShell({
  number,
  title,
  label,
  tone,
  icon: Icon,
  selected,
  onSelect,
  children,
}: {
  number: number;
  title: string;
  label: string;
  tone: Tone;
  icon: LucideIcon;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}) {
  const colors = toneClasses[tone];
  return (
    <section
      id={`stage-${number}`}
      className={cn(
        "scroll-mt-24 overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300",
        selected ? cn(colors.border, "shadow-md") : "border-border hover:border-primary/20 hover:shadow-md",
      )}
    >
      <div className={cn("h-1", colors.line)} />
      <div className="p-5 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
          <div className="flex items-start gap-3">
            <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-md", colors.bg, colors.text)}>
              <Icon className="size-5" strokeWidth={1.8} />
            </div>
            <div>
              <p className={cn("text-[10px] font-extrabold uppercase", colors.text)}>{label}</p>
              <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">{number}. {title}</h2>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={onSelect} aria-expanded={selected} aria-controls={`stage-detail-${number}`}>
            {selected ? <ChevronUp /> : <ChevronDown />}
            {selected ? "Hide detail" : "View detail"}
          </Button>
        </div>
        <div className="pt-6">{children}</div>
        {selected && detail ? <div id={`stage-detail-${number}`}><DetailPanel detail={detail} tone={tone} /></div> : null}
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <TrainFront className="size-5" strokeWidth={1.8} />
          </div>
          <div className="leading-none">
            <p className="font-display text-sm font-extrabold text-foreground">Blockwise.AI</p>
            <p className="mt-1 text-[9px] font-bold uppercase text-muted-foreground">Railway Maintenance Intelligence</p>
          </div>
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex" aria-label="Product navigation">
          {navItems.map((item) => (
            <span
              key={item}
              className={cn(
                "rounded-md px-3 py-2 text-xs font-semibold",
                item === "System Workflow" ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
              aria-current={item === "System Workflow" ? "page" : undefined}
            >
              {item}
            </span>
          ))}
        </nav>
        <Badge variant="outline" className="ml-auto border-execution/30 bg-execution-soft text-execution xl:ml-0">
          <LockKeyhole className="mr-1.5 size-3" /> Read only
        </Badge>
      </div>
      <div className="overflow-x-auto border-t border-border px-4 xl:hidden">
        <nav className="mx-auto flex min-w-max items-center gap-1 py-2" aria-label="Product navigation mobile">
          {navItems.map((item) => (
            <span key={item} className={cn("rounded-md px-3 py-1.5 text-xs font-semibold", item === "System Workflow" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>{item}</span>
          ))}
        </nav>
      </div>
    </header>
  );
}

function StageOne(props: { selected: boolean; onSelect: () => void }) {
  return (
    <StageShell number={1} title="Data + Authentication" label="Trusted entry point" tone="data" icon={ShieldCheck} {...props}>
      <div className="grid gap-8 xl:grid-cols-[1fr_1.15fr_1.1fr] xl:items-center">
        <div>
          <ProcessBox icon={Route}>Frontend Request</ProcessBox><FlowArrow />
          <ProcessBox icon={Network}>FastAPI Backend</ProcessBox><FlowArrow />
          <ProcessBox icon={LockKeyhole}>User Authentication / RBAC</ProcessBox>
        </div>
        <div>
          <Decision tone="data">Admin?</Decision>
          <div className="grid grid-cols-2 gap-3">
            <div><p className="mb-2 text-center text-[10px] font-bold text-exception">NO</p><ProcessBox tone="exception" icon={X}>Reject Request</ProcessBox></div>
            <div><p className="mb-2 text-center text-[10px] font-bold text-execution">YES</p><ProcessBox tone="execution" icon={Check}>Admin Access</ProcessBox></div>
          </div>
        </div>
        <div>
          <ProcessBox icon={CircleDot}>Select Asset</ProcessBox><FlowArrow />
          <ProcessBox icon={Database}>Asset Condition Data</ProcessBox>
          <div className="mt-4"><TagList items={["Asset condition", "Sensor data", "Train traffic", "Asset age", "Previous failures", "Maintenance history", "Location", "Asset criticality"]} /></div>
        </div>
      </div>
      <p className="mt-6 border-l-2 border-data pl-4 text-sm leading-6 text-ink-soft">Unified operational and asset data becomes the input for AI-assisted maintenance planning.</p>
    </StageShell>
  );
}

function StageTwo(props: { selected: boolean; onSelect: () => void }) {
  const risks = [
    ["Low", "bg-execution-soft text-execution border-execution/30"],
    ["Medium", "bg-optimization-soft text-optimization border-optimization/30"],
    ["High", "bg-exception-soft text-exception border-exception/30"],
    ["Critical", "bg-destructive text-destructive-foreground border-destructive"],
  ];
  return (
    <StageShell number={2} title="ML Risk + Maintenance Need" label="Asset intelligence" tone="ai" icon={BrainCircuit} {...props}>
      <div className="grid gap-8 xl:grid-cols-[1fr_1.15fr_1fr] xl:items-center">
        <div>
          <ProcessBox tone="data" icon={Database}>Asset Condition Data</ProcessBox><FlowArrow />
          <ProcessBox tone="ai" icon={BrainCircuit}>Risk Assessment Model</ProcessBox><FlowArrow />
          <ProcessBox tone="ai" icon={Gauge}>Risk Class + Probability</ProcessBox>
        </div>
        <div>
          <p className="mb-3 text-center text-[10px] font-extrabold uppercase text-ai">ML-based asset risk prediction</p>
          <div className="grid grid-cols-2 gap-2">
            {risks.map(([risk, className]) => <div key={risk} className={cn("rounded-md border px-3 py-3 text-center text-xs font-extrabold uppercase", className)}>{risk}</div>)}
          </div>
          <p className="mt-3 text-center text-[10px] text-muted-foreground">Classes shown for workflow visualization — not railway statistics.</p>
          <div className="mt-4"><TagList tone="ai" items={["Condition", "Defect", "Sensor indicators", "Asset age", "Previous failures", "Criticality", "Maintenance history"]} /></div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            {["Risk", "Defect", "Criticality", "Maintenance history"].map((item) => <ProcessBox key={item} tone="ai">{item}</ProcessBox>)}
          </div>
          <FlowArrow label="Combined" />
          <ProcessBox tone="ai" icon={FileCheck2} className="min-h-20 text-sm">Create Maintenance Requirement</ProcessBox>
        </div>
      </div>
    </StageShell>
  );
}

function StageThree(props: { selected: boolean; onSelect: () => void }) {
  const planningInputs = ["Train Timetable", "Traffic Conditions", "Crew Availability", "Equipment Availability", "Material Availability", "Maintenance Duration", "Execution Mode", "Location"];
  const objectives = ["Find feasible maintenance window", "Minimize train disruption", "Respect safety constraints", "Respect crew availability", "Respect equipment/material availability", "Respect maintenance duration"];
  const alternatives = [["Alternative A", "Low train impact"], ["Alternative B", "Resource-aware"], ["Alternative C", "Different maintenance window"]];
  return (
    <StageShell number={3} title="Optimization + Alternatives" label="Constraint-based planning" tone="optimization" icon={Cpu} {...props}>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.15fr_1fr]">
        <div>
          <ProcessBox tone="ai" icon={FileCheck2}>Maintenance Requirement</ProcessBox>
          <div className="my-4 flex items-center gap-3"><div className="h-px flex-1 bg-border" /><span className="text-[10px] font-extrabold uppercase text-muted-foreground">Combined with</span><div className="h-px flex-1 bg-border" /></div>
          <div className="grid grid-cols-2 gap-2">{planningInputs.map((item) => <ProcessBox key={item} tone="data">{item}</ProcessBox>)}</div>
        </div>
        <div>
          <ProcessBox tone="optimization" icon={Cpu} className="min-h-16 text-sm">Planning Engine</ProcessBox><FlowArrow />
          <ProcessBox tone="optimization" icon={TrainFront}>Check Train–Maintenance Conflicts</ProcessBox>
          <Decision>Conflict?</Decision>
          <div className="grid grid-cols-2 gap-3">
            <div><p className="mb-2 text-center text-[10px] font-bold text-exception">YES</p><ProcessBox tone="optimization" icon={Cpu}>CP-SAT Optimization</ProcessBox></div>
            <div><p className="mb-2 text-center text-[10px] font-bold text-execution">NO</p><ProcessBox tone="execution" icon={BadgeCheck}>Continue to Validation</ProcessBox></div>
          </div>
          <div className="mt-4 rounded-md border border-optimization/35 bg-optimization-soft p-4">
            <p className="text-xs font-extrabold text-optimization">Constraint-Based Optimization</p>
            <ul className="mt-3 space-y-2">{objectives.map((item) => <li key={item} className="flex gap-2 text-xs text-ink-soft"><Check className="mt-0.5 size-3.5 shrink-0 text-optimization" />{item}</li>)}</ul>
          </div>
        </div>
        <div>
          <ProcessBox tone="optimization" icon={Activity}>Generate Ranked Alternatives</ProcessBox><FlowArrow />
          <div className="space-y-3">{alternatives.map(([name, description], index) => <div key={name} className="flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm"><span className="flex size-7 items-center justify-center rounded bg-optimization-soft text-xs font-extrabold text-optimization">{index + 1}</span><div><p className="text-xs font-extrabold uppercase text-foreground">{name}</p><p className="mt-1 text-xs text-muted-foreground">{description}</p></div></div>)}</div>
          <p className="mt-3 rounded bg-muted px-3 py-2 text-[10px] font-semibold text-muted-foreground">Visualization examples only — not actual optimized railway results.</p>
        </div>
      </div>
    </StageShell>
  );
}

function StageFour(props: { selected: boolean; onSelect: () => void }) {
  const twinItems = ["Train movement", "Maintenance block", "Track/corridor state", "Resource availability", "Train–maintenance interaction", "Safety/conflict checks"];
  const metrics = [["Train Delay", "—"], ["Maintenance Duration", "—"], ["Affected Trains", "—"], ["Resource Utilization", "—"], ["Safety Conflicts", "—"]];
  return (
    <StageShell number={4} title="Digital Twin + Human Approval" label="Validate before action" tone="simulation" icon={Blocks} {...props}>
      <div className="grid gap-8 xl:grid-cols-[1fr_1.25fr_1fr]">
        <div>
          <ProcessBox tone="execution" icon={UserCheck}>Admin Selects Plan</ProcessBox><FlowArrow />
          <ProcessBox tone="simulation" icon={Blocks}>Digital Twin Simulation</ProcessBox><FlowArrow />
          <ProcessBox tone="simulation" icon={TrainFront}>Simulate Train + Maintenance</ProcessBox>
          <div className="mt-4"><TagList tone="simulation" items={twinItems} /></div>
        </div>
        <div>
          <ProcessBox tone="simulation" icon={Gauge}>Predicted vs Simulated Results</ProcessBox>
          <p className="my-3 text-center text-[10px] font-extrabold uppercase text-simulation">Demo / simulation metrics</p>
          <div className="grid grid-cols-2 gap-2">{metrics.map(([name, value], index) => <div key={name} className={cn("rounded-md border border-simulation/25 bg-simulation-soft p-3", index === metrics.length - 1 && "col-span-2")}><p className="text-[10px] font-bold uppercase text-simulation">{name}</p><p className="mt-2 text-lg font-extrabold text-foreground">{value}</p></div>)}</div>
        </div>
        <div>
          <ProcessBox tone="execution" icon={UserCheck} className="min-h-16 text-sm">Human-in-the-Loop Approval</ProcessBox>
          <Decision tone="execution">Approved?</Decision>
          <div className="grid grid-cols-2 gap-3">
            <div><p className="mb-2 text-center text-[10px] font-bold text-execution">YES</p><ProcessBox tone="execution" icon={FileCheck2}>Create Work Order</ProcessBox></div>
            <div><p className="mb-2 text-center text-[10px] font-bold text-exception">NO</p><ProcessBox tone="exception" icon={RefreshCw}>Reject / Revise Plan</ProcessBox></div>
          </div>
          <div className="mt-4 rounded-md border border-exception/30 bg-exception-soft p-4 text-exception">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase"><ArrowLeft className="size-4" /> Feedback to CP-SAT</div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold"><span>Revise</span><ArrowRight className="size-3"/><span>Re-optimize</span><ArrowRight className="size-3"/><span>Re-simulate</span><ArrowRight className="size-3"/><span>Review</span></div>
          </div>
        </div>
      </div>
    </StageShell>
  );
}

function NotificationCard() {
  const rows = [
    ["Task", "Track maintenance"], ["Location", "SEC-AWR-BKI"], ["Date", "Scheduled maintenance date"], ["Time", "02:00–04:00"], ["Crew", "Track Team A"], ["Required skill", "Track maintenance"], ["Equipment", "Required maintenance equipment"], ["Material", "Required material"], ["Work order ID", "WO-XXXX"], ["Safety instructions", "Complete before execution"],
  ];
  return (
    <div className="overflow-hidden rounded-md border border-execution/30 bg-card shadow-sm">
      <div className="flex items-center justify-between bg-execution-soft px-4 py-3">
        <div className="flex items-center gap-2"><Radio className="size-4 text-execution"/><p className="text-xs font-extrabold uppercase text-execution">Crew Notification</p></div>
        <Badge variant="outline" className="border-execution/30 text-execution">Visual only</Badge>
      </div>
      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {rows.map(([label, value]) => <div key={label} className="border-b border-border p-3 last:border-b-0"><p className="text-[9px] font-extrabold uppercase text-muted-foreground">{label}</p><p className="mt-1 text-xs font-semibold text-foreground">{value}</p></div>)}
      </div>
    </div>
  );
}

function StageFive(props: { selected: boolean; onSelect: () => void }) {
  const modes = [["Departmental", "Railway crew + railway resources"], ["Works Contract", "Contractor + contract scope + validity"], ["AMC / CAMC", "SLA + response time + contract period"], ["OEM / Authorized", "Specialized service provider"], ["Emergency", "Urgent maintenance pathway"]];
  const missing = ["Crew unavailable", "Equipment unavailable", "Material unavailable", "Skill mismatch", "Contract unavailable", "Contract validity issue"];
  return (
    <StageShell number={5} title="Work Order + Crew Execution" label="Controlled execution" tone="execution" icon={HardHat} {...props}>
      <ProcessBox tone="execution" icon={FileCheck2} className="mx-auto max-w-sm min-h-16 text-sm">Create Work Order</ProcessBox><FlowArrow />
      <p className="mb-3 text-center text-[10px] font-extrabold uppercase text-execution">Choose execution mode</p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{modes.map(([name, description], index) => <div key={name} className="rounded-md border border-execution/25 bg-execution-soft p-4"><div className="flex items-center gap-2"><span className="flex size-6 items-center justify-center rounded bg-execution text-[10px] font-extrabold text-primary-foreground">{index + 1}</span><p className="text-xs font-extrabold uppercase text-execution">{name}</p></div><p className="mt-3 text-xs leading-5 text-ink-soft">{description}</p></div>)}</div>
      <FlowArrow />
      <ProcessBox tone="execution" icon={PackageCheck} className="mx-auto max-w-sm min-h-16 text-sm">Execution Readiness Check</ProcessBox>
      <Decision tone="execution">Resources Ready?</Decision>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-md border border-exception/30 bg-exception-soft p-5">
          <div className="flex items-center gap-2 text-exception"><AlertTriangle className="size-5"/><p className="text-xs font-extrabold uppercase">No — Missing Requirements</p></div>
          <div className="mt-4 grid grid-cols-2 gap-2">{missing.map((item) => <div key={item} className="flex items-center gap-2 rounded border border-exception/20 bg-card px-3 py-2 text-xs text-ink-soft"><X className="size-3.5 shrink-0 text-exception"/>{item}</div>)}</div>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-exception"><ArrowLeft className="size-4"/>Return to Planning / Recommendation</div>
        </div>
        <div className="space-y-2">
          <p className="mb-3 text-center text-[10px] font-extrabold uppercase text-execution">Yes — ready to assign</p>
          <ProcessBox tone="execution" icon={UserCheck}>Admin Selects Qualified Crew</ProcessBox><FlowArrow />
          <ProcessBox tone="execution" icon={Users}>Assign Work Order</ProcessBox><FlowArrow />
          <ProcessBox tone="execution" icon={Radio}>Generate Targeted Notification</ProcessBox>
        </div>
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
        <NotificationCard />
        <div>
          {["Crew Access", "Crew Notification Page", "View Task + Location + Time + Instructions", "Complete Safety Checklist", "Execute Maintenance"].map((step, index, array) => <div key={step}><ProcessBox tone="execution" icon={index === array.length - 1 ? Wrench : undefined}>{step}</ProcessBox>{index < array.length - 1 ? <FlowArrow /> : null}</div>)}
          <p className="mt-3 text-center text-[10px] font-semibold text-muted-foreground">Visual representation only — no notification is sent from this page.</p>
        </div>
      </div>
    </StageShell>
  );
}

function StageSix(props: { selected: boolean; onSelect: () => void }) {
  const steps = ["Execute Maintenance", "Record Actual Duration + Outcome", "Compare Predicted vs Actual", "Store Simulation / Execution Feedback", "Improve Future Recommendations"];
  return (
    <StageShell number={6} title="Actual Result → Learning Loop" label="Evidence for future plans" tone="execution" icon={RefreshCw} {...props}>
      <div className="grid gap-8 xl:grid-cols-[0.9fr_0.8fr_1.1fr] xl:items-center">
        <div>{steps.map((step, index) => <div key={step}><ProcessBox tone="execution" icon={index === 0 ? Wrench : index === steps.length - 1 ? BrainCircuit : undefined}>{step}</ProcessBox>{index < steps.length - 1 ? <FlowArrow /> : null}</div>)}</div>
        <div className="rounded-md border border-simulation/30 bg-simulation-soft p-5">
          <p className="text-[10px] font-extrabold uppercase text-simulation">Demo example</p>
          <div className="mt-4 space-y-3">{[["Predicted Duration", "88 min"], ["Actual Duration", "94 min"], ["Difference", "+6 min"]].map(([label, value]) => <div key={label} className="flex items-end justify-between border-b border-simulation/20 pb-3 last:border-0 last:pb-0"><span className="text-xs text-ink-soft">{label}</span><span className="text-lg font-extrabold text-foreground">{value}</span></div>)}</div>
        </div>
        <div className="rounded-md border border-execution/30 bg-execution-soft p-6">
          <div className="flex items-center gap-2 text-execution"><RefreshCw className="size-5"/><p className="text-xs font-extrabold uppercase">Continuous Learning / Feedback Loop</p></div>
          <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {[["Historical Execution", History], ["Feedback", Activity], ["Recommendation Improvement", BrainCircuit]].map(([label, Icon], index) => {
              const ItemIcon = Icon as LucideIcon;
              return <div className="contents" key={label as string}><div className="rounded-md border border-execution/20 bg-card p-4 text-center"><ItemIcon className="mx-auto size-5 text-execution"/><p className="mt-2 text-[10px] font-bold text-ink-soft">{label as string}</p></div>{index < 2 ? <ArrowRight className="mx-auto hidden size-4 text-execution sm:block"/> : null}</div>;
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase text-execution"><RefreshCw className="size-4"/>Future Planning</div>
          <p className="mt-4 text-xs leading-5 text-ink-soft">Feedback informs future recommendations. This view does not claim or trigger automatic model retraining.</p>
        </div>
      </div>
    </StageShell>
  );
}

const techLayers = [
  ["Frontend", "React", Route], ["Backend", "FastAPI", Network], ["Machine Learning", "Asset Risk Prediction", BrainCircuit], ["Optimization", "OR-Tools / CP-SAT", Cpu], ["Simulation", "Digital Twin / Discrete-Event Simulation", Blocks], ["3D Visualization", "React Three Fiber · Three.js · @react-three/drei", Blocks], ["Security", "Authentication · RBAC · Audit Trail", ShieldCheck], ["Data", "Asset · Sensor · Train · Maintenance", Database],
] as const;

function FooterSections() {
  const exceptions = [["Conflict Detected", "Re-run optimization", TrainFront], ["Plan Rejected", "Revise → Re-simulate", RefreshCw], ["Resource Unavailable", "Show missing requirements", PackageCheck], ["Safety Conflict", "Stop progression until resolved", TriangleAlert]] as const;
  const legend: Array<[string, string, Tone]> = [["Blue", "Data / Input", "data"], ["Purple", "AI / ML", "ai"], ["Orange", "Optimization", "optimization"], ["Teal", "Simulation", "simulation"], ["Green", "Approval / Execution", "execution"], ["Red", "Conflict / Revision", "exception"]];
  return (
    <>
      <section className="mt-12" aria-labelledby="exceptions-title">
        <div className="mb-5 flex items-center gap-3"><TriangleAlert className="size-5 text-exception"/><h2 id="exceptions-title" className="font-display text-lg font-extrabold uppercase text-foreground">Exception & Revision Paths</h2></div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{exceptions.map(([title, text, Icon]) => <div key={title} className="rounded-md border border-exception/30 bg-exception-soft p-5"><Icon className="size-5 text-exception"/><p className="mt-4 text-xs font-extrabold uppercase text-exception">{title}</p><p className="mt-2 text-sm font-semibold text-ink-soft">→ {text}</p></div>)}</div>
      </section>
      <section className="mt-12 border-y border-border py-10" aria-labelledby="technology-title">
        <div className="mb-5 flex items-center gap-3"><Network className="size-5 text-primary"/><h2 id="technology-title" className="font-display text-lg font-extrabold uppercase text-foreground">Technology Layer</h2></div>
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{techLayers.map(([label, value, Icon]) => <div key={label} className="bg-card p-5"><Icon className="size-5 text-primary"/><p className="mt-4 text-[10px] font-extrabold uppercase text-muted-foreground">{label}</p><p className="mt-2 text-sm font-bold leading-5 text-foreground">{value}</p></div>)}</div>
      </section>
      <section className="mt-10" aria-labelledby="legend-title">
        <h2 id="legend-title" className="text-xs font-extrabold uppercase text-foreground">Visual Legend</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">{legend.map(([color, meaning, tone]) => <div key={color} className="flex items-center gap-2"><span className={cn("size-2.5 rounded-sm", toneClasses[tone].line)} /><span className="text-[10px] font-extrabold uppercase text-muted-foreground">{color}</span><span className="text-xs text-ink-soft">{meaning}</span></div>)}</div>
      </section>
      <section className="mt-12 overflow-hidden rounded-lg bg-primary px-6 py-12 text-center text-primary-foreground sm:px-10">
        <ShieldCheck className="mx-auto size-8 opacity-90" strokeWidth={1.6}/>
        <h2 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">AI Decision Support — Human Controlled Execution</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 opacity-80">The system recommends, validates and coordinates maintenance plans.<br className="hidden sm:block"/> Authorized railway personnel review, approve and execute the work.</p>
        <p className="mt-7 text-xs font-extrabold uppercase">Predict → Plan → Simulate → Approve → Execute → Learn</p>
      </section>
    </>
  );
}

export function SystemWorkflowPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const toggleStage = (stage: number) => setSelectedStage((current) => current === stage ? null : stage);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">System Architecture</Badge>
              <Badge variant="outline" className="border-execution/30 bg-execution-soft text-execution"><LockKeyhole className="mr-1.5 size-3"/>Read-only system view</Badge>
            </div>
            <h1 className="mt-6 max-w-5xl font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">AI Block Planner — Complete System Workflow</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-soft sm:text-base">From asset intelligence and risk prediction to optimized maintenance execution and continuous learning.</p>
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="flex min-w-max items-center rounded-md border border-border bg-canvas px-3 py-2.5">{["Predict", "Aggregate", "Prioritize", "Optimize", "Validate", "Simulate", "Approve", "Execute", "Learn"].map((step, index, array) => <div key={step} className="flex items-center"><span className="px-2 text-[10px] font-extrabold uppercase text-ink-soft sm:px-3">{step}</span>{index < array.length - 1 ? <ArrowRight className="size-3.5 text-muted-foreground"/> : null}</div>)}</div>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
          <section aria-label="Technology summary">
            <div className="relative grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {technologySummary.map(({ title, description, icon: Icon, tone }, index) => { const colors = toneClasses[tone]; return <div key={title} className={cn("relative rounded-md border bg-card p-5 shadow-sm", colors.border)}><div className={cn("flex size-9 items-center justify-center rounded-md", colors.bg, colors.text)}><Icon className="size-5" strokeWidth={1.8}/></div><p className={cn("mt-4 text-[10px] font-extrabold uppercase", colors.text)}>{title}</p><p className="mt-2 text-sm font-semibold leading-5 text-foreground">{description}</p>{index < technologySummary.length - 1 ? <div className="absolute -right-2 top-1/2 z-10 hidden size-4 items-center justify-center rounded-full border border-border bg-card xl:flex"><ArrowRight className="size-2.5 text-muted-foreground"/></div> : null}</div>; })}
            </div>
          </section>
          <section className="mt-14" aria-labelledby="workflow-title">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div><p className="text-[10px] font-extrabold uppercase text-data">End-to-end architecture</p><h2 id="workflow-title" className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">Main System Workflow</h2></div>
              <p className="max-w-lg text-xs leading-5 text-muted-foreground">Select any stage to inspect its purpose, inputs, process and output. Every control on this page is read-only.</p>
            </div>
            <div className="space-y-4">
              <StageOne selected={selectedStage === 1} onSelect={() => toggleStage(1)} /><FlowArrow label="Authorized asset context"/>
              <StageTwo selected={selectedStage === 2} onSelect={() => toggleStage(2)} /><FlowArrow label="Maintenance requirement"/>
              <StageThree selected={selectedStage === 3} onSelect={() => toggleStage(3)} /><FlowArrow label="Selected alternative"/>
              <StageFour selected={selectedStage === 4} onSelect={() => toggleStage(4)} /><FlowArrow label="Approved plan"/>
              <StageFive selected={selectedStage === 5} onSelect={() => toggleStage(5)} /><FlowArrow label="Execution evidence"/>
              <StageSix selected={selectedStage === 6} onSelect={() => toggleStage(6)} />
            </div>
          </section>
          <FooterSections />
          <p className="py-8 text-center text-[10px] font-semibold uppercase text-muted-foreground">Blockwise.AI · Read-only system workflow · No operational actions are performed</p>
        </div>
      </main>
    </div>
  );
}