import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} <span className="font-semibold">{"petty's paws"}</span>
          </p>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
              Project by AsahaSora
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
