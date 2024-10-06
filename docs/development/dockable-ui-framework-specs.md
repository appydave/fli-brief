# Dockable UI Framework Specifications

This document outlines the specifications for the **reusable dockable UI framework** for FlyBrief. It covers only the generic structure and behavior of the dockable panels, including collapsibility, locking mechanisms, and responsiveness.

---

## 1. Collapsibility and Locking Mechanism

### 1.1 Collapsibility
- **Goal**: Each panel (Header, Left-Hand Panel, Right-Hand Panel, Footer) must be collapsible to maximize workspace.
- **Interaction**:
  - When the user **hovers near the edge** of the screen, the corresponding panel should **slide out** smoothly.
  - **Moving the mouse away** from the panel should automatically collapse it, unless the panel is locked.

### 1.2 Lock Feature
- **Lock Icon**: Each panel should have a **lock icon** (visualized as a lock symbol) at the top or bottom corner.
  - When the panel is unlocked, the user can hover over the edge to expand and collapse it.
  - When the panel is locked, the panel remains open even after the user moves the mouse away.
  - Clicking the lock icon again will unlock the panel, allowing it to collapse when not in use.

### 1.3 Default State
- By default, all panels should load in the **collapsed** state unless set otherwise by the application configuration.

---

## 2. Panel Hovering and Mouse Interactions

### 2.1 Hovering
- **Hover Interaction**: Panels should appear when the user **moves the mouse near the screen edge**.
- **Auto-Collapse**: If the user moves the mouse away without locking the panel, it should smoothly collapse.

### 2.2 Click to Activate
- For any **non-collapsible elements inside the panels** (e.g., interactive UI components that will be added later), ensure that **clicking on elements** prevents the panel from collapsing until the interaction is complete.

---

## 3. Hotkey Integration

### 3.1 Hotkey for Panel Locking
- **Command + ~ (tilde)**: This hotkey toggles the lock/unlock state for the active panel.
  - If the panel is unlocked, pressing the hotkey should **lock** it.
  - If the panel is already locked, pressing the hotkey should **unlock** it.

### 3.2 Focused Panel Behavior
- The hotkey should only affect the panel that is currently active or has user focus.
  - If no panel is in focus, the hotkey should have no effect.

---

## 4. Responsiveness and Scaling

### 4.1 Device Responsiveness
- The dockable UI should function across all device sizes, from large desktops to smaller screens.
- **Mobile/Tablet Behavior**:
  - On smaller screens (below 768px width), panels should automatically collapse into an off-screen **drawer** that can be opened by swiping or tapping.
  - Ensure **touch gestures** (swiping/tapping) for panel interaction on mobile/tablet devices.

### 4.2 Fluid Panel Resizing
- Panels should resize fluidly to match different screen sizes. Ensure panels use **flexible layouts** (e.g., `flex` or percentage-based widths).

---

## 5. Generic Structure (Placeholder Panels)

- **Header**: Placeholder for the header panel.
- **Left-Hand Panel**: Placeholder for the left-hand navigation panel.
- **Right-Hand Panel**: Placeholder for the right-hand attributes panel.
- **Footer**: Placeholder for the footer panel.
- **Central Grid**: Main working area that remains visible as panels collapse or expand.

---

## 6. Technical Implementation Notes

### 6.1 Panel Interaction and State
- Ensure panel states (locked/unlocked, collapsed/expanded) are managed via state management (e.g., React state or similar approach) to maintain consistent behavior across all panels.

### 6.2 CSS and Transitions
- Panels should use **CSS transitions** for smooth sliding and collapsing animations, with appropriate easing functions for a natural feel.

### 6.3 Cross-Browser and Device Testing
- Test interactions and responsiveness across multiple browsers and devices (mobile, tablet, desktop) to ensure consistent performance.

---

## 7. Testing and Debugging

### 7.1 Performance Testing
- Ensure smooth panel interaction and responsiveness, particularly on lower-end devices or when many interactive components are loaded.

### 7.2 Responsiveness Testing
- Test across multiple screen sizes to ensure panels adapt fluidly and mobile-specific interactions (swiping/tapping) work correctly.
