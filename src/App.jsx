import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          🚀 Redux Toolkit CRUD App
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 rounded-md shadow">
            <p>Welcome! This is a styled starter page using <span className="font-semibold">Tailwind CSS</span>.</p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
              + Add New User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
