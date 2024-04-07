import { useContext } from "react";
import data from "../../data.json";
import { CoursesList } from "./CoursesProvider";

const Courses = () => {
  const { course } = useContext(CoursesList);

  return (
    <div className="self-start flex flex-col gap-8 w-[60%] py-3 h-screen overflow-y-scroll no-scrollbar">
      <div className="bg-yellow-400 p-8 text-2xl text-center tracking-wide">
        Confused which course to select, Explore from our courses below.
      </div>
      <div className="font-semibold text-2xl">{course}</div>
      <div className="grid grid-cols-2 gap-8 ">
        {data.Courses[0][course].map((course, index) => (
          <div
            key={index}
            className="max-w-sm p-6 border flex flex-col gap-4 border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              {course.title}
            </h2>
            <p className="text-gray-700 text-lg">{course.desc}</p>
            <div className="flex flex-col gap-2 self-start ">
              <button className="button text-xl flex flex-col font-semibold tracking-tight text-gray-900 px-2">
                <span>Get Started</span>
              </button>
              <div className="border-t-2 border-t-black"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
