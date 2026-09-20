# System Workflow Page

## Goal
Build a polished, completely read-only technical architecture view for Blockwise.AI that explains the full railway maintenance planning lifecycle in 30–60 seconds.

## Page structure
- Create a dedicated `/system-workflow` page and make the blank home page lead to it, since this project currently has no existing product screens.
- Add a compact Blockwise.AI application header with the requested navigation order and “System Workflow” visibly active. Other product labels remain visual context only because their pages do not exist in this project.
- Add the requested title, subtitle, read-only badge, and nine-step process strip.
- Add five connected technology summary cards.
- Build six numbered workflow stages as a wide desktop zig-zag and a clear vertical mobile timeline, with arrows, decision points, feedback paths, tags, example alternatives, simulation metrics, execution modes, readiness checks, crew notification, and learning loop.
- Add exception paths, technology layer, visual legend, and the human-controlled execution statement.

## Interaction
- Stage cards will be selectable and reveal a compact read-only panel with Purpose, Inputs, Process, and Output.
- Include restrained hover, focus, and stage-highlighting behavior only.
- No request will call APIs, run models, optimize plans, create work orders, send notifications, or mutate data.

## Visual direction
- Enterprise railway operations aesthetic: light neutral canvas, navy structure, and restrained semantic accents for data, AI, optimization, simulation, execution, and exceptions.
- Use simple line icons, thin borders, soft shadows, compact labels, decision diamonds, and explicit directional connectors.
- Clearly mark alternatives, metrics, durations, IDs, and notification content as examples or simulations where required.
- Use the existing UI primitives and Lucide icon library, with all colors and shared visual rules defined as semantic design tokens.

## Technical details
- Implement focused reusable workflow components and data-driven stage content.
- Add unique route metadata including title, description, Open Graph text, `og:type`, and Twitter card.
- Update the root metadata and font loading so no template branding remains.
- Verify build health and inspect the rendered page at desktop and mobile widths, including interactions and absence of overlap.
