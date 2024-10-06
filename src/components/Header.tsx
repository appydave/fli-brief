import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-background p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-primary">FliBrief</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-white rounded-md shadow-md p-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300">
            <option>Select Project</option>
          </select>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white rounded-md shadow-md p-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
          />
          <button className="bg-accent text-white rounded-md shadow-md px-4 py-2 hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent">
            External Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;