import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingView from './views/LandingView';
import AppsView from './views/AppsView';

function App() {
  return (
    <Router>
      <main className="h-full">
        <Routes>
          <Route
            path="/"
            element={<LandingView />}
          />
          <Route
            path="/apps"
            element={<AppsView />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster richColors />
    </Router>
  );
}
export default App;
