import CentralGrid from './components/CentralGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="flex flex-col h-screen bg-background font-sans text-text-primary">
      <Header />
      <div className="flex flex-1 overflow-hidden p-4 space-x-4">
        <LeftPanel />
        <CentralGrid />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;