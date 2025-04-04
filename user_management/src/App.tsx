import { useState } from 'react';
import './App.css';

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", status: "active", dob: "1990-05-15" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "locked", dob: "1988-10-22" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", status: "active", dob: "1995-02-10" },
  { id: 4, name: "Bob Martin", email: "bob.martin@example.com", status: "locked", dob: "1980-08-05" },
  { id: 5, name: "Charlie Brown", email: "charlie.brown@example.com", status: "active", dob: "1992-11-30" },
  { id: 6, name: "David Lee", email: "david.lee@example.com", status: "active", dob: "1987-07-14" },
  { id: 7, name: "Eve Green", email: "eve.green@example.com", status: "active", dob: "1993-09-21" },
  { id: 8, name: "Frank White", email: "frank.white@example.com", status: "active", dob: "1994-01-25" },
  { id: 9, name: "Grace Balck", email: "grace.black@example.com", status: "active", dob: "1985-03-17" },
  { id: 10, name: "Hannah Purple", email: "hannah.purple@example.com", status: "active", dob: "1996-12-03" },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle theme toggle
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
      {/* Navbar */}
      <nav className={`bg-[#3251D0] text-white py-4 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4`}>
        <h1 className="text-lg font-semibold">User Management</h1>
        <div className="flex gap-2 w-full sm:w-auto justify-end">
          <button className="bg-white text-[#3251D0] px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
            Create User
          </button>
          <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
            Logout
          </button>
          <button 
            onClick={toggleTheme}
            className="p-1.5 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {/* Moon (shows in light mode) */}
            <svg
              className={`w-5 h-5 ${isDarkMode ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>

            {/* Sun (shows in dark mode) */}
            <svg
              className={`w-5 h-5 ${isDarkMode ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Search Bar (styled but non-functional) */}
      <div className="p-4 sm:p-6 text-left">
        <input
          type="text"
          placeholder="Search users..."
          className={`w-full sm:w-1/2 md:w-1/3 p-2 border rounded-md 
                    ${isDarkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-300 border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
                      : 'bg-white text-gray-700 placeholder-gray-500 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'}`}
        />
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 sm:p-6">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`p-4 rounded-md shadow-md flex flex-col items-center ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} transition-colors duration-200`}
          >
            {/* Centered User Initial */}
            <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold mb-3">
              {user.name.split(" ").map((n) => n[0]).join("")}
            </div>
          
            {/* User Info */}
            <div className="w-full text-left mt-2">
              <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {user.name}
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Email: {user.email}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Status: {user.status}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                Date of Birth: {user.dob}
              </p>
            </div>
          
            {/* Buttons */}
            <div className="mt-4 flex justify-end gap-2 w-full">
              <button className={`px-3 py-1 rounded-md text-sm transition-colors ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                Edit
              </button>
              <button className={`px-3 py-1 rounded-md text-sm transition-colors ${
                isDarkMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}