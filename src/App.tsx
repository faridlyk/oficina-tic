import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingView from './views/LandingView';

function App() {
  return (
    <Router>
      <main className="h-full">
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster richColors />
    </Router>
  );
}
export default App;
