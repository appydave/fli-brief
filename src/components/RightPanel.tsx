import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold text-text-primary mb-4">Visual Concept Details</h2>
      <div className="space-y-4">
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary mb-1">Transcript Sentence</h3>
          <p className="text-text-secondary text-sm">This is the transcript sentence associated with the selected visual concept...</p>
        </div>
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary mb-1">Original Prompt</h3>
          <p className="text-text-secondary text-sm">This is the original prompt for the selected visual concept...</p>
        </div>
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary mb-1">Enhanced Prompt</h3>
          <p className="text-text-secondary text-sm">This is the enhanced prompt for the selected visual concept...</p>
        </div>
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary mb-2">Selected Images</h3>
          <div className="space-y-2">
            {/* Placeholder for drag-and-drop reordering interface */}
            <div className="bg-white rounded-md shadow-md p-2 text-text-secondary text-sm">Image 1</div>
            <div className="bg-white rounded-md shadow-md p-2 text-text-secondary text-sm">Image 2</div>
            <div className="bg-white rounded-md shadow-md p-2 text-text-secondary text-sm">Image 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;