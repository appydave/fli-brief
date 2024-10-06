import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-text-secondary">Project Progress: 0 of 0 images selected</p>
        <div className="space-x-2">
          <button className="bg-accent text-white px-3 py-1 rounded-md shadow-md text-sm hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            Save
          </button>
          <button className="bg-accent text-white px-3 py-1 rounded-md shadow-md text-sm hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            Export
          </button>
          <button className="bg-white text-text-primary px-3 py-1 rounded-md shadow-md text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            Undo
          </button>
          <button className="bg-white text-text-primary px-3 py-1 rounded-md shadow-md text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            Redo
          </button>
          <button className="bg-white text-text-primary px-3 py-1 rounded-md shadow-md text-sm hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            Keyboard Shortcuts
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;