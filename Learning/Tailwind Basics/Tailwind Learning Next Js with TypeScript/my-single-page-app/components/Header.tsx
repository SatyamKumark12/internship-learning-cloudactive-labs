import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NavLinksProps = {
  isOpen: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
  return (
    <div
      className={`nav-links duration-500 md:static absolute bg-black text-white text-2xl md:min-h-fit min-h-[60vh] left-0 top-${
        isOpen ? '0' : '-100%'
      } md:w-auto w-full flex items-center px-5`}
    >
      <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        <li>
          <Link className="hover:text-gray-500" href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="solution">
            Solution
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="#">
            Resource
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="#">
            Developers
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="#">
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black py-4 px-4">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
        <Link className="hover:text-gray-500" href="/">
        <Image
            className="w-30 cursor-pointer"
            src="/white-logo.png"
            alt="..."
            width={100}
            height={100}
          />
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <NavLinks isOpen={isOpen} />
        <div className="flex items-center gap-6">
        <button className='text-1xl bg-[#800080] text-white px-5 py-4 rounded-[10px]'>Buy 1 Token</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
