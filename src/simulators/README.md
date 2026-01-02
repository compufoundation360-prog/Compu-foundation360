# Simulators Directory

This folder contains all the interactive simulators for the application.

## Architecture Guidelines (Hybrid Approach)

To keep the application fast and manageable, we follow these rules:

1.  **Isolation:** Each simulator gets its own folder (e.g., `src/simulators/QuantumCircuit/`).
2.  **Lazy Loading:** Simulators are not bundled with the main initial download. They are loaded "on demand" when the user visits the specific topic.
3.  **Standard Props:** All simulators should accept a standard set of props (optional) for consistency.

## How to Add a New Simulator

1.  Create a folder: `src/simulators/MyNewSimulator/`
2.  Create your component: `src/simulators/MyNewSimulator/index.tsx`
3.  Import it in your Module page using `SimulatorWrapper` (see below).

## Usage Example (in a Module Page)

Instead of a direct import:
```tsx
// DON'T DO THIS (Slows down initial load)
// import QuantumSim from "@/simulators/QuantumSim";
```

Do this:
```tsx
import { lazy } from "react";
import SimulatorWrapper from "@/simulators/SimulatorWrapper";

// Lazy load the simulator code
const QuantumSim = lazy(() => import("@/simulators/QuantumSim"));

// Use inside your component
<SimulatorWrapper>
  <QuantumSim />
</SimulatorWrapper>
```

This ensures the user only downloads the heavy simulator code when they actually get to that part of the lesson.
