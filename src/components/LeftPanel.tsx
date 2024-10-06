import React from 'react';

const LeftPanel: React.FC = () => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold text-text-primary mb-4">Transcript Navigation</h2>
      <div className="space-y-4">
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary">Intro</h3>
          {/* Add collapsible intro content here */}
        </div>
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary">Content</h3>
          {/* Add collapsible content here */}
        </div>
        <div className="bg-background rounded-md shadow-inner p-2">
          <h3 className="font-semibold text-text-primary">Outro</h3>
          {/* Add collapsible outro content here */}
        </div>
      </div>
      <input 
        type="text" 
        placeholder="Search transcript..." 
        className="w-full mt-4 p-2 bg-white rounded-md shadow-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
      />
      <button className="w-full mt-4 bg-accent text-white rounded-md shadow-md p-2 hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
        Project Settings
      </button>
    </div>
  );
};

export default LeftPanel;