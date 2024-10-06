# FlyBrief Component List

The components for the FlyBrief application are reusable UI elements that form the building blocks of the dockable UI and its various panels, interactions, and workflows. These components will be referenced throughout the application and should be designed to work within the dockable UI framework.

---

## 1. Header Components
- **ProjectDropdown**: A dropdown component for switching between projects in the header.
- **SearchBar**: A search input component for internal and external searches in the header.
- **SettingsIcon**: A small button or icon to access global settings.

---

## 2. Left-Hand Panel Components
- **TranscriptNavigator**: A tree-like component to navigate the transcript, broken into sections (Intro, Content, Outro).
- **SentenceRow**: A collapsible row component that displays individual transcript sentences and related visual concepts.
- **Tags**: A tag or label component for special markers like Calls to Action (CTAs).

---

## 3. Central Grid Components
- **VisualConceptRow**: A row component representing a visual concept, including the original and enhanced prompts.
- **ImageThumbnail**: A component for displaying a small preview of an image in the grid.
- **SelectionMarker**: A small number marker to indicate the order of image selection (1, 2, 3, etc.).

---

## 4. Right-Hand Panel Components
- **DetailsPanel**: A container component for displaying detailed information about the currently selected visual concept.
- **PromptDetails**: A sub-component inside the details panel that shows the original and enhanced prompts.
- **ImagePreview**: A larger preview component for the selected image in the right-hand panel.
- **DragAndDropList**: A drag-and-drop-enabled list of selected images that allows users to reorder them.

---

## 5. Footer Components
- **ProgressBar**: A visual component that shows the progress of image selection across the entire project.
- **SaveButton**: A simple button to save the current state of the project.
- **ExportButton**: A button to export the project’s selected images and metadata.
- **UndoRedoButtons**: Small circular buttons for undoing or redoing recent actions.

---

## 6. Utility Components
- **LockIcon**: A generic lock/unlock icon that can be applied to any panel (header, left, right, or footer).
- **CollapsiblePanel**: A generic component that can be applied to any panel to handle the expand/collapse behavior.
