import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <Toaster
          toastOptions={{
            style: {
              background: 'var(--color-background)',
              color: '#f9fafb',
              border: '1px solid #4b5563',
            },
          }}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
