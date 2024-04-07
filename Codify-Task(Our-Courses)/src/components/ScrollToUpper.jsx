import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const ScrollToUpper = () => {
  return (
    <ScrollToTop
      component={
        <div className="bg-header-color">
          <FaChevronUp size={20} color="white" />
        </div>
      }
      smooth
      className="fixed bottom-5 right-5 z-50 bg-header-color flex justify-center items-center rounded-none"
    />
  );
};
export default ScrollToUpper;
