import React from "react";
import { logo } from "../Images";

const Header = () => {
  return (
    <header className="bg-[hsl(0,1%,25%)] text-white fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="cursor-pointer m-0 h-20" />
        </div>
        <nav className="flex justify-between items-center">
          <ul className="hidden sm:flex justify-around m-8 text-[20px] leading-[23.4px] space-x-4">
            <li className="cursor-pointer px-3 tracking-normal">Courses</li>
            <li className="cursor-pointer px-3 tracking-normal">Placements</li>
            <li className="cursor-pointer px-3 tracking-normal">Contact Us</li>
          </ul>
          <button className="font-semibold cursor-pointer border bg-[#ffd319] text-[#000000] rounded-3xl text-[20px] leading-[27px] p-3 hover:border-red-600 hover:bg-[#000000] ease-in-out hover:text-[#ffd319]">
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
