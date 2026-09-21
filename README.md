# AI Workflow Visualizer

BUILD A NEW READ-ONLY PAGE:
“System Workflow”

PROJECT:
Blockwise.AI — AI-Powered Automatic Block Planning for Railway Maintenance

IMPORTANT:
This page is ONLY a visual explanation of the complete system/backend workflow.

DO NOT:
- Change existing backend APIs
- Change database schemas
- Change ML models
- Change authentication logic
- Change existing Planning, Digital Twin, Asset Intelligence, Crew or Work Order functionality
- Trigger real work orders
- Send real notifications
- Execute optimization
- Modify existing business logic

The page must be completely READ-ONLY.

==================================================
1. PAGE PURPOSE
==================================================

Create a professional “System Workflow” page that allows a judge, administrator or developer to understand:

WHERE DATA ENTERS
↓
HOW AI/ML ANALYZES IT
↓
HOW MAINTENANCE IS PLANNED
↓
HOW OPTIMIZATION WORKS
↓
HOW DIGITAL TWIN VALIDATES THE PLAN
↓
HOW HUMAN APPROVAL HAPPENS
↓
HOW WORK ORDERS ARE CREATED
↓
HOW CREW IS ASSIGNED
↓
HOW MAINTENANCE IS EXECUTED
↓
HOW ACTUAL RESULTS ARE FED BACK

The page should visually explain the entire backend workflow in approximately 30–60 seconds.

==================================================
2. NAVIGATION
==================================================

Add a new navigation item:

System Workflow

Place it near:

Planning
Digital Twin

Suggested navigation:

Corridor
Asset Intelligence
Planning
System Workflow
Digital Twin
Work Orders
Crew
Analytics

Use the same navigation/header style as the existing application.

==================================================
3. PAGE HEADER
==================================================

Title:

AI Block Planner — Complete System Workflow

Subtitle:

From asset intelligence and risk prediction to optimized maintenance execution and continuous learning.

Add a small status badge:

READ-ONLY SYSTEM VIEW

Below the subtitle show this process:

Predict → Aggregate → Prioritize → Optimize → Validate → Simulate → Approve → Execute → Learn

==================================================
4. TOP TECHNOLOGY SUMMARY
==================================================

Create five compact cards.

CARD 1:

DATA INPUT

Asset + Train + Sensor + Maintenance Data

Icon:
Database

CARD 2:

AI / ML

Risk Prediction + Asset Intelligence

Icon:
Brain / AI

CARD 3:

OPTIMIZATION

CP-SAT + Constraint-Based Planning

Icon:
Optimization / CPU

CARD 4:

SIMULATION

Digital Twin + What-if Analysis

Icon:
3D / Simulation

CARD 5:

EXECUTION

Work Order + Crew + Feedback

Icon:
Workers / Wrench

Make the cards visually connected.

==================================================
5. MAIN WORKFLOW
==================================================

Create a large professional workflow.

Use six major stages.

Each stage should be a large horizontal card containing smaller process cards.

The flow should be:

STAGE 1
DATA + AUTHENTICATION

↓

STAGE 2
ML RISK + MAINTENANCE NEED

↓

STAGE 3
OPTIMIZATION + ALTERNATIVES

↓

STAGE 4
DIGITAL TWIN + HUMAN APPROVAL

↓

STAGE 5
WORK ORDER + CREW EXECUTION

↓

STAGE 6
ACTUAL RESULT → LEARNING LOOP

Use clear arrows between stages.

==================================================
6. STAGE 1 — DATA + AUTHENTICATION
==================================================

Title:

1. Data + Authentication

Create these process blocks:

Frontend Request
↓
FastAPI Backend
↓
User Authentication / RBAC

Decision:

Admin?

NO:
→ Reject Request

YES:
→ Admin Access

Then:

Select Asset
↓
Asset Condition Data

Show small input tags:

• Asset condition
• Sensor data
• Train traffic
• Asset age
• Previous failures
• Maintenance history
• Location
• Asset criticality

Add a small description:

“Unified operational and asset data becomes the input for AI-assisted maintenance planning.”

==================================================
7. STAGE 2 — ML RISK + MAINTENANCE NEED
==================================================

Title:

2. ML Risk + Maintenance Need

Flow:

Asset Condition Data
↓
Risk Assessment Model
↓
Risk Class + Probability
↓
Create Maintenance Requirement

Display four risk classes:

LOW
MEDIUM
HIGH
CRITICAL

