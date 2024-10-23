import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <UserProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            </Routes>
          </div>
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
}

export default App;