import { createFileRoute } from "@tanstack/react-router";

import { SystemWorkflowPage } from "@/components/system-workflow-page";

export const Route = createFileRoute("/system-workflow")({
  head: () => ({
    meta: [
      { title: "System Workflow — Blockwise.AI" },
      { name: "description", content: "Explore the read-only Blockwise.AI workflow from railway asset intelligence and risk prediction to planning, simulation, approval, execution and feedback." },
      { property: "og:title", content: "System Workflow — Blockwise.AI" },
      { property: "og:description", content: "A visual architecture of AI-assisted railway maintenance planning, validation and human-controlled execution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SystemWorkflowPage,
});