import { useState, useEffect } from "react";

function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("Deutsch");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full min-h-full h-screen dark:bg-dark-300">
      <div className="max-w-base mx-auto px-4 lg:px-5 pt-6 md:pt-9 xl:pt-12">
        <div className="p-6 max-w-md bg-white dark:bg-dark-200 dark:!text-gray-2 rounded-lg shadow-md">
          <h1 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-300">
            Erscheinungsbild
          </h1>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              User
            </label>
            <p className="mt-1 text-gray-700 dark:text-gray-400">
              m.mustermann@ebay.com
            </p>
          </div>
          <hr />

          <div className="mb-4 mt-3 flex items-center justify-between">
            <div className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Sprache
              <p className=" text-stone-400">Deutsch</p>
            </div>
            <div className="mt-1 flex items-center gap-4">
              <span className=" text-stone-400">Deutsch</span>
              <h2>English</h2>
            </div>
          </div>
          <hr />

          <div className=" mt-4 flex items-center justify-between">
            <div className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Mode
              <p className=" text-stone-400">Dark Mode</p>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Dark Mode
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
