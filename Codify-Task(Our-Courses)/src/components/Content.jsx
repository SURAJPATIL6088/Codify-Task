import Courses from "./Courses";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="flex flex-row gap-8 justify-center items-center w-full pt-20">
      <Sidebar />
      <Courses />
    </div>
  );
};
export default Content;
