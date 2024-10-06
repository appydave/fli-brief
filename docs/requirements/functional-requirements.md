# Functional Requirements

### Header Panel
The header provides project-level controls:
- **Project Name**: Display the name of the active video project.
- **Project Selection Dropdown**: A dropdown to switch between different video projects.
- **Internal Search Box**: Allows searching within the current project by visual concept, transcript sentence, or asset name.
- **External Search**: A button for switching between video projects, separate from the internal search.

### Left-Hand Panel (Navigation)
The left-hand panel serves as the hierarchical navigation system:
- **Transcript Navigation**: The panel is broken into **Intro**, **Content**, and **Outro** sections. Each section lists related sentences and visual concepts in a collapsible format.
- **Tags/Labels**: Special sections, such as **Calls to Action** (CTAs), can be visually tagged within the hierarchy.
- **Search Bar**: A small search bar for quickly navigating within the transcript.
- **Project Settings**: A link or button at the bottom for global settings, including debug tools.

### Central Grid (Workspace)
The central grid is the main workspace where users view and interact with visual concepts:
- **Rows Representing Visual Concepts**: Each visual concept (e.g., B-roll, image assets) appears as a row in the grid.
- **Collapsible Rows**: Each row displays the original and enhanced prompts with their associated images, and the rows can be expanded or collapsed.
- **Image Selection and Ordering**: Users can **click on images** to assign selection numbers, and selected images are ordered based on user preference.
- **Visual Feedback**: Hovering over a visual concept row updates the right-hand panel with its attributes.

### Right-Hand Panel (Attributes)
The right-hand panel provides details and attributes about the selected visual concept:
- **Visual Concept Details**: Displays the **transcript sentence**, associated **visual concept**, and whether it's part of the **intro**, **content**, or **outro**.
- **Prompt Details**: Shows both the **original prompt** and the **enhanced prompt**.
- **Image Attributes**: When selecting an image, this sub-panel displays detailed information, including a **larger preview** of the image.
- **Reordering of Selected Images**: Allows reordering of images via a **drag-and-drop interface**.

### Footer Panel
The footer is optional but provides project-wide functionality:
- **Project Progress**: Displays the number of selected images compared to the total (e.g., "15 of 30 images selected").
- **Quick Save/Export**: Buttons for manual saving or exporting the project.
- **Undo/Redo**: Undo and redo buttons for reversing recent actions.
- **Keyboard Shortcuts Legend**: A small icon showing available keyboard shortcuts.
