import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CoursesList = createContext();

const CoursesProvider = ({ children }) => {
  const [course, setCourse] = useState("Full Stack Development");

  return (
    <CoursesList.Provider value={{ course, setCourse }}>
      {children}
    </CoursesList.Provider>
  );
};
export default CoursesProvider;

CoursesProvider.propTypes = {
  children: PropTypes.node,
};
