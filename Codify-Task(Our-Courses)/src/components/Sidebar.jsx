import { FaClosedCaptioning, FaDesktop } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdAnalytics } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidPaint } from "react-icons/bi";
import {
  MdShield,
  MdOutlineTerminal,
  MdOutlinePieChartOutline,
  MdOutlineAdb,
} from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";
import { useContext } from "react";
import { CoursesList } from "./CoursesProvider";

const Sidebar = () => {
  const { course, setCourse } = useContext(CoursesList);

  const menuItems = [
    { id: 1, text: "Full Stack Development", icon: <FaDesktop size={25} /> },
    {
      id: 2,
      text: "Mobile App Development",
      icon: <HiOutlineDevicePhoneMobile size={25} />,
    },
    { id: 3, text: "Data Science", icon: <FiBarChart2 size={25} /> },
    { id: 4, text: "Data Analytics", icon: <MdAnalytics size={25} /> },
    { id: 5, text: "Software Testing", icon: <RiCalendarTodoFill size={25} /> },
    { id: 6, text: "Digital Marketing", icon: <FaArrowTrendUp size={25} /> },
    { id: 7, text: "UX - UI", icon: <BiSolidPaint size={25} /> },
    { id: 8, text: "Cyber Security", icon: <MdShield size={25} /> },
    {
      id: 9,
      text: "Core Java & Advance Java",
      icon: <MdOutlineTerminal size={25} />,
    },
    {
      id: 10,
      text: "Python | C++ | DSA",
      icon: <FaClosedCaptioning size={25} />,
    },
    { id: 11, text: "Cloud Computing", icon: <CiCloudOn size={25} /> },
    { id: 12, text: "Graphic Designing", icon: <IoMdColorPalette size={25} /> },
    {
      id: 13,
      text: "3D Software Architecture",
      icon: <MdOutlinePieChartOutline size={25} />,
    },
    { id: 14, text: "RPA Training", icon: <MdOutlineAdb size={25} /> },
  ];

  const handleCourseChange = (newCourse) => {
    setCourse(newCourse);
  };
  
  return (
    <div className="border border-gray-300 rounded-lg mb-4 self-start">
      <ul className="flex flex-col gap-4 bg-[#fff2ba] p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center p-2 rounded-md gap-3"
            onClick={() => handleCourseChange(item.text)}
          >
            {item.icon}
            <span className="text-gray-700 hover:text-black">{item.text}</span>
          </button>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
