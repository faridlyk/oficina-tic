import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingView from './views/LandingView';
import AppsView from './views/AppsView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

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
          <Route
            path="/acceder"
            element={<LoginView />}
          />
          <Route
            path="/registrarse"
            element={<RegisterView />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster richColors />
    </Router>
  );
}
export default App;