Do NOT imply that the percentages shown are real railway statistics.

Show the model inputs:

• Condition
• Defect
• Sensor indicators
• Asset age
• Previous failures
• Criticality
• Maintenance history

Add a small label:

“ML-based asset risk prediction”

Then:

Maintenance Requirement

Inputs:

Risk
+
Defect
+
Criticality
+
Maintenance history

==================================================
8. STAGE 3 — OPTIMIZATION + ALTERNATIVES
==================================================

Title:

3. Optimization + Alternatives

Start with:

Maintenance Requirement

Combine it with:

Train Timetable
Traffic Conditions
Crew Availability
Equipment Availability
Material Availability
Maintenance Duration
Execution Mode
Location

Then:

Planning Engine

↓

Check Train–Maintenance Conflicts

If conflict exists:

→ CP-SAT Optimization

If no conflict:

→ Continue to validation

CP-SAT Optimization should be visually represented as:

Constraint-Based Optimization

Objective examples:

• Find feasible maintenance window
• Minimize train disruption
• Respect safety constraints
• Respect crew availability
• Respect equipment/material availability
• Respect maintenance duration

Then:

Generate Ranked Alternatives

Show three example cards:

ALTERNATIVE A
Low train impact

ALTERNATIVE B
Resource-aware

ALTERNATIVE C
Different maintenance window

IMPORTANT:

These are examples for visualization only.

Do not present them as actual optimized railway results.

==================================================
9. STAGE 4 — DIGITAL TWIN + HUMAN APPROVAL
==================================================

Title:

4. Digital Twin + Human Approval

Flow:

Admin Selects Plan
↓
Digital Twin Simulation
↓
Simulate Train + Maintenance

Inside the Digital Twin card show:

• Train movement
• Maintenance block
• Track/corridor state
• Resource availability
• Train–maintenance interaction
• Safety/conflict checks

Then:

Predicted vs Simulated Results

Display example metric cards:

Train Delay
Maintenance Duration
Affected Trains
Resource Utilization
Safety Conflicts

Clearly label these as:

DEMO / SIMULATION METRICS

Then:

Human-in-the-Loop Approval

Decision:

APPROVED?

YES
↓
Create Work Order

NO
↓
Reject / Revise Plan
↓
Return to CP-SAT Optimization
↓
Re-simulate
↓
Human Approval

Create a clearly visible feedback arrow from:

Reject / Revise Plan

back to:

CP-SAT Optimization

==================================================
10. STAGE 5 — WORK ORDER + CREW EXECUTION
==================================================

Title:

5. Work Order + Crew Execution

After approval:

Create Work Order

↓

Choose Execution Mode

Create five cards:

1. DEPARTMENTAL

Railway crew + railway resources

2. WORKS CONTRACT

Contractor + contract scope + validity

3. AMC / CAMC

SLA + response time + contract period

4. OEM / AUTHORIZED

Specialized service provider

5. EMERGENCY

Urgent maintenance pathway

All five connect to:

Execution Readiness Check

Then decision:

Resources Ready?

==================================================
11. RESOURCE READINESS
==================================================

If NO:

Show:

Missing Requirements

Examples:

• Crew unavailable
• Equipment unavailable
• Material unavailable
• Skill mismatch
• Contract unavailable
• Contract validity issue

Then:

Return to Planning / Recommendation

If YES:

↓

Admin Selects Qualified Crew

↓

Assign Work Order

↓

Generate Targeted Notification

==================================================
12. CREW NOTIFICATION
==================================================

Create a visual “Crew Notification” card.

Show:

TASK
Track maintenance

LOCATION
SEC-AWR-BKI

DATE
Scheduled maintenance date

TIME
02:00–04:00

CREW
Track Team A

REQUIRED SKILL
Track maintenance

EQUIPMENT
Required maintenance equipment

MATERIAL
Required material

WORK ORDER ID
WO-XXXX

SAFETY INSTRUCTIONS
Complete before execution

Then:

Crew Access
↓
Crew Notification Page
↓
View Task + Location + Time + Instructions
↓
Complete Safety Checklist
↓
Execute Maintenance

IMPORTANT:

This is only a visual representation on this page.

Do not actually send notifications from this page.

==================================================
13. STAGE 6 — ACTUAL RESULT + LEARNING LOOP
==================================================

Title:

6. Actual Result → Learning Loop

Flow:

