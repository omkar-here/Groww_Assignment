// components/Navbar.js

import Link from "next/link";
import Image from "next/image";
import GLogo from "/public/groww.webp";
const Navbar = ({ merchantName, merchantLogo }) => {
  return (
    <nav className=" bg-blue-200 text-primary-foreground border-b-4 border-b-[#00F2B9]">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center ">
        {/* Merchant Logo and Name */}
        <div className="flex items-center">
          <Image
            src={GLogo}
            height={40}
            alt={merchantName}
            width={40}
            quality={100}
            className="h-8 mr-2"
          />
          <span className="text-lg font-semibold">{merchantName}</span>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800 hover:text-gray-600 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v2m0 10v2m-6.303-4.303a6 6 0 118.606 0m-8.606 0a3 3 0 014.243 0"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
