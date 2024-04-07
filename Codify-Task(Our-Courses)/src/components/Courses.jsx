import React, { useState } from 'react';
import data from '../../data.json';
import { FaClosedCaptioning,FaDesktop} from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdAnalytics } from "react-icons/md";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidPaint } from "react-icons/bi";
import { MdShield,MdOutlineTerminal,MdOutlinePieChartOutline, MdOutlineAdb} from "react-icons/md";
import { CiCloudOn } from "react-icons/ci";
import { IoMdColorPalette } from "react-icons/io";




const Courses = () => {
    const [course, setCourse] = useState('Full Stack Development');

    const menuItems = [
        { id: 1, text: 'Full Stack Development',icon:<FaDesktop/>},
        { id: 2, text: 'Mobile App Development',icon:<HiOutlineDevicePhoneMobile/>},
        { id: 3, text: 'Data Science',icon:<FiBarChart2/> },
        { id: 4, text: 'Data Analytics',icon:<MdAnalytics/> },
        { id: 5, text: 'Software Testing',icon:<RiCalendarTodoFill/>},
        { id: 6, text: 'Digital Marketing',icon:<FaArrowTrendUp/> },
        { id: 7, text: 'UX/UI Design',icon:<BiSolidPaint/> },
        { id: 8, text: 'Cyber Security',icon:<MdShield/> },
        { id: 9, text: 'Core Java & Advance Java',icon:<MdOutlineTerminal/> },
        { id: 10, text: 'Python | C++ | DSA',icon:<FaClosedCaptioning/> },
        { id: 11, text: 'Cloud Computing',icon:<CiCloudOn/> },
        { id: 12, text: 'Graphic Designing',icon:<IoMdColorPalette/> },
        { id: 13, text: '3D Software Architecture',icon:<MdOutlinePieChartOutline/> },
        { id: 14, text: 'RPA Training',icon:<MdOutlineAdb/> },
    ];

    const handleCourseChange = (newCourse) => {
        setCourse(newCourse);
    };

    return (
        <div className='grid grid-cols-2 gap-4' style={{margin:'100px'}}>
            <div className="border border-gray-300 rounded-lg mb-4" style={{ backgroundColor: '#ffd3194d', width: "40%", top: '100px' }}>
                <ul className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <button key={item.id} className="flex items-center p-2 rounded-md" onClick={() => handleCourseChange(item.text)}>
                            {item.icon}
                            <span className="text-gray-700 font-medium hover:text-black">{item.text}</span>
                        </button>
                    ))}
                </ul>
            </div>
            <div className='grid grid-cols-2 gap-8 m-8'>
                {data.Courses[0][course].map((course, index) => (
                    <div key={index} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{course.title}</h2>
                        <p className="text-gray-700 dark:text-gray-400">{course.desc}</p>
                        <button className="button underline text-xl font-bold tracking-tight text-gray-900 dark:text-white">Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses;
