import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Q-SYS UK. All rights reserved.
        </p>
        <div className="flex space-x-4"> 
          <Link href="https://github.com/emenius96" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#ffffff" 
              className="mr-1"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.388.6.111.793-.26.793-.577 0-.287-.011-1.245-.017-2.258-3.338.724-4.042-1.607-4.042-1.607-.546-1.38-1.333-1.749-1.333-1.749-1.09-.745.083-.73.083-.73 1.207.084 1.839 1.238 1.839 1.238 1.069 1.832 2.803 1.301 3.48.995.108-.774.418-1.301.76-1.601-2.665-.303-5.466-1.335-5.466-5.93 0-1.311.469-2.38 1.238-3.22-.125-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.227.957-.266 1.986-.399 3.003-.404 1.017.005 2.046.138 3.003.404 2.29-1.549 3.3-1.227 3.3-1.227.653 1.65.243 2.873.119 3.176.77.84 1.238 1.909 1.238 3.22 0 4.609-2.81 5.625-5.474 5.924.43.372.818 1.103.818 2.222 0 1.606-.014 2.9-.017 3.287 0 .319.189.692.797.576C20.563 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}