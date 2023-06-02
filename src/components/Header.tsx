import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="w-full md:p-6 p-4 bg-gray-800 border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://samuelnicholls.dev/"
          aria-label="Link to portfolio"
          target="_blank"
          className="flex items-center border-2 p-2 border-gray-300" 
          rel="noreferrer"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            SN
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;