Execute Maintenance
↓
Record Actual Duration + Outcome
↓
Compare Predicted vs Actual
↓
Store Simulation / Execution Feedback
↓
Improve Future Recommendations

Show example:

Predicted Duration:
88 min

Actual Duration:
94 min

Difference:
+6 min

Clearly label:

DEMO EXAMPLE

Then create a large loop arrow:

Historical Execution
↓
Feedback
↓
Model / Recommendation Improvement
↓
Future Planning

Label:

CONTINUOUS LEARNING / FEEDBACK LOOP

Do not claim that the model automatically retrains itself unless that functionality already exists in the backend.

==================================================
14. EXCEPTION PATHS
==================================================

Create a separate section:

EXCEPTION & REVISION PATHS

Show four cards:

CONFLICT DETECTED
→ Re-run optimization

PLAN REJECTED
→ Revise → Re-simulate

RESOURCE UNAVAILABLE
→ Show missing requirements

SAFETY CONFLICT
→ Stop progression until resolved

Use red/orange only for these exception paths.

==================================================
15. TECHNOLOGY STACK
==================================================

At the bottom create:

TECHNOLOGY LAYER

Show:

FRONTEND
React

BACKEND
FastAPI

MACHINE LEARNING
Asset Risk Prediction

OPTIMIZATION
OR-Tools / CP-SAT

SIMULATION
Digital Twin / Discrete-Event Simulation

3D VISUALIZATION
React Three Fiber
Three.js
@react-three/drei

SECURITY
Authentication
RBAC
Audit Trail

DATA
Asset
Sensor
Train
Maintenance

Do not add technologies that are not already part of the project unless they are explicitly marked:

“Planned / Future”

==================================================
16. VISUAL LEGEND
==================================================

Add a small legend:

BLUE
Data / Input

PURPLE
AI / ML

ORANGE
Optimization

TEAL
Simulation

GREEN
Approval / Execution

RED
Conflict / Revision

==================================================
17. FINAL MESSAGE
==================================================

At the bottom create a strong but simple statement:

AI Decision Support — Human Controlled Execution

Under it:

“The system recommends, validates and coordinates maintenance plans.
Authorized railway personnel review, approve and execute the work.”

Then:

Predict → Plan → Simulate → Approve → Execute → Learn

==================================================
18. DESIGN REQUIREMENTS
==================================================

Use a sophisticated enterprise dashboard style.

Background:
White or very light grey.

Primary:
Navy / dark blue.

Use subtle colors for different stages.

Cards:
Rounded corners
Thin borders
Soft shadows

Typography:
Modern
Professional
Highly readable

Avoid:
Huge paragraphs
Excessive decoration
Cartoon graphics
Unnecessary gradients
Overloaded screens

Use:
Simple line icons
Clear arrows
Decision diamonds
Process cards
Status badges
Compact labels

The workflow should look like a real railway AI system architecture, not a generic school flowchart.

==================================================
19. RESPONSIVE DESIGN
==================================================

Desktop:

Use a wide workflow layout.

Where possible, arrange the six stages horizontally or in a clear zig-zag layout.

Mobile:

Automatically convert to a vertical timeline.

Every arrow must remain understandable.

==================================================
20. INTERACTION
==================================================

This page is READ-ONLY.

Allowed:

- Hover effects
- Expand/collapse details
- Highlight connected stages
- Tooltips
- Smooth scrolling
- Stage highlighting

Not allowed:

- Triggering optimization
- Creating work orders
- Sending crew notifications
- Changing backend data
- Changing plans
- Running ML predictions

If a user clicks a stage, show a small read-only detail panel explaining:

PURPOSE
INPUTS
PROCESS
OUTPUT

==================================================
21. FINAL PAGE STRUCTURE
==================================================

The final page should visually follow:

HEADER
↓
5 TECHNOLOGY SUMMARY CARDS
↓
MAIN SYSTEM WORKFLOW
↓
6 MAJOR STAGES
↓
EXCEPTION / REVISION PATHS
↓
TECHNOLOGY STACK
↓
LEGEND
↓
FINAL “HUMAN CONTROLLED EXECUTION” MESSAGE

Make the entire page feel like a technical architecture view of Blockwise.AI.

Do not simplify away the actual backend workflow.

The objective is:

“Anyone looking at this page should understand exactly how Blockwise.AI converts railway asset/maintenance data into an optimized, simulated, approved and executable maintenance plan.”

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://blockwise-workflow-vision.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/91ca2d8f-739d-4570-8dbe-9635f93e652b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
