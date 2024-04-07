import { logo } from "../Images";

const Header = () => {
  return (
    <header className="bg-header-color text-white fixed w-full z-10">
      <div className="container px-16 flex justify-between items-center py-2">
        <img src={logo} alt="Logo" className="cursor-pointer m-0 w-20" />
        <nav className="flex items-center gap-4">
          <ul className="hidden sm:flex justify-around self-end text-[18px] font-semibold space-x-4">
            <li className="cursor-pointer px-3 tracking-normal">Courses</li>
            <li className="cursor-pointer px-3 tracking-normal">Placements</li>
            <li className="cursor-pointer px-3 tracking-normal">Contact Us</li>
          </ul>
          <button className="font-semibold cursor-pointer border bg-[#ffd319] text-[#000000] rounded-3xl text-[18px] px-6 py-2 transition-all hover:border-black hover:bg-[#000000] ease-in-out hover:text-[#ffd319]">
            Enquire Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
