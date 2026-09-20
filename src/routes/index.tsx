import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/system-workflow" });
  },
  head: () => ({
    meta: [
      { title: "Blockwise.AI — Railway Maintenance Intelligence" },
      { name: "description", content: "Blockwise.AI visualizes the complete AI-assisted railway maintenance planning workflow." },
      { property: "og:title", content: "Blockwise.AI — Railway Maintenance Intelligence" },
      { property: "og:description", content: "Explore the complete workflow from asset data to human-controlled maintenance execution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return null;
}
