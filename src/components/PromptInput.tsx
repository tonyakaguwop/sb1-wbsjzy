import React, { useState } from 'react';
import { Send, Zap } from 'lucide-react';

const PromptInput: React.FC = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement prompt submission logic
    console.log('Prompt submitted:', prompt);
    setPrompt('');
  };

  const handleOptimize = () => {
    // TODO: Implement prompt optimization logic
    console.log('Optimizing prompt:', prompt);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Enter your prompt
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
          <p>Type your prompt below and click submit to process it with our multi-agent LLM system.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="w-full">
            <textarea
              id="prompt"
              name="prompt"
              rows={4}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={handleOptimize}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mr-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Optimize
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="h-5 w-5 mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromptInput;