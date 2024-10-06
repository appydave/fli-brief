import React from 'react';

const CentralGrid: React.FC = () => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-4">Visual Concepts</h2>
      <div className="space-y-4">
        <div className="bg-background rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Visual Concept 1</h3>
          <p className="text-text-secondary mb-1"><span className="font-medium">Original Prompt:</span> This is the original prompt for Visual Concept 1...</p>
          <p className="text-text-secondary mb-2"><span className="font-medium">Enhanced Prompt:</span> This is the enhanced prompt for Visual Concept 1...</p>
          <div className="flex space-x-2">
            {/* Placeholder for image thumbnails */}
            <div className="w-24 h-24 bg-white rounded-md shadow-md flex items-center justify-center text-text-secondary">Image 1</div>
            <div className="w-24 h-24 bg-white rounded-md shadow-md flex items-center justify-center text-text-secondary">Image 2</div>
            <div className="w-24 h-24 bg-white rounded-md shadow-md flex items-center justify-center text-text-secondary">Image 3</div>
          </div>
        </div>
        {/* Add more visual concept rows as needed */}
      </div>
    </div>
  );
};

export default CentralGrid;