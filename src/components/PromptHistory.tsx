import React from 'react';
import { Clock, Tag } from 'lucide-react';

const PromptHistory: React.FC = () => {
  // TODO: Implement actual prompt history fetching logic
  const mockHistory = [
    { id: 1, prompt: 'Generate a creative story about a time-traveling scientist', timestamp: '2023-05-01T10:30:00Z', tags: ['creative', 'sci-fi'] },
    { id: 2, prompt: 'Explain quantum computing in simple terms', timestamp: '2023-05-02T14:45:00Z', tags: ['science', 'explanation'] },
    { id: 3, prompt: 'Write a haiku about artificial intelligence', timestamp: '2023-05-03T09:15:00Z', tags: ['poetry', 'AI'] },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {mockHistory.map((item) => (
          <li key={item.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                  {item.prompt}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Tag className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    {item.tags.join(', ')}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                  <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <p>
                    Used on <time dateTime={item.timestamp}>{new Date(item.timestamp).toLocaleString()}</time>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptHistory;