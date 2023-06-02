import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-800 border-t border-gray-200">
      <div className="w-full mx-auto container md:p-6 p-4 flex">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2023{' '}
          <a
            href="https://samuelnicholls.dev/"
            aria-label="Link to portfolio"
            target="_blank"
            className="hover:underline" 
            rel="noreferrer"
          >
            Samuel Nicholls
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;