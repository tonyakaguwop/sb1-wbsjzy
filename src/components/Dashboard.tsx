import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Settings, LogOut } from 'lucide-react';
import PromptInput from './PromptInput';
import PromptHistory from './PromptHistory';
import AgentCollaboration from './AgentCollaboration';

const Dashboard: React.FC = () => {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('input');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Multi-Agent LLM Tool</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Settings className="h-6 w-6" />
              </button>
              <button
                onClick={handleLogout}
                className="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex">
              <button
                className={`${
                  activeTab === 'input'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab('input')}
              >
                Prompt Input
              </button>
              <button
                className={`${
                  activeTab === 'history'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}
                onClick={() => setActiveTab('history')}
              >
                Prompt History
              </button>
              <button
                className={`${
                  activeTab === 'collaboration'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}
                onClick={() => setActiveTab('collaboration')}
              >
                Agent Collaboration
              </button>
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === 'input' && <PromptInput />}
            {activeTab === 'history' && <PromptHistory />}
            {activeTab === 'collaboration' && <AgentCollaboration />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;