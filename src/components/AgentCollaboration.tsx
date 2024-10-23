import React, { useState } from 'react';
import { Users, MessageSquare, Zap } from 'lucide-react';

const AgentCollaboration: React.FC = () => {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [collaborationResult, setCollaborationResult] = useState<string>('');

  const availableAgents = [
    { id: 'gpt3', name: 'GPT-3', description: 'OpenAI\'s powerful language model' },
    { id: 'gpt4', name: 'GPT-4', description: 'Advanced version of GPT-3 with improved capabilities' },
    { id: 'bert', name: 'BERT', description: 'Google\'s bidirectional transformer model' },
    { id: 't5', name: 'T5', description: 'Google\'s Text-to-Text Transfer Transformer' },
  ];

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents(prev =>
      prev.includes(agentId)
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleCollaborate = () => {
    // TODO: Implement actual collaboration logic
    setCollaborationResult(`Collaboration result between ${selectedAgents.join(', ')} would appear here.`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Agent Collaboration
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
          <p>Select the agents you want to collaborate on your prompt.</p>
        </div>
        <div className="mt-5 space-y-4">
          {availableAgents.map(agent => (
            <div key={agent.id} className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={agent.id}
                  name={agent.id}
                  type="checkbox"
                  checked={selectedAgents.includes(agent.id)}
                  onChange={() => handleAgentToggle(agent.id)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={agent.id} className="font-medium text-gray-700 dark:text-gray-300">{agent.name}</label>
                <p className="text-gray-500 dark:text-gray-400">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button
            onClick={handleCollaborate}
            disabled={selectedAgents.length < 2}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Users className="h-5 w-5 mr-2" />
            Start Collaboration
          </button>
        </div>
        {collaborationResult && (
          <div className="mt-5">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">Collaboration Result</h4>
            <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              <p className="text-sm text-gray-700 dark:text-gray-300">{collaborationResult}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCollaboration;